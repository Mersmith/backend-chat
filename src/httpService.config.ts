import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable() //Indica que es un proveedor de servicios y puede ser inyectada en otras clases o componentes.
export class HttpConfigService implements HttpModuleOptionsFactory { // La clase HttpConfigService implementa la interfaz HttpModuleOptionsFactory.
    createHttpOptions(): HttpModuleOptions { //Devuelve un objeto de tipo HttpModuleOptions.
        return {
            headers: {
                'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
                'Content-Type': 'application/json'
            }
        }

    }
}