import { ApiProperty } from '@nestjs/swagger';

export class ProductDTO {
    @ApiProperty({ nullable: false, type: String })
    id: string;
    @ApiProperty({ nullable: false, type: String })
    name: string;
    @ApiProperty({ example: '/resources/image/thumbnail/asldjfif.jpg', type: String })
    thumbnail_image: string;
    @ApiProperty({ example: 'appliance', nullable: false, type: String })
    catalog: string;
    @ApiProperty({ nullable: false, type: Date })
    published_date: Date;
    @ApiProperty({ nullable: false, type: Number })
    price: number;
    @ApiProperty({ nullable: false, type: Number })
    stock_quantity: number;
}

export class ProductDetailDTO {
    @ApiProperty({ nullable: false, type: String })
    id: string;
    @ApiProperty({ nullable: false, type: String })
    name: string;
    @ApiProperty({ example: '/resources/image/thumbnail/asldjfif.jpg', type: String })
    thumbnail_image: string;
    @ApiProperty({ example: 'appliance', nullable: false, type: String })
    catalog: string;
    @ApiProperty({ nullable: false, type: Date })
    published_date: Date;
    @ApiProperty({ nullable: false, type: Number })
    price: number;
    @ApiProperty({ nullable: false, type: Number })
    stock_quantity: number;
    // additional image, video and text descriptions make a ProductDTO into a ProductDetailDTO
    @ApiProperty({ nullable: true, type: [String] })
    description_text: Array<string>;
    @ApiProperty({ nullable: true, type: [String] })
    description_images: Array<string>;
    @ApiProperty({ nullable: true, type: [String] })
    description_videos: Array<string>;
}