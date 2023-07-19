import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { submissionInput } from "~/types";

export const submissionRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const submissions = await ctx.prisma.submission.findMany({
      where: {
        authorId: ctx.session.user.id,
      },
    });
   

    return [
      ...submissions.map((submission) => ({
        ...submission,
        createdAt: submission.createdAt.toISOString(),
      })),
    ];
  }),

  create: protectedProcedure
    .input(submissionInput)
    .mutation(({ ctx, input }) => {
      // throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      return ctx.prisma.submission.create({
        data: {
        
          createdAt: new Date(),
          author: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.submission.delete({
      where: {
        id: input,
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
    .mutation(({ ctx, input:{id, completed} }) => {
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
