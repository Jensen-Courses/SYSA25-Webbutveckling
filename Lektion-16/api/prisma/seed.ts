import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const db = new PrismaClient({ adapter });

async function seedData() {
    await db.product.createMany({
        data: [
            {
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                "id": "234d1eaaa87149429b0bbd6e8dc759c0",
                "imageUrl": "https://res.cloudinary.com/softtech-dev/image/upload/v1786556514/shoe-1_qig4ut.jpg",
                "itemNumber": "1000",
                "name": "Core 2000",
                "supplierName": "Company",
                "price": 1295
            },
            {
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                "id": "40f6e853ffb2424bb3eb652ba03576f2",
                "imageUrl": "https://res.cloudinary.com/softtech-dev/image/upload/v1786556530/shoe-3_qbzcwy.jpg",
                "itemNumber": "1002",
                "name": "Gel 27",
                "supplierName": "Company",
                "price": 2295
            },
            {
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                "id": "7a62c46d3a4b4ac4a4133ba66e47b6ec",
                "imageUrl": "https://res.cloudinary.com/softtech-dev/image/upload/v1786556497/jacket-1_rio6db.jpg",
                "itemNumber": "1009",
                "name": "Jacket",
                "supplierName": "Company",
                "price": 1495
            },
            {
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                "id": "7b460cb714334dafa88a3bfc28388555",
                "imageUrl": "https://res.cloudinary.com/softtech-dev/image/upload/v1786556531/t-shirt-2_gg3ags.jpg",
                "itemNumber": "1005",
                "name": "Limited Running t-shirt",
                "supplierName": "Company",
                "price": 385
            }
        ]
    });
}

seedData().then(() => db.$disconnect());