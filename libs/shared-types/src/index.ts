export * from './lib/shared-types';

export interface Link {
  id: string;
  title: string;
  url: string;
  visible: boolean;
  dateCreated: string;
  lastUpdate: null;
  type: string;
}

export interface Poster {
  id: string;
  name: string;
  title: string;
  printUrl: string;
  instagramUrl: string;
  img?: { data: Buffer; contentType: string };
  visible: boolean;
  print: boolean;
  downloadable: boolean;
  dateCreated: Date;
  lastUpdate: Date;
}
