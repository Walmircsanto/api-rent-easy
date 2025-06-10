import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "../models/client";
import { Repository } from "typeorm";
import { ClientNotFoundException } from "../error/clientException";
import { ClientRequestDTO } from "./RequestDTO/clientRequestDTO";
import ClientMapper from "../mapper/clientMapper";
import { ClienteResponse } from "./ResponseDTO/clientResponseDTO";

@Injectable()
export default class ClientService{

    constructor( @InjectRepository(Client) private clientRepository: Repository<Client>,
     @Inject(ClientMapper) private clienteMapper: ClientMapper ){

    }

    async createClient(client: ClientRequestDTO): Promise<ClienteResponse>{

        if(await this.findClientByEmail(client.email)){
            throw new BadRequestException('entrada de dados incorreta')
        }
        return this.clienteMapper.parserEntityToClientResponseDTO(
            await this.clientRepository.save(client)
        )
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