import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import OwnerController from "./controller/owner.controller";
import OwnerService from "./service/owner.service";
import { Owner } from "./models/owner";
import { HouseModule } from "../houses/house.module";



@Module({
  imports: [TypeOrmModule.forFeature([Owner]), HouseModule], // ja aqui acima e aqui que importamos outros modulos caso necessitamos usar seu serviços
  exports: [TypeOrmModule, OwnerService],
  providers: [OwnerService], // aqui e somente oque sera usado nesse modulo
  controllers: [OwnerController],
})
export class OwnerModule {}