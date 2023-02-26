import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Poster extends Model {
  public id!: number;
  public printfulId!: number;
  public order?: number;
  public title?: string;
  public description?: string;
  public src!: string;
  public printUrl?: string;
  public instagramUrl?: string;
  public visible: boolean;
  public printable: boolean;
  public downloadable: boolean;
  public dateCreated: number;
  public lastUpdate: number;
}

export const PosterMap = (sequelize: Sequelize) => {
  Poster.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      printfulId: {
        type: DataTypes.INTEGER,
      },
      order: {
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING(255),
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      src: {
        type: DataTypes.STRING(255),
      },
      printUrl: {
        type: DataTypes.STRING(255),
      },
      instagramUrl: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      visible: {
        type: DataTypes.BOOLEAN,
      },
      printable: {
        type: DataTypes.BOOLEAN,
      },
      downloadable: {
        type: DataTypes.BOOLEAN,
      },
      dateCreated: {
        type: DataTypes.INTEGER,
      },
      lastUpdate: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'posters',
      timestamps: false,
    }
  );
  Poster.sync();
};
