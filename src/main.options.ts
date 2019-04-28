import {NestMicroserviceOptions} from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import {MicroserviceOptions} from '@nestjs/common/interfaces/microservices/microservice-configuration.interface';
import {Transport} from '@nestjs/common/enums/transport.enum';

const host = (process.env.URL_MICROSERVICE_USER || 'localhost') as string;
const port = 3002 as number;

export const OPTIONS: NestMicroserviceOptions & MicroserviceOptions = {
    transport: Transport.TCP,
    options: {port, host},
};

export interface Options {
    port: number;
    host: string;
}
