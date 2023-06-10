import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable() //Indica que es un proveedor de servicios y puede ser inyectada en otras clases o componentes.
export class HttpConfigService implements HttpModuleOptionsFactory { // La clase HttpConfigService implementa la interfaz HttpModuleOptionsFactory.
    createHttpOptions(): HttpModuleOptions { //Devuelve un objeto de tipo HttpModuleOptions.
        return {
            headers: {
                'Authorization': 'Bearer EAAJSbkex1kkBAKmeuDEg7GRv8ORz9dPt7AovcjyCZA9FZBQylLq3YGEMDrMZAbLbtdphIcdoCsUaEyIKmYqlLxUomw3rHKeMiwDfK0QEnrpx7baSQBZBjWiKkqxJU9qzjJ24Jt3d5LyORGP9HsUSKE0vgS6wpcd9MkuZBeHrpbzr9ZAqSDm5K2G6hcD8y2EnxNrbbst8DIeMU4Oil3B6sOHz1NeKIGPegZD',
                'Content-Type': 'application/json'
            }
        }

    }
}