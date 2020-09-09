import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { RuleService } from './rule.service';
import { RuleEntity } from './rule.entity';

@Crud({
  model: {
    type: RuleEntity,
  },
})
@Controller('rule')
export class RuleController {
  constructor(public service: RuleService) {}
}
