import { Module } from '@nestjs/common';
import { JobModule } from './jobs/jobs.module';

@Module({
  imports: [JobModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
