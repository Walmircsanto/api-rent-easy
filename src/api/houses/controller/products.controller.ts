import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { House } from '../models/house';
import HouseService from '../service/house.service';

@Controller('products')
export default class ProductController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  createProduct(@Body() product: House) {
    return this.houseService.createProduct(product);
  }

  @Get()
  findAllProducts() {
    return this.houseService.findAllhouses();
  }


}
