import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";

import OwnerService from "../service/owner.service";
import { Owner } from "../models/owner";

@Controller("owners")
export default class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post("/save")
  @HttpCode(201)
  createOwner(@Body() owner: Owner) {
    return this.ownerService.create(owner);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.ownerService.findAll();
  }

  @Get("/:idOwner")
  @HttpCode(200)
  findProductsOwner(@Param("idOwner") idOwner: number) {
    return this.ownerService.findProductsUser(idOwner);
  }
}