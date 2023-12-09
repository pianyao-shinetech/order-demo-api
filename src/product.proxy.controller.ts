import { Body, Controller, Get, HttpStatus, HttpException, Inject, Param, Post, Put, Patch, Query, } from '@nestjs/common';
import { ProductDetailDTO } from './types/product';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ProductPageDTO } from './types/product_page';

@Controller('products')
@ApiTags('product')
export class ProductController {
  constructor(@Inject('PRODUCT_SERVICE') private client: ClientProxy) {}

  @Get()
  @ApiOkResponse({
    type: ProductPageDTO
  })
  getAllProducts(
    @Query('pageNum') pageNum: bigint,
    @Query('pageSize') pageSize: bigint,
    @Query('search') search: string
  ) {

    return this.client.send({cmd: 'list_products'}, {
      pageNum: pageNum,
      pageSize: pageSize,
      search: search
    })
  }

  @Get(':id')
  @ApiOkResponse({
    type: ProductDetailDTO
  })
  getProductByID(@Param('id') id: bigint ) {
    return this.client.send({cmd: 'get_product'}, id)
  }

}