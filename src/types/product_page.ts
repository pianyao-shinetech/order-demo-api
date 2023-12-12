import { ApiProperty } from '@nestjs/swagger';
import { ProductDTO } from './product';

export class ProductPageDTO {
    @ApiProperty({ nullable: false, type: Number })
    page_num: number;
    @ApiProperty({ nullable: false, type: Number })
    page_size: number;
    @ApiProperty({ nullable: false, type: [ProductDTO] })
    page_data: Array<ProductDTO>;
    @ApiProperty({ nullable: false, type: Number })
    total: number;
}