import { Controller, Post, HttpStatus, Res, Body, Logger } from '@nestjs/common';
import { ConsumeTemplateService } from './consume-template.service';
import { WhatsAppCloudApiRequest } from '../tests/dto/whatsapp-cloud-api-request.dto';

@Controller('consume-template')
export class ConsumeTemplateController {
    private readonly logger = new Logger('consume-template');
    constructor(private service: ConsumeTemplateService) { }

    @Post()
    sampleMovieTicketConfirmation(@Body() request: WhatsAppCloudApiRequest, @Res() response) {
        this.logger.warn('consume-template');
        this.service.sendMessage(request).then(res => {
            response.status(HttpStatus.CREATED).json(res);
        }).catch((err) => {
            console.log("**********************************************");
            console.log("**********************************************");
            console.log("**********************************************");
            console.log(err.response.data.error);
            response.status(HttpStatus.BAD_REQUEST).json(err.response.data);
        })
    }
}
