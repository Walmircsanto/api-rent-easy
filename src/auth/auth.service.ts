import { Injectable, UnauthorizedException } from "@nestjs/common";
import OwnerService from "src/api/owners/service/owner.service";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

@Injectable()
export class AuthService {
  constructor(private readonly ownerService: OwnerService) {}

  async validateUser(id: number, email: string): Promise<any> {
    const owner = await this.ownerService.findOne(id);

    if (owner.isActive === false) {
      throw new Error("Owner is not active");
    }
    if (owner?.email !== email) {
      throw new UnauthorizedException("invalida");
    }

    const token = jwt.sign({ id: owner.id }, String(process.env.JWT_KEYSECRET), {
      expiresIn: String(process.env.EXPIRATION_TOKEN),
    });
    
    return { token };
  }
}