export interface CreateFeatureFlagDto {
  name: string;
  title: string;
  url: string;
  visible: boolean;
  dateCreated: Date;
  lastUpdate: Date;
  type: string;
}
