export interface PutPosterDto {
  name: string;
  title: string;
  printUrl: string;
  instagramUrl: string;
  img: { data: Buffer; contentType: string };
  visible: boolean;
  print: boolean;
  downloadable: boolean;
  dateCreated: Date;
  lastUpdate: Date;
}
