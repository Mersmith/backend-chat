import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { firstValueFrom } from 'rxjs';
import { WhatsAppCloudApiResponse } from '../../common/whatsapp-cloud-api-response.dto';
import { WhatsAppCloudApiRequest } from 'src/common/whatsapp-cloud-api-request.dto';

@Injectable()
export class ConsumeTemplateService {
    constructor(private httpService: HttpService) {}

    baseUrl = `${process.env.WHATSAPP_API_HOST}/${process.env.WHATSAPP_API_VERSION}/${process.env.WHATSAPP_ID_NUMERO_TELEFONO}/messages`;

    async sendMessage(request: WhatsAppCloudApiRequest): Promise<AxiosResponse<WhatsAppCloudApiResponse>> {
        const { data } = await firstValueFrom(this.httpService.post(this.baseUrl, request));
        console.log(data);
        return data;
    }
}