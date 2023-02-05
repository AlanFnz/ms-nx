import { Link } from "@ixtlan-nx/shared-types";

export const ResponseMessages = {
  // common
  VALIDATION_ERROR:
    "One or more errors occurred when validating this request body",
  OBJECT_ID_ERROR: "Something went wrong when getting this object id",
  INVALID_ID: "Invalid ID",

  // auth
  JWT_FAIL: "Something went wrong when creating this token",
  JWT_REFRESH_INVALID: "Invalid refresh token",
  JWT_REFRESH_MISSING: "Missing required field: refreshToken",
  INVALID_DATA: "Invalid email and/or password",

  // links
  LINK_NOT_FOUND: (linkId: Link) => `Feature ${linkId} not found`,
  LINKS_GET_FAIL: "Something went wrong when fetching links",
  LINK_GET_FAIL: "Something went wrong when fetching this link",
  LINK_CREATE_FAIL: "Something went wrong when creating this link",
  LINK_UPDATE_FAIL: "Something went wrong when updating this link",
  LINK_DELETE_FAIL: "Something went wrong when deleting this link",

};
