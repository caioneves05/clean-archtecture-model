import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient {
  async execute() {
    await this.$connect();
  }
}