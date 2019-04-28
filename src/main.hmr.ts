/// <reference types="webpack-env" />

import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './app.module';
import {OPTIONS} from './main.options';
import {TcpOptions} from '@nestjs/microservices';

declare const module: any;
const {options} = OPTIONS as TcpOptions;
const port = options.port;

async function bootstrap() {
    const app = await NestFactory.createMicroservice(ApplicationModule, OPTIONS);
    app.listen(() => console.log(`Users Microservice is listening with HMR enabled on port ${port}`));

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();
