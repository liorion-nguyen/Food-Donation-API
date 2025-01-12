import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { SocketAdapter } from './SocketAdapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  
  // Cấu hình WebSocket Adapter
  app.useWebSocketAdapter(new SocketAdapter(app));
  
  // Sử dụng cookie-parser chỉ một lần
  app.use(cookieParser());

  // Nghe trên tất cả các địa chỉ IP
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}

bootstrap();
