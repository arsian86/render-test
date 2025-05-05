//NODE_ENV在 Render 後台預設為 "production"
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
//config是針對環境變數的統一管理
const db = require("./db");
const web = require("./web");
const secret = require("./secret");
const email = require("./email"); // 新增 email 設定

// 整合所有設定檔案
const config = {
  db,
  web,
  secret,
  email, // 添加 email 設定
};

class ConfigManager {
  static get(path) {
    if (!path || typeof path !== "string") {
      throw new Error(`Incorrect path: ${path}`);
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
