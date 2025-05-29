import { Inject, Injectable } from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";
import HouseService from "src/api/houses/service/house.service";
import { Repository } from "typeorm";
import { Owner } from "../models/owner";
import { House } from "src/api/houses/models/house";


@Injectable()
export default class OwnerService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
    @Inject(HouseService) private houseService: HouseService
  ) {}

  findAll(): Promise<Owner[]> {
    return this.ownerRepository.find();
  }

  create(user: Owner): Promise<Owner> {
    return this.ownerRepository.save(user);
  }

  findOne(id: number): Promise<Owner> {
    //@ts-ignore
    return this.ownerRepository.findOneBy({ id });
  }

  async findProductsUser(idUser: number): Promise<House | undefined> {
    const user = await this.ownerRepository.findOneBy({ id: idUser });

    if (user) {
      //@ts-ignore
      return user.products;
    }

    throw new Error("user not found");
  }


  /*
  
  async addProduct(idUser: number, idProduct: number) {
    const user = await this.ownerRepository.findOneBy({ id: idUser });
    const product = await this.houseService.findByIdhouse(idProduct);

    if (!user || !product) {
      throw new Error("User or Product not found");
    }

    console.log(product);
    user.products?.push(product);

    await this.ownerRepository.save(user);

    console.log(user.products);
    return user;
  }
*/


  async findByEmail(email: string): Promise<Owner | undefined> {
    const user = await this.ownerRepository.findOneBy({ email });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}
