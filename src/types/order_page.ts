import { ApiProperty } from '@nestjs/swagger';
import { OrderDTO } from './order';

export class OrderPageDTO {
    @ApiProperty({ nullable: false, type: Number })
    page_num: bigint;
    @ApiProperty({ nullable: false, type: Number })
    page_size: bigint;
    @ApiProperty({ nullable: false, type: Number })
    page_total: Date;
    @ApiProperty({ nullable: false, type: [OrderDTO] })
    page_data: Array<OrderDTO>;
}