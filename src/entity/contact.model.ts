import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'contact'})
export class Contact {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'name', length: 50})
  firstName: string;

  @Column({name: 'lastname', length: 50})
  lastName: string;

  @Column({name: 'fax_number', length: 20})
  faxNumber: string;
}
