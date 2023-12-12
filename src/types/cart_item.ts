import { ApiProperty } from '@nestjs/swagger';
import { ProductDTO } from "./product";

export class CartItemDTO {
    @ApiProperty({ nullable: false, type: ProductDTO })
    product: ProductDTO;
    @ApiProperty({ nullable: false, type: Number })
    amount: number;
}
