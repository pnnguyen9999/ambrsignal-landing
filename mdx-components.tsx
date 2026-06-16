import type { MDXComponents } from "nextra/mdx-components";
import { useMDXComponents as getNextraComponents } from "nextra/mdx-components";
import { DocumentsToc } from "@/components/documents-toc";

const wrapper: MDXComponents["wrapper"] = ({ children, toc }) => {
  return (
    <div className="documents-page-grid">
      <article className="documents-content min-w-0 px-5 py-12 sm:px-8 lg:px-14">
        <main data-pagefind-body>{children}</main>
      </article>
      <DocumentsToc toc={toc} />
    </div>
  );
};

export function useMDXComponents(components: MDXComponents = {}) {
  return {
    ...getNextraComponents(),
    wrapper,
    ...components,
  };
}
