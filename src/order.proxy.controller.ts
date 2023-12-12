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
      orderId: orderId,
      userId: userId
    })
  }

  @Post()
  @ApiCreatedResponse({
    type: OrderDTO
  })
  placeOrder(
    @Query('userId') userId: string, 
    @Body() cartItems: [CartItemDTO]
  ) {

    return this.client.send({cmd: 'place_order'}, {
      user_id: userId,
      order_items: cartItems
    })
  }

  // TODO
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
      user_id: userId,
      status: orderStatus
    })
  }

}