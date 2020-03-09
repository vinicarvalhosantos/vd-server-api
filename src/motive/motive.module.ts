import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Motive } from './motive.entity';
import { MotiveCrudService } from './motive-crud.service';
import { MotiveController } from './motive.controller';
import { MotiveService } from './motive.service';
import { LogModule } from '../logger/log.module';

@Module({
  imports: [TypeOrmModule.forFeature([Motive]), HttpModule, LogModule],
  providers: [MotiveCrudService, MotiveService],
  controllers: [MotiveController]
})
export class MotiveModule { }