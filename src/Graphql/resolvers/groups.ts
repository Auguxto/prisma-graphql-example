import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Mutation: {
    createGroup: async (_: any, { title }: { title: string }) => {
      return await prisma.group.create({
        data: {
          title,
        },
      });
    },
  },
};
