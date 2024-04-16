import sanitizeHtml from "sanitize-html";
import { RMark } from "./parser/rules";

interface MarkdownProps {
  children: string;
}


async function Markdown({ children }: MarkdownProps) {
  const dirty_parsed = new RMark().render(children);
  const clean_parsed = sanitizeHtml(dirty_parsed);

  return (
    <article
      className="break-words"
      dangerouslySetInnerHTML={{ __html: clean_parsed }}
    ></article>
  );
}

export default Markdown;
