import { Body, Controller, Get, HttpCode, Inject, Param, Post, Put } from "@nestjs/common";
import ClientService from "../service/client.service";
import { Client } from "../models/client";

@Controller("client")
export default class clientController{

    constructor(@Inject() private clientService: ClientService){

    }



    @Get("/:idClient")
    @HttpCode(200)
    findClientById( @Param('idClient') idClient: number){
        return this.clientService.findClientById(idClient);
    }


    @Get()
    @HttpCode(200)
    findAllClients(){
        return this.clientService.findAllClients();
    }

    @Post("/save")
    @HttpCode(201)
    async createClient(@Body() client: Client){
     return  await this.clientService.createClient(client);
    }


    @Put("/update")
    @HttpCode(204)
    updateClient(@Body() client:Client){
     this.clientService.updateClient(client);
    }
}

