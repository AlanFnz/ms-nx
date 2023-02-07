export * from './lib/shared-types';

export interface Link {
  id: string;
  title: string;
  url: string;
  visible: boolean;
  dateCreated: string;
  lastUpdate: null;
  type: string;
  svg?: {
    xmlns: string;
    fill: string;
    viewBox: string;
    d: string;
  };
}

export interface Poster {
  id: string;
  order: number;
  name: string;
  title: string;
  src: string;
  printUrl?: string;
  instagramUrl?: string;
  img?: { data: Buffer; contentType: string };
  visible: boolean;
  printable: boolean;
  downloadable: boolean;
  dateCreated: Date;
  lastUpdate: Date;
}
