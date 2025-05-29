import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { OwnerModule } from 'src/api/owners/owner.module';

@Module({
  imports: [OwnerModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}