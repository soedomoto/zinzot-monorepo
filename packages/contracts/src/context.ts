import { PrismaClient } from '@zinzot/db';
import * as Minio from 'minio';

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
  sessionToken?: string;
  s3: {
    client: Minio.Client;
    bucketName: string;
  }
};

export const createContext = (opts?: { req: { headers: { authorization?: string } } }): Context => {
  const minioClient = new Minio.Client({
    endPoint: process.env.AWS_S3_ENDPOINT ? new URL(process.env.AWS_S3_ENDPOINT).hostname : '127.0.0.1',
    port: process.env.AWS_S3_ENDPOINT ? parseInt(new URL(process.env.AWS_S3_ENDPOINT).port) : 9000,
    useSSL: process.env.AWS_S3_ENDPOINT?.startsWith('https://'),
    accessKey: process.env.AWS_ACCESS_KEY_ID || 'minioadmin',
    secretKey: process.env.AWS_SECRET_ACCESS_KEY || 'minioadmin',
  });

  const authHeader = opts?.req.headers.authorization;
  let sessionToken: string | undefined = undefined;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    sessionToken = authHeader.split(' ')[1];
  }

  return {
    prisma,
    sessionToken,

    s3: {
      client: minioClient,
      bucketName: process.env.AWS_BUCKET_NAME || 'default-bucket',
    }
  }
};
