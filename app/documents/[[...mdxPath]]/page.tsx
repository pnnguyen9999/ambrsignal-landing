import type { Metadata } from "next";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

type DocumentsPageProps = {
  params: Promise<{
    mdxPath?: string[];
  }>;
};

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata({
  params,
}: DocumentsPageProps): Promise<Metadata> {
  const { mdxPath = [] } = await params;
  const { metadata } = await importPage(mdxPath);
  const { title: _title, ...metadataWithoutTitle } = metadata;

  return metadataWithoutTitle;
}

const Wrapper = getMDXComponents().wrapper!;

export default async function DocumentsPage(props: DocumentsPageProps) {
  const params = await props.params;
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(
    params.mdxPath
  );

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
