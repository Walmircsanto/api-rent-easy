
import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { Owner } from "src/api/owners/models/owner";
import { Client } from "src/api/clients/models/client";
import { House } from "src/api/houses/models/house";

dotenv.config();


export const AppDataSource = new DataSource({
type: "postgres",
      host: process.env.BD_HOST,
      port: Number(process.env.BD_PORT),
      username: process.env.BD_USERNAME,
      password: process.env.BD_PASSWORD,
      database: process.env.BD_DATABASE,
      entities: [Owner, Client, House],
      migrations: ["src/data/migrations/*.{ts,js}"],
      migrationsRun: true,
});

