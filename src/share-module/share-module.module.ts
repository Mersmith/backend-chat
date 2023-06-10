import { Module } from '@nestjs/common';
import { TestsController } from './tests/tests.controller';
import { TestsService } from './tests/tests.service';
import { HttpConfigService } from 'src/httpService.config';
import { HttpModule } from '@nestjs/axios';
import { ConsumeTemplateController } from './consume-template/consume-template.controller';
import { ConsumeTemplateService } from './consume-template/consume-template.service';

@Module({
  imports: [
    HttpModule.registerAsync({ //Permite configurar el módulo HTTP de forma asíncrona.
      useClass: HttpConfigService, //Se utilizará para generar las opciones de configuración del módulo HTTP.
    }),
    ShareModuleModule
  ],
  controllers: [TestsController, ConsumeTemplateController],
  providers: [TestsService, ConsumeTemplateService]
})
export class ShareModuleModule { }
