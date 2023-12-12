import { ApiProperty } from '@nestjs/swagger';
import { OrderDTO } from './order';

export class OrderPageDTO {
    @ApiProperty({ nullable: false, type: Number })
    page_num: number;
    @ApiProperty({ nullable: false, type: Number })
    page_size: number;
    @ApiProperty({ nullable: false, type: [OrderDTO] })
    page_data: Array<OrderDTO>;
    @ApiProperty({ nullable: false, type: Number })
    total: number;
}