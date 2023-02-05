import { Types } from 'mongoose';

import FeatureFlagsDao from "../dao/poster.dao";
import { CRUD } from "../../common/interfaces/crud.interface";
import { CreatePosterDto } from "../dto/create.poster.dto";
import { PutPosterDto } from "../dto/put.poster.dto";
import { PatchPosterDto } from "../dto/patch.poster.dto";

class LinksService implements CRUD {
  async create(resource: CreatePosterDto) {
    return FeatureFlagsDao.addPoster(resource);
  }

  async deleteById(id: Types.ObjectId) {
    return FeatureFlagsDao.removePosterById(id);
  }

  async list(limit: number, page: number) {
    return FeatureFlagsDao.getPosters(limit, page);
  }

  async patchById(id: Types.ObjectId, resource: PatchPosterDto) {
    return FeatureFlagsDao.updatePosterById(id, resource);
  }

  async readById(id: Types.ObjectId) {
    return FeatureFlagsDao.getPosterById(id);
  }

  async putById(id: Types.ObjectId, resource: PutPosterDto) {
    return FeatureFlagsDao.updatePosterById(id, resource);
  }
}

export default new LinksService();
