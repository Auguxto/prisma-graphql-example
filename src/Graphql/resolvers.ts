import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    users: async () => {
      return await prisma.user.findMany({ include: { groups: true } });
    },
    user: async (_: any, { id }: { id: string }) => {
      return await prisma.user.findFirst({
        where: { id },
        include: { groups: true },
      });
    },
  },

  Mutation: {
    createUser: async (
      _: any,
      { name, email }: { name: string; email: string }
    ) => {
      return await prisma.user.create({
        data: {
          name,
          email,
        },
        include: { groups: true },
      });
    },
    createGroup: async (_: any, { title }: { title: string }) => {
      return await prisma.group.create({
        data: {
          title,
        },
      });
    },
  },
};
