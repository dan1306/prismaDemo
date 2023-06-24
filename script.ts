import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.deleteMany()
    const user = await prisma.user.create({
        data: {
            name: 'Daniel',
            email: 'dannysakyi@gmail.com',
            age: 22,
            userPreference: {
                create: {
                    emailUpdates: true
                },
            },
        },
        include: {
            userPreference: true
        }
    })

    console.log(user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })