import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "./models/client";
import ClientService from "./service/client.service";
import clientController from "./controller/client.controller";

@Module({
  imports:[TypeOrmModule.forFeature([Client])],
  exports:[TypeOrmModule],
  providers:[ClientService],
  controllers:[clientController],
})
export class ClientModule{
    
}