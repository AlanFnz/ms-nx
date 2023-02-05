export interface CreateLinkDto {
  name: string;
  title: string;
  url: string;
  visible: boolean;
  dateCreated: Date;
  lastUpdate: Date;
  type: string;
}
