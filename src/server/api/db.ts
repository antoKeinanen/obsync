import nano from "nano";
import { env } from "~/env";

const connection = nano(env.DATABASE_URL);
export const db = connection.use(env.DATABASE_NAME);