import { Body, Controller, Get, HttpStatus, HttpException, Inject, Param, Post, Put, Query, } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { OrderDTO } from './types/order';
import { OrderPageDTO } from './types/order_page';
import { CartItemDTO } from './types/cart_item';

@Controller('orders')
@ApiTags('order')
export class OrderController {
  constructor(@Inject('ORDER_SERVICE') private client: ClientProxy) {}

  @Get()
  @ApiOkResponse({
    type: [OrderPageDTO]
  })
  getAllOrders(
    @Query('pageNum') pageNum: number,
    @Query('pageSize') pageSize: number,
    @Query('pageSize') userId: string,
  ) {

    return this.client.send({cmd: 'list_orders'}, {
      pageNum: pageNum,
      pageSize: pageSize,
      userId: userId
    })
  }

  @Get(':order_id')
  @ApiOkResponse({
    type: OrderDTO
  })
  getOrderByID(
    @Param('order_id') orderId: string, 
    @Query('user_id') userId: string
  ) {

    return this.client.send({cmd: 'get_order'}, {
      order_id: orderId,
      user_id: userId
    })
  }

  @Post()
  @ApiCreatedResponse({
    type: OrderDTO
  })
  createOrder(
    @Query('userId') userId: string, 
    @Body() cartItems: [CartItemDTO]
  ) {

    return this.client.send({cmd: 'create_order'}, {
      user_id: userId,
      order_items: cartItems
    })
  }

  // TODO call external payment API and record payment history
  @Post(':order_id/payments')
  @ApiOkResponse({
    type: String
  })
  placeOrder(
    @Query('userId') userId: string, 
    @Query('orderId') orderId: string,
    @Body() paymentInfo: Object
  ) {

    return this.client.send({cmd: 'place_order'}, {
      user_id: userId,
      order_id: orderId,
      payment: paymentInfo,
    })
  }

  /**
   * TODO various usage:
   * 1. As a call back from external systems (payment, delivery, etc.) to change the the order status to
   * PLACED, SHIPPED, DELIVERED, RETURN_STARTED, RETURNED, REFUNDED, etc.
   * 2. User call it directly to cancel an order
   */ 
  @Put(':order_id/status')
  @ApiOkResponse({
    type: String
  })
  updateOrderStatus(
    @Param('order_id') orderId: string, 
    @Query('user_id') userId: string, 
    @Body() orderStatus: string
  ) {

    return this.client.send({cmd: 'update_order_status'}, {
      id: orderId,
      status: orderStatus,
      user_id: userId,
    })
  }

}