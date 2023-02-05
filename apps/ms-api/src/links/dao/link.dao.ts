import debug from 'debug';
import { Types } from 'mongoose';

import { CreateLinkDto } from '../dto/create.link.dto';
import { PatchLinkDto } from '../dto/patch.link.dto';
import { PutLinkDto } from '../dto/put.link.dto';

import mongooseService from '../../common/services/mongoose.service';

const log: debug.IDebugger = debug('app:link-dao');

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

  Link = mongooseService
    .getMongoose()
    .model('Link', this.linkSchema);

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  constructor() {
    log('Created new instance of LinkDao');
  }

  // methods /////////////////

  async addLink(featureFields: CreateLinkDto) {
    return await new this.Link(featureFields);
  }

  async getLinkById(featureId: Types.ObjectId) {
    return this.Link.findById(featureId).exec();
  }

  async getLinks(limit = 25, page = 0) {
    return this.Link.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }

  async updateLinkById(
    featureId: Types.ObjectId,
    featureFields: PatchLinkDto | PutLinkDto
  ) {
    const existingLink = await this.Link.findOneAndUpdate(
      { _id: featureId },
      { $set: featureFields },
      { new: true }
    ).exec();

    return existingLink;
  }

  async removeLinkById(featureId: Types.ObjectId) {
    return this.Link.deleteOne({ _id: featureId }).exec();
  }
}

export default new LinkDao();
