import { PrismaClient } from '@zinzot/db';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  const globalWithPrisma = global as unknown as { prisma: PrismaClient };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}

export type Context = {
  prisma: PrismaClient;
};

export const createContext = (): Context => ({
  prisma,
});
