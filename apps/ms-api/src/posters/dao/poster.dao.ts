import debug from 'debug';
import { Types } from 'mongoose';

// TODO: review dto implementation
// import { CreatePosterDto } from '../dto/create.poster.dto';
import { PatchPosterDto } from '../dto/patch.poster.dto';
import { PutPosterDto } from '../dto/put.poster.dto';

import Poster, { PosterMap } from '../../db/models/poster';
import db from '../../db/db';

const log: debug.IDebugger = debug('app:poster-dao');

class PosterDao {
  constructor() {
    log('Created new instance of PosterDao');
  }

  async addPoster(posterFields: any) {
    PosterMap(db);
    return await Poster.create(posterFields);
  }

  async getPosterById(posterId: number) {
    PosterMap(db);
    return Poster.findByPk(posterId);
  }

  async getPosters(limit = 25, page = 0) {
    PosterMap(db);
    return Poster.findAll({
      limit,
      offset: (page - 1) * limit,
    });
  }

  async updatePosterById(posterId: number, posterFields: any) {
    PosterMap(db);
    return await Poster.update(posterFields, { where: { id: posterId } });
  }

  async removePosterById(posterId: number) {
    PosterMap(db);
    const poster = await this.getPosterById(posterId)
    return await poster.destroy();
  }
}

export default new PosterDao();
