import { Body, Controller, Get, HttpStatus, HttpException, Inject, Param, Post, Put, Patch, Query, } from '@nestjs/common';
import { ProductDetailDTO } from './types/product';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { ProductPageDTO } from './types/product_page';

@Controller('products')
@ApiTags('product')
export class ProductController {
  constructor(@Inject('PRODUCT_SERVICE') private client: ClientProxy) {}

  @Get()
  @ApiOkResponse({
    type: ProductPageDTO
  })
  @ApiQuery({ name: 'search', required: false, type: String })
  getAllProducts(
    @Query('pageNum') pageNum: number,
    @Query('pageSize') pageSize: number,
    @Query('search') search?: string
  ) {

    console.log('message sent - PRODUCT proxy', '{ cmd: `list_products` }');
    return this.client.send({cmd: 'list_products'}, {
      page_num: pageNum,
      page_size: pageSize,
      search: search
    })
  }

  @Get(':id')
  @ApiOkResponse({
    type: ProductDetailDTO
  })
  getProductByID(@Param('id') id: number ) {
    console.log('message sent - PRODUCT proxy', '{ cmd: `get_product` }');
    return this.client.send({cmd: 'get_product'}, id)
  }

}