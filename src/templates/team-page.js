import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import TeamGrid from '../components/TeamGrid'

export const TeamPageTemplate = ({
  title,
  team,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient content">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="has-text-weight-bold is-size-2">
                {title}
              </h1>
              <TeamGrid gridItems={team} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <TeamPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      team={post.frontmatter.team}
      content={post.html}
    />
  )
}

export const pageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        team {
          image
          name
          location
          text
        }
      }
    }
  }
`
