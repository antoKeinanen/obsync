import Markdown from "~/lib/markdown";
import { api } from "~/trpc/server";

async function PathPage({ params }: { params: { path: string[] } }) {
  const path = params.path.join("/") + ".md";
  const fileQuery = await api.file.getFile({ path });
  return (
    <main className="prose prose-p:m-0">
      <h1>{params.path.splice(-1)}</h1>
      <Markdown>{fileQuery}</Markdown>
    </main>
  );
}

export default PathPage;
