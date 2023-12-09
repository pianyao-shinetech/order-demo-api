import { ApiProperty } from '@nestjs/swagger';
import { CartItemDTO } from './cart_item';

export class OrderDTO {
    @ApiProperty({ nullable: false, type: String })
    id: string;
    @ApiProperty({ nullable: false, type: String })
    user_id: string;
    @ApiProperty({ nullable: false, type: Date })
    placed_date_time: Date;
    @ApiProperty({ enum: ['placed, confirmed, shipped, delivered, return_started, return_completed, cancelled'], nullable: false, type: String })
    status: string;
    @ApiProperty({ nullable: false, isArray: true })
    order_items: Array<CartItemDTO>;
    @ApiProperty({ nullable: false, isArray: true, type: [String] })
    history: Array<string>;
}