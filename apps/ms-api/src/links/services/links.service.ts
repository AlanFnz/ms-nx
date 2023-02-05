import { Types } from 'mongoose';

import FeatureFlagsDao from "../dao/links.dao";
import { CRUD } from "../../common/interfaces/crud.interface";
import { CreateFeatureFlagDto } from "../dto/create.link.dto";
import { PutLinkDto } from "../dto/put.link.dto";
import { PatchLinkDto } from "../dto/patch.link.dto";

class LinksService implements CRUD {
  async create(resource: CreateFeatureFlagDto) {
    return FeatureFlagsDao.addFeature(resource);
  }

  async deleteById(id: Types.ObjectId) {
    return FeatureFlagsDao.removeFeatureById(id);
  }

  async list(limit: number, page: number) {
    return FeatureFlagsDao.getFeatures(limit, page);
  }

  async patchById(id: Types.ObjectId, resource: PatchLinkDto) {
    return FeatureFlagsDao.updateFeatureById(id, resource);
  }

  async readById(id: Types.ObjectId) {
    return FeatureFlagsDao.getFeatureById(id);
  }

  async putById(id: Types.ObjectId, resource: PutLinkDto) {
    return FeatureFlagsDao.updateFeatureById(id, resource);
  }
}

export default new LinksService();
