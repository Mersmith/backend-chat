import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { BASEURL } from 'src/common/api-resource'
import { firstValueFrom } from 'rxjs';
import { WhatsAppCloudApiResponse } from '../../common/whatsapp-cloud-api-response.dto';
import { WhatsAppCloudApiRequest } from 'src/common/whatsapp-cloud-api-request.dto';

@Injectable()
export class ConsumeTemplateService {
    constructor(private httpService: HttpService) {}

    baseUrl = BASEURL.baseUrlWhatsAppCloudApi;

    async sendMessage(request: WhatsAppCloudApiRequest): Promise<AxiosResponse<WhatsAppCloudApiResponse>> {
        const { data } = await firstValueFrom(this.httpService.post(this.baseUrl, request));
        console.log(data);
        return data;
    }
}