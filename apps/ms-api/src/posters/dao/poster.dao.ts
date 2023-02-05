import debug from 'debug';
import { Types } from 'mongoose';

import { CreatePosterDto } from '../dto/create.poster.dto';
import { PatchPosterDto } from '../dto/patch.poster.dto';
import { PutPosterDto } from '../dto/put.poster.dto';

import mongooseService from '../../common/services/mongoose.service';

const log: debug.IDebugger = debug('app:poster-dao');

class PosterDao {
  Schema = mongooseService.getMongoose().Schema;

  posterSchema = new this.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    printUrl: { type: String },
    instagramUrl: { type: String },
    img: {
      data: Buffer,
      contentType: String,
    },
    visible: { type: Boolean, required: true, default: true },
    print: { type: Boolean, required: true, default: false },
    downloadable: { type: Boolean, required: true, default: false },
    dateCreated: { type: Date, default: Date.now },
    lastUpdate: { type: Date, default: Date.now },
  });

  Poster = mongooseService
    .getMongoose()
    .model('Poster', this.posterSchema);

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  constructor() {
    log('Created new instance of PosterDao');
  }

  // methods /////////////////

  async addPoster(posterFields: CreatePosterDto) {
    return await new this.Poster(posterFields);
  }

  async getPosterById(posterId: Types.ObjectId) {
    return this.Poster.findById(posterId).exec();
  }

  async getPosters(limit = 25, page = 0) {
    return this.Poster.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }

  async updatePosterById(
    posterId: Types.ObjectId,
    posterFields: PatchPosterDto | PutPosterDto
  ) {
    const existingPoster = await this.Poster.findOneAndUpdate(
      { _id: posterId },
      { $set: posterFields },
      { new: true }
    ).exec();

    return existingPoster;
  }

  async removePosterById(posterId: Types.ObjectId) {
    return this.Poster.deleteOne({ _id: posterId }).exec();
  }
}

export default new PosterDao();
