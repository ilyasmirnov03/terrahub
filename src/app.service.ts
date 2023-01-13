import { Injectable } from "@nestjs/common";

//db access here
@Injectable()
export class AppService {
  getHello(): object {
    return { greeting: "Hello World!" };
  }
}
