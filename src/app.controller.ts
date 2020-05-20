import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('datasource')
  getDatasourece(@Query() query): { data: string[] } {
    return this.appService.getDatasource(query.search);
  }
}
