import { Module } from '@nestjs/common';
import { ClientProxyFactory, TcpOptions, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { CartController } from './cart.proxy.controller';
import { OrderController } from './order.proxy.controller';
import { ProductController } from './product.proxy.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ProductController, CartController, OrderController],
  providers: [
    AppService,
    {
      provide: 'PRODUCT_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '0.0.0.0',
            port: 3011,
          }
        });
      },
    },
    {
      provide: 'CART_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '0.0.0.0',
            port: 3021,
          }
        });
      },
    },
    {
      provide: 'ORDER_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '0.0.0.0',
            port: 3031,
          }
        });
      },
    },
  ],
})
export class AppModule {}
