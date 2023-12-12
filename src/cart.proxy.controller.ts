import { Body, Controller, Get, HttpStatus, HttpException, Inject, Param, Post, Put, Query, } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CartItemPageDTO } from './types/cart_item_page';
import { CartItemDTO } from './types/cart_item';

@Controller('cart')
@ApiTags('cart')
export class CartController {
  constructor(@Inject('CART_SERVICE') private client: ClientProxy) {}

  @Get()
  @ApiOkResponse({
    type: CartItemPageDTO
  })
  getCart(
    @Query('userId') userId: string,
    @Query('pageNum') pageNum: number,
    @Query('pageSize') pageSize: number
  ) {

    return this.client.send({cmd: 'get_cart_items'}, {
      user_id: userId,
      page_num: pageNum,
      page_size: pageSize
    })
  }

  @Post('/items')
  @ApiCreatedResponse({
    type: CartItemDTO
  })
  addProductToCart(
    @Query('userId') userId: string, 
    @Body() cartItem: CartItemDTO ) {

    return this.client.send({cmd: 'add_item_to_cart'}, {
      user_id: userId,
      cart_item: cartItem
    })
  }

  @Put('/items/:productId/amount')
  @ApiOkResponse({
    type: Number
  })
  updateCartItemAmount(
    @Query('userId') userId: string, 
    @Param() productId: string, 
    @Body() amount: number) {

    return this.client.send({cmd: 'update_cart_item_amount'}, {
      user_id: userId,
      product_id: productId,
      amount: amount
    })
  }

}