import { Controller, Get, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { appWriteStorage } from "../../lib/appwrite/storage";
import { Public } from "../../auth/public.auth";

@Public()
@Controller({
  path: "files",
  version: "1",
})
export class PublicFileDownloadController {
  constructor() {}
  @Get("view/:id")
  async viewFile(@Res() response: Response, @Param("id") id: string) {
    if (!id) {
      response.status(500).send("Invalid file");
    }
    const cloud = appWriteStorage();

    const fileInfo = await cloud.getFile(id);

    const file = await cloud.viewFile(id);
    const fileToSend = Buffer.from(file);

    response.contentType(fileInfo.mimeType).send(fileToSend);
  }
}
