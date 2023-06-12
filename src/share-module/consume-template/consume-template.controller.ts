import { Controller, Post, Get, HttpStatus, Req, Res, Body, Logger } from '@nestjs/common';
import { ConsumeTemplateService } from './consume-template.service';
import { WhatsAppCloudApiRequest } from '../tests/dto/whatsapp-cloud-api-request.dto';
import { Request, Response } from 'express';
import { AxiosResponse } from 'axios'

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

@Controller('webhook')
export class WebhookController {
    @Get()
    verifyCallbackUrl(@Req() req: Request, @Res() res: Response) {
        const mode = req.query['hub.mode'];
        const challenge = req.query['hub.challenge'];
        const token = req.query['hub.verify_token'];

        if (mode && token) {
            if (mode === 'subscribe' && token === process.env.WHATSAPP_TOKEN_VERIFICACION) {
                return res.status(200).send(challenge);
                //return res.json(JSON.parse(challenge.toString()));
            } else {
                //console.log('ERROR');
                return res.status(403).send();
            }
        }
    }

    @Post()
    handleWebhookEvent(@Req() req: Request, @Res() res: Response) {
        const body = req.body;
        console.log(JSON.stringify(body, null, 2));

        if (
            body.object &&
            body.entry &&
            body.entry[0].changes &&
            body.entry[0].changes[0].value.messages &&
            body.entry[0].changes[0].value.messages[0]
        ) {
            const phoneNumberId = body.entry[0].changes[0].value.metadata.phone_number_id;
            const from = body.entry[0].changes[0].value.messages[0].from;
            const messageBody = body.entry[0].changes[0].value.messages[0].text.body;

            /*axios({
                method: "POST",
                url: `${process.env.WHATSAPP_API_HOST}/${process.env.WHATSAPP_API_VERSION}/${process.env.WHATSAPP_ID_NUMERO_TELEFONO}/messages?access_token=${process.env.WHATSAPP_TOKEN}`,
                data: {
                    messaging_product: "whatsapp",
                    recipient_type: "individual",
                    to: from,
                    text: {
                        preview_url: false,
                        body: "Saludos desde Webhook!!"
                    }
                },
                headers:{
                    "Content-Type":"application/json"
                }
            })*/

            

            console.log('Phone number: ' + phoneNumberId);
            console.log('From: ' + from);
            console.log('Message: ' + messageBody);

            return res.sendStatus(200);
        } else {
            return res.sendStatus(404);
        }
    }
}
