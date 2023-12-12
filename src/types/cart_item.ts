import { ApiProperty } from '@nestjs/swagger';
import { ProductDTO } from "./product";
import { CartItemPageDTO } from './cart_item_page';

export class CartItemDTO {
    @ApiProperty({ nullable: false, type: ProductDTO })
    product: ProductDTO;
    @ApiProperty({ nullable: false, type: Number })
    amount: number;
}
