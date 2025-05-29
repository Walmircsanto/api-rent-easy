import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("session")
  createSession(@Body() singInDto: { id: number; email: string }) {
    return this.authService.validateUser(singInDto.id, singInDto.email);
  }
}