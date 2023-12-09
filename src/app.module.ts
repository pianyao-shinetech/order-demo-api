import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
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
          transport: Transport.TCP
        });
      },
    },
    {
      provide: 'CART_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP
        });
      },
    },
    {
      provide: 'ORDER_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP
        });
      },
    },
  ],
})
export class AppModule {}
