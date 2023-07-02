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
    console.log(
      "submissions: ",
      submissions.map(
        ({
          id,
          typeOfSite,
          description,
          complexity,
          addOns,
          colorScheme,
          extras,
          contactMe,
          takeOffs,
          createdAt,
        }) => ({
          id,
          typeOfSite,
          description,
          complexity,
          addOns,
          colorScheme,
          extras,
          contactMe,
          takeOffs,
          createdAt,
        })
      )
    );

    return [
      {
        id: "fake",
        typeOfSite: "fake",
        description: "fake",
        complexity: "fake",
        addOns: "fake",
        colorScheme: "fake",
        extras: "fake",
        contactMe: false,
        completed: false,
        takeOffs: "fake",
        createdAt: new Date(),
      },
      {
        id: "fake2",
        typeOfSite: "fake2",
        description: "fake2",
        complexity: "fake2",
        addOns: "fake2",
        colorScheme: "fake2",
        extras: "fake2",
        contactMe: true,
        completed: false,
        takeOffs: "fake2",
        createdAt: new Date(),
      },
    ];
  }),

  create: protectedProcedure
    .input(submissionInput)
    .mutation(({ ctx, input }) => {
      // throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      return ctx.prisma.submission.create({
        data: {
          id: "fake2",
          typeOfSite: input,
          description: "fake2",
          complexity: "fake2",
          addOns: "fake2",
          colorScheme: "fake2",
          extras: "fake2",
          contactMe: true,
          takeOffs: "fake2",
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
