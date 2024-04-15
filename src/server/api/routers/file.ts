import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { db } from "../db";
import { type DocumentGetResponse } from "nano";

interface PathDocumentResponse extends DocumentGetResponse {
  children: string[];
}

interface DocumentDocumentResponse extends DocumentGetResponse {
  data: string;
}

export const fileRouter = createTRPCRouter({
  getFile: publicProcedure
    .input(z.object({ path: z.string() }))
    .query(async ({ input }) => {
      const result = (await db.get(input.path)) as PathDocumentResponse;
      const document = Promise.all(
        result.children.map(
          async (child) =>
            ((await db.get(child)) as DocumentDocumentResponse).data,
        ),
      );

      return (await document).join("");
    }),
});
