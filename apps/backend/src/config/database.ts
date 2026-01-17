import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  log: process.env.NODE_DEV === "development" ? ["query","error", "warn"] : ["error"],
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