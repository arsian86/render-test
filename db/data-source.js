const { DataSource } = require("typeorm");
const db_config = require("../config/db");

const { Admin } = require("../entities/Admin");
const { Coach_Skill } = require("../entities/Coach_Skill");
const { Coach } = require("../entities/Coach");
const { Course_Chapter } = require("../entities/Course_Chapter");
const { Course_Video } = require("../entities/Course_Video");
const { Course } = require("../entities/Course");
const { Payment_Transfer } = require("../entities/Payment_Transfer");
const { Rating } = require("../entities/Rating");
const { Skill } = require("../entities/Skill");
const { Subscription_Skill } = require("../entities/Subscription_Skill");
const { Subscription } = require("../entities/Subscription");
const { User_Course_Favorite } = require("../entities/User_Course_Favorite");
const { User } = require("../entities/User");

const AppDataSource = new DataSource({
  type: "postgres",
  host: db_config.host,
  port: db_config.port,
  username: db_config.username,
  password: db_config.password,
  database: db_config.database,
  ssl: db_config.ssl,
  synchronize: false, // 開發時 true，部署時請改為 false 並使用 migration
  logging: true,
  entities: [
    Admin,
    Coach_Skill,
    Coach,
    Course_Chapter,
    Course_Video,
    Course,
    Payment_Transfer,
    Rating,
    Skill,
    Subscription_Skill,
    Subscription,
    User_Course_Favorite,
    User,
  ],
});

module.exports = AppDataSource;
