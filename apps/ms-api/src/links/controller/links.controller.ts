import express from 'express';
import linksService from '../services/links.service';
import debug from 'debug';
import { HttpStatusCode } from '../../common/constants/httpStatusCode.constants';
import { ResponseMessages } from '../../common/constants/responseMessages.constants';
import { APIError } from '../../common/utils/error.utils';

const log: debug.IDebugger = debug('app:links-controller');

class LinksController {
  async listLinks(req: express.Request, res: express.Response) {
    let links: any[];
    try {
      links = await linksService.list(100, 0);
    } catch (e) {
      res.status(HttpStatusCode.INTERNAL_SERVER).send({
        errors: [ResponseMessages.LINKS_GET_FAIL],
      });
      throw new APIError(ResponseMessages.LINKS_GET_FAIL);
    }
    res.status(HttpStatusCode.SUCCESS).send(links);
  }

  async getLinkById(req: express.Request, res: express.Response) {
    let link: any;
    try {
      link = await linksService.readById(req.body._id);
    } catch (e) {
      throw new APIError(ResponseMessages.LINK_GET_FAIL);
    }
    res.status(HttpStatusCode.SUCCESS).send(link);
  }

  async createLink(req: express.Request, res: express.Response) {
    let link: any;
    try {
      link = await linksService.create(req.body);
    } catch (e) {
      throw new APIError(ResponseMessages.LINK_CREATE_FAIL);
    }
    res.status(HttpStatusCode.CREATED).send(link);
  }

  async patch(req: express.Request, res: express.Response) {
    try {
      log(await linksService.patchById(req.body._id, req.body));
    } catch (e) {
      throw new APIError(ResponseMessages.LINK_UPDATE_FAIL);
    }
    res.status(HttpStatusCode.NO_CONTENT).send();
  }

  async put(req: express.Request, res: express.Response) {
    try {
      log(await linksService.putById(req.body._id, req.body));
    } catch (e) {
      throw new APIError(ResponseMessages.LINK_UPDATE_FAIL);
    }
    res.status(HttpStatusCode.NO_CONTENT).send();
  }

  async removeLink(req: express.Request, res: express.Response) {
    try {
      log(await linksService.deleteById(req.body._id));
    } catch (e) {
      throw new APIError(ResponseMessages.LINK_DELETE_FAIL);
    }
    res.status(HttpStatusCode.NO_CONTENT).send();
  }
}

export default new LinksController();
