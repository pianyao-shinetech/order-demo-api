import { ApiProperty } from '@nestjs/swagger';
import { CartItemDTO } from './cart_item';

export class CartItemPageDTO {
    @ApiProperty({ nullable: false, type: Number })
    page_num: number;
    @ApiProperty({ nullable: false, type: Number })
    page_size: number;
    @ApiProperty({ nullable: false, type: Number })
    total: number;
    @ApiProperty({ nullable: false, type: [CartItemDTO] })
    page_data: Array<CartItemDTO>;
}