import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "../models/client";
import { Repository } from "typeorm";
import { HttpExceptionFilter } from "src/api/exception/handleException";
import { ClientNotFoundException } from "../error/clientException";

@Injectable()
export default class ClientService{

    constructor( @InjectRepository(Client) private clientRepository: Repository<Client> ){

    }

    async createClient(client: Client): Promise<Client>{

        if(await this.findClientByEmail(client.email)){
            throw new BadRequestException('User already exists')
        }
        return this.clientRepository.save(client);
    }

    async findClientById(id: number): Promise<Client | null>{
        if(!await this.clientRepository.existsBy({id})){
          
            throw new ClientNotFoundException(id,'client not Found');
        }
         return this.clientRepository.findOneBy({id: id});
        
    }

    
    findAllClients(): Promise<Client[]>{
        return this.clientRepository.find();
    }

    async findClientByEmail(email: string): Promise<Client | null>{
        return this.clientRepository.findOneBy({email: email})
    }

    async updateClient(client: Client): Promise<void>{
      const id= client.id
      if(!await this.clientRepository.existsBy({id})){
         throw new Error('User not exists')
      }

       this.clientRepository.save(client)
    }



    
}