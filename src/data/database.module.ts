import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as dotenv from 'dotenv'
import { Client } from "src/api/clients/models/client";
import { House } from "src/api/houses/models/house";
import { Owner } from "src/api/owners/models/owner";

dotenv.config();


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
            host: process.env.BD_HOST,
            port: Number(process.env.BD_PORT),
            username: process.env.BD_USERNAME,
            password: process.env.BD_PASSWORD,
            database: process.env.BD_DATABASE,
            entities: [Owner, Client, House],
            //migrations: ["src/data/migrations/*.{ts,js}"],
            //migrationsRun: false,
            synchronize: true
    }),
  ],
})
export class DatabaseModule {}
