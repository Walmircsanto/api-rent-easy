
import { Client } from 'src/api/clients/models/client';
import { Owner } from 'src/api/owners/models/owner';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('houses')
export class House {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, type: 'numeric', precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: false })
  numberRooms: number;

  @OneToMany(() => Client, (client) => client.house)
  clients: Client[];

  @OneToOne(() => Owner)
  @JoinColumn()
  owner: Owner


}