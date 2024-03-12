import { Injectable, ServiceUnavailableException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import sdk from "node-appwrite";

export const appWrite = () => {
  const apiKey = process.env.APP_WRITE_SDK_KEY;
  const projectID = process.env.APP_WRITE_PROJECT_ID;
  const endpoint = process.env.APP_WRITE_ENDPOINT;

  if (!endpoint || !apiKey || !projectID) {
    throw new ServiceUnavailableException();
  } else {
    // Init SDK
    const client = new sdk.Client();

    // const storage = new sdk.Storage(client);

    client
      .setEndpoint(endpoint) // Your API Endpoint
      .setProject(projectID) // Your project ID
      .setKey(apiKey); // Your secret API key

    // const promise = await storage.listFiles(bucketID);
    // console.log("Testee Appwrite promise : ", promise);

    return client;
  }
};

// @Injectable()
export class AppWriteService {
  constructor(
    protected configService: ConfigService,
    private appWriteInstance: sdk.Client
  ) {
    this.appWriteInstance = new sdk.Client();
    this.appWriteInstance
      .setEndpoint(this.configService.get<string>("APP_WRITE_ENDPOINT")) //API Endpoint
      .setProject(this.configService.get<string>("APP_WRITE_PROJECT_ID")) //project ID
      .setKey(this.configService.get<string>("APP_WRITE_SDK_KEY")); //api key
  }
}
