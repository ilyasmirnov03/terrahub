import { Controller, Get } from "@nestjs/common";
@Controller()
export class AppController {
  constructor() {}
  @Get()
  public getWelcomeMessage(): string {
    return 'Welcome to the official REST API for TerraHub!';
  }

  @Get('version')
  public getVersion(): string {
    return process.env.VERSION || 'unavailable';
  }
}
