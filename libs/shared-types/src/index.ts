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
