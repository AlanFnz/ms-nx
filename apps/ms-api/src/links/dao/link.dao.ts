import debug from 'debug';
import { Types } from 'mongoose';

import { CreateFeatureFlagDto } from '../dto/create.link.dto';
import { PatchLinkDto } from '../dto/patch.link.dto';
import { PutLinkDto } from '../dto/put.link.dto';

import mongooseService from '../../common/services/mongoose.service';

const log: debug.IDebugger = debug('app:feature-flags-dao');

class LinkDao {
  Schema = mongooseService.getMongoose().Schema;

  linkSchema = new this.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    visible: { type: Boolean, required: true },
    dateCreated: { type: Date, default: Date.now },
    lastUpdate: { type: Date, default: Date.now },
    type: { type: String, required: true },
  });

  Feature = mongooseService
    .getMongoose()
    .model('Link', this.linkSchema);

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  constructor() {
    log('Created new instance of LinkDao');
  }

  // methods /////////////////

  async addFeature(featureFields: CreateFeatureFlagDto) {
    return await new this.Feature(featureFields);
  }

  async getFeatureById(featureId: Types.ObjectId) {
    return this.Feature.findById(featureId).exec();
  }

  async getFeatures(limit = 25, page = 0) {
    return this.Feature.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }

  async updateFeatureById(
    featureId: Types.ObjectId,
    featureFields: PatchLinkDto | PutLinkDto
  ) {
    const existingFeature = await this.Feature.findOneAndUpdate(
      { _id: featureId },
      { $set: featureFields },
      { new: true }
    ).exec();

    return existingFeature;
  }

  async removeFeatureById(featureId: Types.ObjectId) {
    return this.Feature.deleteOne({ _id: featureId }).exec();
  }
}

export default new LinkDao();
