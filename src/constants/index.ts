import { clientEnv } from "@/env/schema.mjs";

export const GIPHY_URL_API = clientEnv.NEXT_PUBLIC_URL_API || "";
export const GIPHY_API_KEY = clientEnv.NEXT_PUBLIC_API_KEY || "";
