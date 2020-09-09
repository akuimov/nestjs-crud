import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { RuleEntity } from '../rule/rule.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'bigint' })
  phone: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  ruleId: number;

  @ManyToOne(type => RuleEntity, rule => rule.users)
  rule: RuleEntity;
}
