import { HttpException, HttpStatus } from "@nestjs/common";


export class ClientNotFoundException extends HttpException{

    constructor(clientId: number, message: string){
              
       super(
        {
        statusCode: HttpStatus.NOT_FOUND,
        error: 'ProductNotFound',
        message: `${message} ${clientId} não encontrado`,
        clientId,
        },
      HttpStatus.NOT_FOUND,
    );
    }

}