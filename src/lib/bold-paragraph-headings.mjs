import { defineMdastPlugin } from 'satteri';

/**
 * The policy files mark section titles as a paragraph holding only bold text
 * (`**Security**`), the format produced by common policy generators. Promote those
 * top-level paragraphs to `<h2>` so the page has real headings and anchor ids.
 */
export const boldParagraphHeadings = defineMdastPlugin({
  name: 'bold-paragraph-headings',
  paragraph(node, ctx) {
    if (ctx.parent(node)?.type !== 'root' || node.children.length !== 1) return;
    const [only] = node.children;
    if (only.type !== 'strong') return;
    ctx.replaceNode(node, { type: 'heading', depth: 2, children: only.children });
  },
});
