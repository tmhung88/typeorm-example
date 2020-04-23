import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity({name: 'incoming_mail'})
export class IncomingMail {

  @PrimaryColumn({name: 'id', length: 100})
  id: string;

  @Column({name: 'sender_name', length: 100})
  senderName: string;

  @Column({name: 'sender_email', length: 320})
  senderEmail: string;

  @Column({name: 'recipient_name', length: 100})
  recipientName: string;

  @Column({name: 'recipient_email', length: 320})
  recipientEmail: string;

  @Column({name: 'subject', length: 1000})
  subject: string;

  @Column({name: 'body', type: 'mediumtext'})
  body: string;

}
