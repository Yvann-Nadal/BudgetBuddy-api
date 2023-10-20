import { Controller, Get } from '@nestjs/common';
import { ConverterService } from '../service/converter.service';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('converter')
export class ConverterController {
  constructor(private readonly converterService: ConverterService) {}

  @Public()
  @Get()
  async getDataFromExternalApi(): Promise<any> {
    try {
      const response = await this.converterService.fetchDataFromExternalApi().toPromise();
      return response.data;
    } catch (error) {
     console.log(error); 
    }
  }
}
