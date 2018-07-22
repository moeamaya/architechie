import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import TeamGrid from '../components/TeamGrid'

export const EventsPageTemplate = ({
  title,
  heading,
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
              <h2 class="subtitle">{heading}</h2>
              <TeamGrid gridItems={team.people} />
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
    <EventsPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      heading={post.frontmatter.heading}
      team={post.frontmatter.team}
      content={post.html}
    />
  )
}

export const pageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        events {
          name
        }
      }
    }
  }
`
