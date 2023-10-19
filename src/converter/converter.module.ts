import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { ConverterService } from "./service/converter.service";
import { ConverterController } from "./controller/converter.controller";


@Module({
    imports: [HttpModule],
    controllers: [ConverterController],
    providers: [ConverterService],
    })

export class ConverterModule {}