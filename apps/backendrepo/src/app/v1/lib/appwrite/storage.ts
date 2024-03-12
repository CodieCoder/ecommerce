import sdk, { InputFile } from "node-appwrite";
import { AppWriteService, appWrite } from ".";
import {
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export const appWriteStorage = () => {
  const bucketID = process.env.APP_WRITE_BUCKET_ID;
  if (!bucketID) {
    throw new UnauthorizedException();
  }

  // Init SDK
  const client = appWrite();
  const storage = new sdk.Storage(client);

  const listFiles = async () => storage.listFiles(bucketID);

  const addFile = async (fileId: any, filePath: string, fileName: string) => {
    try {
      const add = await storage.createFile(
        bucketID,
        fileId,
        InputFile.fromPath(filePath, fileName)
      );

      return add;
    } catch {
      throw new ServiceUnavailableException();
    }
  };

  const getFile = async (fileId: string) => {
    try {
      return await storage.getFile(bucketID, fileId);
    } catch {
      return undefined;
    }
  };

  const downloadFile = async (fileId: string) => {
    try {
      return await storage.getFileDownload(bucketID, fileId);
    } catch {
      throw new NotFoundException();
    }
  };

  const viewFile = async (fileId: string) => {
    try {
      return await storage.getFileView(bucketID, fileId);
    } catch {
      throw new NotFoundException();
    }
  };

  const updateFile = async (fileId: string, name: string) => {
    try {
      return await storage.updateFile(bucketID, fileId, name);
    } catch {
      throw new NotFoundException();
    }
  };

  const deleteFile = async (fileId: string) => {
    try {
      return await storage.deleteFile(bucketID, fileId);
    } catch {
      return undefined;
    }
  };

  return {
    listFiles,
    addFile,
    getFile,
    downloadFile,
    viewFile,
    updateFile,
    deleteFile,
  };
};

@Injectable()
export class AppWriteStorageService extends AppWriteService {
  private storage: sdk.Storage;
  private bucketId: string;
  constructor(configService: ConfigService, appWriteInstance: sdk.Client) {
    super(configService, appWriteInstance);

    this.bucketId = this.configService.get<string>("APP_WRITE_BUCKET_ID");
  }

  getFile = async (fileId: string) => {
    return await this.storage.getFile(this.bucketId, fileId);
  };

  updateFile = async (fileId: string) => {
    return await this.storage.updateFile(this.bucketId, fileId);
  };

  deleteFile = async (fileId: string) => {
    return await this.storage.deleteFile(this.bucketId, fileId);
  };
}
