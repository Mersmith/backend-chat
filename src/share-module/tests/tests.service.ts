import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { BASEURL } from 'src/common/api-resource';
import { firstValueFrom } from 'rxjs';
import { WhatsAppCloudApiRequest } from './dto/whatsapp-cloud-api-request.dto';
import { WhatsAppCloudApiResponse } from './dto/whatsapp-cloud-api-response.dto';

@Injectable()
export class TestsService {
    constructor(private httpService: HttpService) {}

    baseUrl = BASEURL.baseUrlWhatsAppCloudApi;

    async testMessage(request: WhatsAppCloudApiRequest): Promise<AxiosResponse<WhatsAppCloudApiResponse>>{
        const {data} = await firstValueFrom(this.httpService.post(this.baseUrl, request));
        console.log(data);
        return data;
    }
}
