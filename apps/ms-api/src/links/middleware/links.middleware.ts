import express from "express";
import debug from "debug";

import { getObjectId } from "../../common/utils/db.utils";
import { APIError, HTTP404Error } from "../../common/utils/error.utils";
import { HttpStatusCode } from "../../common/constants/httpStatusCode.constants";
import { ResponseMessages } from "../../common/constants/responseMessages.constants";

import linksService from "../services/links.service";

const log: debug.IDebugger = debug("app:links-middleware");

class LinksMiddleware {
  async validateLinkExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const link = await linksService.readById(
      getObjectId(req.params.linkId)
    );
    if (link) {
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

  async extractLinkId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      req.body._id = getObjectId(req.params.linkId.toString());
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

export default new LinksMiddleware();
