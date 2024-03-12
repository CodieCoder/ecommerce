import {
  FileSystemStoredFile,
  FormDataInterceptorConfig,
  NestjsFormDataConfigFactory,
} from "nestjs-form-data";

export class FormDataConfigService implements NestjsFormDataConfigFactory {
  configAsync():
    | Promise<FormDataInterceptorConfig>
    | FormDataInterceptorConfig {
    return {
      storage: FileSystemStoredFile,
      fileSystemStoragePath: "/tmp/files",
    };
  }
}
