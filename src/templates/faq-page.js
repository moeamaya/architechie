import React from 'react'
import Content, { HTMLContent } from '../components/Content'

export const FAQPageTemplate = ({ contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient content">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">

          </div>
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <FAQPageTemplate
      contentComponent={HTMLContent}
    />
  )
}

export const pageQuery = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
