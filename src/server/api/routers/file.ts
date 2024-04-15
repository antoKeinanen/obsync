import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { db } from "../db";

export const fileRouter = createTRPCRouter({
  getFile: publicProcedure
    .input(z.object({ path: z.string() }))
    .query(async ({ input }) => {
      const result = await db.get(input.path);
      // TODO: fixme
      // @ts-expect-error ts(2339)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const document = await db.get(result.children[0] as string);

      // TODO: fixme
      // @ts-expect-error ts(2339)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return document.data;
    }),
});
