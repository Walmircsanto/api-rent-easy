import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnerModule } from './api/owners/owner.module';
import { AuthModule } from './auth/auth.module';
import { HouseModule } from './api/houses/house.module';
import { ClientModule } from './api/clients/client.module';
import { DatabaseModule } from './data/database.module';

@Module({
 imports: [OwnerModule, AuthModule, HouseModule, ClientModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
