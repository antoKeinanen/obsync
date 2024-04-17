import { alert } from "@mdit/plugin-alert";
import markdownIt from "markdown-it";
import "~/styles";

interface MarkdownProps {
  children: string;
}

async function Markdown({ children }: MarkdownProps) {
  const mdIt = markdownIt().use(alert, {
    alertNames: [
      "abstract",
      "summary",
      "tldr",
      "info",
      "note",
      "todo",
      "tip",
      "success",
      "question",
      "help",
      "faq",
      "warning",
      "caution",
      "attention",
      "failure",
      "fail",
      "missing",
      "bug",
      "example",
      "quote",
      "danger",
    ],
  });
  const parsed = mdIt.render(children);

  return (
    <article
      className="break-words"
      dangerouslySetInnerHTML={{ __html: parsed }}
    ></article>
  );
}

export default Markdown;
