import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { House } from '../models/house';
import { Repository } from 'typeorm';
import { HouseNotOwner } from 'src/api/owners/error/HouseNotOwner';

@Injectable()
export default class HouseService {
  constructor(
    @InjectRepository(House) private houseRepository: Repository<House>,
  ) {}


    createHouse(house: House) {
    return this.houseRepository.save(house);
  }

  findAllhouses(): Promise<House[]> {
    return this.houseRepository.find();
  }

  findByIdhouse(id: number): Promise<House> {
    //@ts-ignore
    return this.houseRepository.findOneBy({ id });
  }
}
