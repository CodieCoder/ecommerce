export class ICloudFile {
  id?: string;
  name: string;
  description: string;
  fileId: string;
  mimeType: string;
  url: string;
  sizeOriginal: number;
  bucketId: string;
  signature: string;
}
