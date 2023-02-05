import express from 'express';
import postersService from '../services/posters.service';
import debug from 'debug';
import { HttpStatusCode } from '../../common/constants/httpStatusCode.constants';
import { ResponseMessages } from '../../common/constants/responseMessages.constants';
import { APIError } from '../../common/utils/error.utils';

const log: debug.IDebugger = debug('app:posters-controller');

class PostersController {
  async listPosters(req: express.Request, res: express.Response) {
    let posters: any[];
    try {
      posters = await postersService.list(100, 0);
    } catch (e) {
      res.status(HttpStatusCode.INTERNAL_SERVER).send({
        errors: [ResponseMessages.LINKS_GET_FAIL],
      });
      throw new APIError(ResponseMessages.LINKS_GET_FAIL);
    }
    res.status(HttpStatusCode.SUCCESS).send(posters);
  }

  async getPosterById(req: express.Request, res: express.Response) {
    let poster: any;
    try {
      poster = await postersService.readById(req.body._id);
    } catch (e) {
      throw new APIError(ResponseMessages.LINK_GET_FAIL);
    }
    res.status(HttpStatusCode.SUCCESS).send(poster);
  }

  async createPoster(req: express.Request, res: express.Response) {
    let poster: any;
    try {
      poster = await postersService.create(req.body);
    } catch (e) {
      throw new APIError(ResponseMessages.LINK_CREATE_FAIL);
    }
    res.status(HttpStatusCode.CREATED).send(poster);
  }

  async patch(req: express.Request, res: express.Response) {
    try {
      log(await postersService.patchById(req.body._id, req.body));
    } catch (e) {
      throw new APIError(ResponseMessages.LINK_UPDATE_FAIL);
    }
    res.status(HttpStatusCode.NO_CONTENT).send();
  }

  async put(req: express.Request, res: express.Response) {
    try {
      log(await postersService.putById(req.body._id, req.body));
    } catch (e) {
      throw new APIError(ResponseMessages.LINK_UPDATE_FAIL);
    }
    res.status(HttpStatusCode.NO_CONTENT).send();
  }

  async removePoster(req: express.Request, res: express.Response) {
    try {
      log(await postersService.deleteById(req.body._id));
    } catch (e) {
      throw new APIError(ResponseMessages.LINK_DELETE_FAIL);
    }
    res.status(HttpStatusCode.NO_CONTENT).send();
  }
}

export default new PostersController();
