import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ConverterService {
  constructor(private readonly httpService: HttpService) {}

  fetchDataFromExternalApi(): Observable<AxiosResponse<any>> {
    const apiUrl = 'https://cdn.taux.live/api/latest.json';
    return this.httpService.get(apiUrl);
  }
}
