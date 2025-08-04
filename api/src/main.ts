import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    if (process.env.MODE === 'dev') {
        app.enableCors();
    }
    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT);
}

bootstrap();
