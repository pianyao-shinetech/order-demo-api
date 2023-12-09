import { ApiProperty } from '@nestjs/swagger';
import { CartItemDTO } from './cart_item';

export class CartItemPageDTO {
    @ApiProperty({ nullable: false, type: Number })
    page_num: bigint;
    @ApiProperty({ nullable: false, type: Number })
    page_size: bigint;
    @ApiProperty({ nullable: false, type: Number })
    page_total: Date;
    @ApiProperty({ nullable: false, type: [CartItemDTO] })
    page_data: Array<CartItemDTO>;
}