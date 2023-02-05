import express from "express";
import debug from "debug";

import { getObjectId } from "../../common/utils/db.utils";
import { APIError, HTTP404Error } from "../../common/utils/error.utils";
import { HttpStatusCode } from "../../common/constants/httpStatusCode.constants";
import { ResponseMessages } from "../../common/constants/responseMessages.constants";

import postersService from "../services/posters.service";

const log: debug.IDebugger = debug("app:posters-middleware");

class PostersMiddleware {
  async validatePosterExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const poster = await postersService.readById(
      getObjectId(req.params.posterId)
    );
    if (poster) {
      next();
    } else {
      res.status(HttpStatusCode.NOT_FOUND).send({
        error: ResponseMessages.POSTER_NOT_FOUND(req.params.posterId),
      });
      throw new HTTP404Error(
        ResponseMessages.POSTER_NOT_FOUND(req.params.posterId)
      );
    }
  }

  async extractPosterId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      req.body._id = getObjectId(req.params.posterId.toString());
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

export default new PostersMiddleware();
