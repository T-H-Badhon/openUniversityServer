import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  db_link: process.env.DB_LINK,
  port: process.env.PORT,
};
