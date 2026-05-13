// AI·Press — runtime config.
//
// API_URL: вписать после деплоя Cloudflare Worker (см. cf-worker/README.md).
// Если оставить пустым, сердечки на сайте не появятся.
export const API_URL = "";

export const STATS_ENABLED = API_URL.length > 0;
