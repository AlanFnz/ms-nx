//////// LINKS ////////
const LINKS_BASE = "/links";
const PARAM_LINK_ID = "/:linkId";

//////// AUTH /////////
const AUTH_BASE = "/auth";
const AUTH_REFRESH_TOKEN = "/refresh-token";

////////////////////////
////////////////////////
////////////////////////

export const LINKS = {
  FEATURES: LINKS_BASE,
  FEATURE_ID: LINKS_BASE + PARAM_LINK_ID,
};

export const AUTH = {
  AUTH: AUTH_BASE,
  AUTH_REFRESH_TOKEN: AUTH_BASE + AUTH_REFRESH_TOKEN,
};
