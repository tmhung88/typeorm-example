import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'attachment'})
export class Attachment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'mail_id', length: 100})
  mailId: string;

  @Column({name: 'fileName', length: 100})
  fileName: string;

  @Column({name: 'mime_type', length: 50})
  mimeType: string;

  @Column({name: 'file_path', length: 1024})
  filePath: string;

  @Column({name: 'tiff_path', length: 1024})
  tiffPath: string;

  @Column({name: 'is_rendered', type: 'boolean'})
  isRendered: boolean
}
