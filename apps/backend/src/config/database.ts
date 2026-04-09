import dotenv from 'dotenv';
import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set');
}

neonConfig.webSocketConstructor = ws;

const adapter = new PrismaNeon({ connectionString: databaseUrl });

export const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});


export default prisma;

const connectDB = async() =>{
    try {
        await prisma.$connect();
        console.log("DB Connected via Prisma");
        
    } catch (error: any) {
        console.error(`Database connection error: ${error.message}`);
        process.exit(1);
    }
}

const disconnectDB = async() =>{
    await prisma.$disconnect();
}

export {connectDB, disconnectDB};
