import express from "express";
import debug from "debug";

import featureFlagsService from "../services/links.service";

import { getObjectId } from "../../common/utils/db.utils";
import { APIError, HTTP404Error } from "../../common/utils/error.utils";
import { HttpStatusCode } from "../../common/constants/httpStatusCode.constants";
import { ResponseMessages } from "../../common/constants/responseMessages.constants";

const log: debug.IDebugger = debug("app:links-middleware");

class FeatureFlagsMiddleware {
  async validateFeatureExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const feature = await featureFlagsService.readById(
      getObjectId(req.params.linkId)
    );
    if (feature) {
      next();
    } else {
      res.status(HttpStatusCode.NOT_FOUND).send({
        error: ResponseMessages.LINK_NOT_FOUND(req.params.linkId),
      });
      throw new HTTP404Error(
        ResponseMessages.LINK_NOT_FOUND(req.params.linkId)
      );
    }
  }

  async extractFeatureId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      req.body._id = getObjectId(req.params.featureId.toString());
    } catch (e) {
      res.status(HttpStatusCode.INTERNAL_SERVER).send({
        errors: [ResponseMessages.OBJECT_ID_ERROR],
      });
      log(e);
      throw new APIError(ResponseMessages.OBJECT_ID_ERROR);
    }
    next();
  }
}

export default new FeatureFlagsMiddleware();
