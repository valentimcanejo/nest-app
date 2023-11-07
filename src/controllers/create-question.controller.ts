import {
  Body,
  Controller,
  HttpCode,
  Post,
  UnauthorizedException,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { compare } from "bcryptjs";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { PrismaService } from "src/prisma/prisma.service";
import { z } from "zod";

@Controller("/questions")
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor() {}

  @Post()
  async handle() {
    return "ok";
  }
}
