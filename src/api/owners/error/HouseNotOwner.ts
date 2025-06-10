import { HttpException, HttpStatus } from "@nestjs/common";


export class HouseNotOwner extends HttpException  {

    constructor(message:string){
      super(
        {
        statusCode: HttpStatus.BAD_REQUEST,
        error: 'House Not Owner',
        message: message
        },
         HttpStatus.BAD_REQUEST,
      );
    }
}