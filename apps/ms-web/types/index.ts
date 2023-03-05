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

export type Poster = {
  id: number;
  printfulId: number;
  order: number;
  title: string;
  description?: string;
  src: string;
  printUrl?: string;
  instagramUrl?: string;
  visible: boolean;
  printable: boolean;
  downloadable: boolean;
  dateCreated: number;
  lastUpdate: number;
}
