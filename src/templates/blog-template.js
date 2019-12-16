import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { CodeBlock } from '../components/code-block';

export default function PageTemplate({ data: { mdx } }) {
  const components = {
    /* eslint-disable jsx-a11y/heading-has-content */
    h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
    code: CodeBlock,
  };

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <h1
        css={css`
          margin-bottom: 0;
        `}
      >
        {mdx.frontmatter.title}
      </h1>
      <small
        css={css`
          display: block;
          margin-bottom: 30px;
        `}
      >
        {mdx.frontmatter.date}
      </small>
      <MDXProvider components={components}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;