import { Injectable } from '@nestjs/common';
import { RuleEntity } from './rule.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RuleService extends TypeOrmCrudService<RuleEntity> {
  constructor(
    @InjectRepository(RuleEntity) repository: Repository<RuleEntity>,
  ) {
    super(repository);
  }
}
