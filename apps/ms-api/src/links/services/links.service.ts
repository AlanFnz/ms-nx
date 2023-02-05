import { Types } from 'mongoose';

import LinkDao from "../dao/link.dao";
import { CRUD } from "../../common/interfaces/crud.interface";
import { CreateLinkDto } from "../dto/create.link.dto";
import { PutLinkDto } from "../dto/put.link.dto";
import { PatchLinkDto } from "../dto/patch.link.dto";

class LinksService implements CRUD {
  async create(resource: CreateLinkDto) {
    return LinkDao.addLink(resource);
  }

  async deleteById(id: Types.ObjectId) {
    return LinkDao.removeLinkById(id);
  }

  async list(limit: number, page: number) {
    return LinkDao.getLinks(limit, page);
  }

  async patchById(id: Types.ObjectId, resource: PatchLinkDto) {
    return LinkDao.updateLinkById(id, resource);
  }

  async readById(id: Types.ObjectId) {
    return LinkDao.getLinkById(id);
  }

  async putById(id: Types.ObjectId, resource: PutLinkDto) {
    return LinkDao.updateLinkById(id, resource);
  }
}

export default new LinksService();
