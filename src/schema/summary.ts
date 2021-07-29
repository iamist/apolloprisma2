import { Context } from './../context'

export const typeDefs = `
type Mutation {
    create(
        total: Int!
        recoveries: Int!
        deaths: Int!
        active_cases: Int!
        fatality_rate: Float!
        recovery_rate: Float!
    ): Summary
    delete(id: Int!): Summary
    update(id: Int!): Summary
}

type Summary {
    id: Int!
    total: Int!
    recoveries: Int!
    deaths: Int!
    active_cases: Int!
    fatality_rate: Float!
    recovery_rate: Float!
    createdAt: DateTime
    updatedAt: DateTime
}

type Query {
    allSummaries: [Summary],
    findSummary: Summary
}

scalar DateTime
`;

export const resolvers = {
    Query: {
        allSummaries: (_p, _a, _c: Context) => {
            return _c.prisma.summary.findMany();
        },
        findSummary: (_p, _a: { id: number}, _c: Context) => {
            return _c.prisma.summary.findUnique({
                where: {id: _a.id || undefined}
            });
        }
    }
};
