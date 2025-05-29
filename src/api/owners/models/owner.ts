
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('owners')
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false, default: true })
  isActive: boolean;

}