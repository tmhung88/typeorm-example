import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'document'})
export class Document {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'mail_id', length: 100})
  mailId: string;

  @Column({name: 'contact_id'})
  contactId: number;

  @Column({name: 'recipient_fax_number', length: 20})
  recipientFaxNumber: string;

  @Column({name: 'body', type: 'mediumtext'})
  body: string;

  @Column({name: 'status', type: 'tinyint'})
  status: Status;

  @Column({name: 'tiff_path', length: 1024})
  tiffPath: string;
}

export enum Status {
  RENDERED = 1,
  DELIVERED = 2,
}
