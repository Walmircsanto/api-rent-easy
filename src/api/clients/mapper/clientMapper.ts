import { Client } from "../models/client";
import { ClientRequestDTO } from "../service/RequestDTO/clientRequestDTO";
import { ClienteResponse } from "../service/ResponseDTO/clientResponseDTO";

export default class ClientMapper{

 parserEntityInClientDTO(client: Client){
    const clienteDTO: ClientRequestDTO = {
        name: client.name,
        email: client.email,
        password: client.password,
        isActive: client.isActive,
        id: client.id
    }

    return clienteDTO;
 }

 parserEntityToClientResponseDTO(client: Client){

    const clientResponseDTO: ClienteResponse ={
        id: client.id,
        name: client.name,
        email: client.email,

    }

    return clientResponseDTO
    
 }
}