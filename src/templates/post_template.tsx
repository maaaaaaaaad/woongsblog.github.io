import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

interface PostTemplateProps {}

const PostTemplate: FunctionComponent<PostTemplateProps> = function (props) {
  console.log(props);

  return <div>Post Template</div>;
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                fluid(fit: INSIDE, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
