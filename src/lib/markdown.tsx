import { Marked } from "@ts-stack/markdown";
import hljs from "highlight.js";

interface MarkdownProps {
  children: string;
}

function Markdown({ children }: MarkdownProps) {
  Marked.setOptions({
    highlight: (code, lang) => {
      console.log(lang);
      return hljs.highlight(lang ?? "markdown", code).value;
    },
    gfm: true,
    breaks: true,
  });

  const parsed = Marked.parse(children);

  return (
    <article
      className="break-words"
      dangerouslySetInnerHTML={{ __html: parsed }}
    ></article>
  );
}

export default Markdown;
