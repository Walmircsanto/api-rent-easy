import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "./models/client";
import ClientService from "./service/client.service";
import clientController from "./controller/client.controller";
import ClientMapper from "./mapper/clientMapper";

@Module({
  imports:[TypeOrmModule.forFeature([Client])],
  exports:[TypeOrmModule],
  providers:[ClientService, ClientMapper],
  controllers:[clientController],
})
export class ClientModule{
    
}