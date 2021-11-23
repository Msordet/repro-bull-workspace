import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

@Module({
  imports: [BullModule.registerQueue({ name: 'test' })],
  controllers: [],
  providers: [],
  exports: [BullModule]
})
export class JobModule {}
