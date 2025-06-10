import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { House } from '../models/house';
import HouseService from '../service/house.service';

@Controller('house')
export default class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  createProduct(@Body() product: House) {
    return this.houseService.createHouse(product);
  }

  @Get()
  findAllProducts() {
    return this.houseService.findAllhouses();
  }


}
