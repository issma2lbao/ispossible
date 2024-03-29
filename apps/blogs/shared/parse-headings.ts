import GithubSlugger from "github-slugger";

export interface HeadingNode {
  id: string;
  label: string;
  href: string;
  level: number;
}

export interface HeadingTreeNode extends HeadingNode {
  children?: HeadingTreeNode[];
}

export const buildTree = (
  headings: HeadingNode[],
  level: number
): [HeadingTreeNode[], number] => {
  const nodes: HeadingTreeNode[] = [];
  let index = 0;

  while (index < headings.length) {
    const current = headings[index];
    if (current.level < level) {
      break;
    }

    const children: HeadingNode[] = [];
    const [childHeadings, nextIndex] = buildTree(
      headings.slice(index + 1),
      current.level + 1
    );
    children.push(...childHeadings);

    nodes.push({ ...current, children });
    index = nextIndex + index + 1;
  }

  return [nodes, index];
};

const slugs = new GithubSlugger();

export const parseHeadings = (source: string) => {
  const headingLines = source.split("\n").filter((line) => line.match(/^#+\s/));

  const initialHeadings = headingLines.map((raw: string) => {
    const label = raw.replace(/^#+\s/, "");
    const level = raw.match(/^#+/)?.[0].length || 0;

    return {
      label,
      level,
      href: "#" + slugs.slug(label),
      id: label,
    };
  });

  return buildTree(initialHeadings, 1)[0];
};
