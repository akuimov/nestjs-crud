import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuleService } from './rule.service';
import { RuleController } from './rule.controller';
import { RuleEntity } from './rule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RuleEntity])],
  controllers: [RuleController],
  providers: [RuleService],
  exports: [RuleService],
})
export class RuleModule {}
