import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { submissionInput } from "~/types";
import { Prisma } from '@prisma/client'; // import Prisma client


export const submissionRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const submissions = await ctx.prisma.submission.findMany();

    return [
      ...submissions.map((submission: { createdAt: { toISOString: () => any; }; }) => ({
        ...submission,
        createdAt: submission.createdAt.toISOString(),
      })),
    ];
  }),

  create: protectedProcedure
    .input(
      z.object({
        complexity: z.string().optional(),
        revisions: z.boolean().optional(),
        pages: z.boolean().optional(),
        database: z.boolean().optional(),
        storage: z.boolean().optional(),
        userBase: z.boolean().optional(),
        description: z.string().optional(),
        monthly: z.boolean().optional(),
        design: z.boolean().optional(),
        databaseScale: z.boolean().optional(),
        storageScale: z.boolean().optional(),
        userScale: z.boolean().optional(),
        cost: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.submission.create({
        data: {
          ...input,
          createdAt: new Date(),
          author: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  toggle: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        completed: z.boolean(),
      })
    )
    .mutation(({ ctx, input: { id, completed } }) => {
      return ctx.prisma.submission.update({
        where: {
          id,
        },
        data: {
          completed,
        },
      });
    }),
});
