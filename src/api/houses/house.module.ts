import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import HouseService from './service/house.service';
import ProductController from './controller/products.controller';
import { House } from './models/house';

@Module({
  imports: [TypeOrmModule.forFeature([House])],
  exports: [TypeOrmModule, HouseService],
  providers: [HouseService],
  controllers: [ProductController],
})
export class HouseModule {}
