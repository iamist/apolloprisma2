import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const summaryData: Prisma.SummaryCreateInput[] = [
    {
        total: 189601,
        recoveries: 131367,
        deaths: 2998,
        active_cases: 55236,
        fatality_rate: 1.58,
        recovery_rate: 69.29
    },
    {
        total: 209601,
        recoveries: 191367,
        deaths: 1000,
        active_cases: 44000,
        fatality_rate: 1.28,
        recovery_rate: 99.29
    }
];

async function main() {
    console.log(`Start seeding ...`)
    for (const s of summaryData) {
        const summary = await prisma.summary.create({
            data: s,
        })
        console.log(`Created row with id: ${summary.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
