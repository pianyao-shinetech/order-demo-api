import { ApiProperty } from '@nestjs/swagger';
import { ProductDTO } from './product';

export class ProductPageDTO {
    @ApiProperty({ nullable: false, type: Number })
    page_num: bigint;
    @ApiProperty({ nullable: false, type: Number })
    page_size: bigint;
    @ApiProperty({ nullable: false, type: Number })
    page_total: Date;
    @ApiProperty({ nullable: false, type: [ProductDTO] })
    page_data: Array<ProductDTO>;
}