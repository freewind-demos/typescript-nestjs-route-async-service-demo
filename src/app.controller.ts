import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello/:name')
  async getHello(@Param('name') name: string): Promise<string> {
    return this.appService.getHello(name);
  }
}
