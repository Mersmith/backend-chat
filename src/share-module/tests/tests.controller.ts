import { Body, Controller, HttpStatus, Logger, Post, Res } from '@nestjs/common';
import { TestsService } from './tests.service';
import { WhatsAppCloudApiRequest } from './dto/whatsapp-cloud-api-request.dto';

@Controller('tests')
export class TestsController {
    private readonly logger = new Logger('tests');
    constructor(private testsService: TestsService) { }

    @Post()
    testMessage(@Body() request: WhatsAppCloudApiRequest, @Res() response) {
        this.logger.warn('testMessage');
        this.testsService.testMessage(request).then(res => {
            response.status(HttpStatus.CREATED).json(res);
        }).catch((err) => {
            console.log("**********************************************");
            console.log("**********************************************");
            console.log("**********************************************");
            console.log(err.response.data.error);
            response.status(HttpStatus.BAD_REQUEST).json(err.response.data.error);
        })
    }
}
