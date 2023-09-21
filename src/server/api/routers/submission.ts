import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";


export const submissionRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const submissions = await ctx.prisma.submission.findMany();

    return [
      ...submissions.map(
        (submission: { createdAt: { toISOString: () => string } }) => ({
          ...submission,
          createdAt: submission.createdAt.toISOString(),
        })
      ),
    ];
  }),

  create: protectedProcedure
    .input(
      z.object({
        pageIdea: z.string(),
        pageCount: z.string(),
        revisions: z.string(),
        existingWebsite: z.string(),
        timeline: z.string(),
        domain: z.string(),
        extraFeatures: z.string(),
        longTermDeveloper: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        emailAddress: z.string(),
        phoneNumber: z.string(),
        country: z.string(),
        stateAndCity: z.string(),
        companyName: z.string(),
        instagramName: z.string(),
        projectDescription: z.string(),
        development: z.boolean(),
        design: z.boolean(),
        ai: z.boolean(),
        maintenance: z.boolean(),
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
});
