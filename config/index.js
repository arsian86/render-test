//這隻index.js主要是用來讀取.env檔案的 處理環境變數的

//NODE_ENV在 Render 後台預設為 "production"
if (process.env.NODE_ENV !== "production") {
	// 如果不是 production（例如你在自己電腦開發）
	// 才去把 .env 裡的內容讀進來
	require("dotenv").config();
}
//config是針對環境變數的統一管理
const db = require("./db");
const web = require("./web");
const secret = require("./secret");

const config = {
	db,
	web,
	secret,
};

class ConfigManager {
	/**
	 * Retrieves a configuration value based on the provided dot-separated path.
	 * Throws an error if the specified configuration path is not found.
	 *
	 * @param {string} path - Dot-separated string representing the configuration path.
	 * @returns {*} - The configuration value corresponding to the given path.
	 * @throws Will throw an error if the configuration path is not found.
	 */

	static get(path) {
		if (!path || typeof path !== "string") {
			throw new Error(`incorrect path: ${path}`);
		}
		const keys = path.split(".");
		let configValue = config;
		keys.forEach((key) => {
			if (!Object.prototype.hasOwnProperty.call(configValue, key)) {
				throw new Error(`config ${path} not found`);
			}
			configValue = configValue[key];
		});
		return configValue;
	}
}

module.exports = ConfigManager;
