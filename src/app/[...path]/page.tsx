import { api } from "~/trpc/server";

function PathPage({ params }: { params: { path: string[] } }) {
  const path = params.path.join("/") + ".md";
  const fileQuery = api.file.getFile({ path });
  return <pre>{fileQuery}</pre>;
}

export default PathPage;
