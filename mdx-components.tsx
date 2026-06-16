import type { MDXComponents } from "nextra/mdx-components";
import { useMDXComponents as getNextraComponents } from "nextra/mdx-components";

const wrapper: MDXComponents["wrapper"] = ({ children }) => {
  return (
    <article className="documents-content min-w-0 px-5 py-12 sm:px-8 lg:px-14">
      {children}
    </article>
  );
};

export function useMDXComponents(components: MDXComponents = {}) {
  return {
    ...getNextraComponents(),
    wrapper,
    ...components,
  };
}
