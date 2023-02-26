import PostersDao from "../dao/poster.dao";
import { CRUD } from "../../common/interfaces/crud.interface";
import { CreatePosterDto } from "../dto/create.poster.dto";
import { PutPosterDto } from "../dto/put.poster.dto";
import { PatchPosterDto } from "../dto/patch.poster.dto";

class LinksService implements CRUD {
  async create(resource: CreatePosterDto) {
    return PostersDao.addPoster(resource);
  }

  async deleteById(id: number) {
    return PostersDao.removePosterById(id);
  }

  async list(limit: number, page: number) {
    return PostersDao.getPosters(limit, page);
  }

  async patchById(id: number, resource: PatchPosterDto) {
    return PostersDao.updatePosterById(id, resource);
  }

  async readById(id: number) {
    return PostersDao.getPosterById(id);
  }

  async putById(id: number, resource: PutPosterDto) {
    return PostersDao.updatePosterById(id, resource);
  }
}

export default new LinksService();
