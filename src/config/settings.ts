import { dotEnv, bcrypt } from "../../debs.ts";

const ENV: string = Deno.env.toObject().ENV || "test";
const ENV_PATH = `.env/.env.${ENV}`;
const REDIS_SECRET: string = await bcrypt.genSalt(8);

const envConfig = dotEnv({ path: ENV_PATH });

/**
 * Configuration
 */

type ConfigType = {
  env: string;
  appName: string;
  appProtocol: string;
  appIP?: string;
  appHost: string;
  appPort: number;
  appUrl: string;
  redisHost?: string;
  redisPort?: number;
  redisSecret?: string;
  dbHost: string;
  dbUsername: string;
  dbPassword: string;
  dbName: string;
};

export const config: ConfigType = {
  env: ENV,
  appName: envConfig.APP_NAME,
  appIP: envConfig.APP_IP,
  appProtocol: envConfig.APP_PROTOCOL,
  appHost: envConfig.APP_HOST,
  appPort: Number(envConfig.APP_PORT),
  appUrl: `${envConfig.APP_PROTOCOL}://${envConfig.APP_HOST}:${envConfig.APP_PORT}`,
  redisHost: envConfig.REDIS_HOST,
  redisPort: Number(envConfig.REDIS_PORT),
  redisSecret: REDIS_SECRET,
  dbHost: envConfig.DB_HOST,
  dbUsername: envConfig.DB_USERNAME,
  dbPassword: envConfig.DB_PASSWORD,
  dbName: envConfig.DB_NAME,
};

export default config;
