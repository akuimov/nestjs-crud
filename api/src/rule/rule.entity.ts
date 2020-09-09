import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'rule' })
export class RuleEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => UserEntity, user => user.rule)
  @Type(t => UserEntity)
  users: UserEntity[];
}
