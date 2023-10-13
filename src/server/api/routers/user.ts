import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  // Fetch all users
  all: protectedProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany();

    return users; // You can modify the returned data structure if needed
  }),

});
