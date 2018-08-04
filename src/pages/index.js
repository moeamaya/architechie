import React from 'react'
import Link from 'gatsby-link'

import header from '../img/architechie-header.jpg'


export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('loaded');
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // const { edges: pages } = data.allMarkdownRemark

    return (
      <section>
        <section className="">
          <div className="container">
            <div className="index-heading">
              <svg width="599" height="83" viewBox="0 0 599 83" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M2.54 79.544L2 73.604 7.724 72.2 31.376 5.78 49.952 2l23.76 70.416 6.804 1.188-.54 5.94-22.14-.324-12.096.324-.54-5.94 7.02-1.404-5.4-16.632H22.088l-5.4 16.632 7.776 1.404-.54 5.94-10.908-.324-10.476.324zm21.816-30.456H44.66l-8.964-28.404-.108-6.372-11.232 34.776zm61.02 30.456l-.54-5.94 5.616-1.404V35.912l-5.616.216-.54-6.156 15.012-2.916 6.696-.432 1.944 18.36 10.8-19.008h10.908v17.496h-12.96c-2.7 1.512-4.212 3.78-6.912 6.696l-.972 1.08V72.2l11.664 1.404-.54 5.94-20.088-.324-14.472.324zm75.492 1.512c-16.2 0-27.432-10.692-27.432-25.92 0-16.416 12.636-25.164 28.836-29.7 8.424 0 14.364 2.052 18.36 5.508v15.768H165.08l-2.16-12.744c-.756-.648-1.296-.864-2.376-.864-3.888 0-7.668 5.508-7.668 16.308 0 10.476 6.156 18.792 15.66 18.792 4.104 0 7.776-1.836 9.936-3.456l3.456 5.508c-5.4 4.536-11.664 8.1-21.06 10.8zm27.972-1.512l-.54-5.94 5.4-1.404V11.504l-5.832.216-.54-6.156 17.064-2.808 7.668-.324v33.156l16.632-10.152c11.88 0 17.172 3.132 17.172 16.092V72.2l5.4 1.404-.54 5.94-14.04-.324-12.96.324-.54-5.94 3.78-1.404V43.364c0-3.456-1.836-5.184-4.86-5.184-2.7 0-5.508 1.728-8.208 3.564l-1.836 1.296V72.2l3.78 1.404-.54 5.94-12.42-.324-14.04.324zm77.976-59.832l-3.996-.864-.756-7.992 1.512-6.804 11.772-.756 3.888.756.864 8.1-1.62 6.696-11.664.864zm-9.396 59.832l-.54-5.94 5.4-1.404V35.48l-5.4.216-.54-5.94 16.848-2.7 7.452-.324V72.2l5.4 1.404-.54 5.94-14.04-.324-14.04.324zm59.94 1.512c-12.852 0-19.332-6.048-19.332-18.684V36.02h-9.288v-1.944l4.428-4.752h4.86v-7.668l11.88-8.64h6.372V29.54h13.5v6.48h-13.392v27.216c0 3.996 2.16 6.804 5.292 6.804 2.7 0 4.968-.648 8.64-2.7l2.592 5.616-15.552 8.1zm67.824-34.668v6.804h-30.348c.864 8.208 5.832 15.012 13.716 15.012 5.616 0 11.016-2.376 13.5-4.104l2.916 5.292c-6.264 5.832-11.88 8.424-21.708 11.664-15.984 0-27.108-10.692-27.108-25.596 0-11.016 3.78-23.544 27-30.024 15.552 0 22.032 9.612 22.032 20.952zm-30.456 1.08l12.744-.972c0-8.208-1.512-13.392-5.94-13.392-4.32 0-6.372 4.536-6.804 14.364zm63.288 33.588c-16.2 0-27.432-10.692-27.432-25.92 0-16.416 12.636-25.164 28.836-29.7 8.424 0 14.364 2.052 18.36 5.508v15.768h-15.552l-2.16-12.744c-.756-.648-1.296-.864-2.376-.864-3.888 0-7.668 5.508-7.668 16.308 0 10.476 6.156 18.792 15.66 18.792 4.104 0 7.776-1.836 9.936-3.456l3.456 5.508c-5.4 4.536-11.664 8.1-21.06 10.8zm27.972-1.512l-.54-5.94 5.4-1.404V11.504l-5.832.216-.54-6.156 17.064-2.808 7.668-.324v33.156l16.632-10.152c11.88 0 17.172 3.132 17.172 16.092V72.2l5.4 1.404-.54 5.94-14.04-.324-12.96.324-.54-5.94 3.78-1.404V43.364c0-3.456-1.836-5.184-4.86-5.184-2.7 0-5.508 1.728-8.208 3.564l-1.836 1.296V72.2l3.78 1.404-.54 5.94-12.42-.324-14.04.324zm77.976-59.832l-3.996-.864-.756-7.992 1.512-6.804 11.772-.756 3.888.756.864 8.1-1.62 6.696-11.664.864zm-9.396 59.832l-.54-5.94 5.4-1.404V35.48l-5.4.216-.54-5.94 16.848-2.7 7.452-.324V72.2l5.4 1.404-.54 5.94-14.04-.324-14.04.324zm82.512-33.156v6.804h-30.348c.864 8.208 5.832 15.012 13.716 15.012 5.616 0 11.016-2.376 13.5-4.104l2.916 5.292c-6.264 5.832-11.88 8.424-21.708 11.664-15.984 0-27.108-10.692-27.108-25.596 0-11.016 3.78-23.544 27-30.024 15.552 0 22.032 9.612 22.032 20.952zm-30.456 1.08l12.744-.972c0-8.208-1.512-13.392-5.94-13.392-4.32 0-6.372 4.536-6.804 14.364z" stroke="#1B292A" strokeWidth="2" fill="#FFF"/><path d="M317.62 80.624c-12.852 0-19.332-6.048-19.332-18.684V35.588H289v-1.944l4.428-4.752h4.86v-7.668l11.88-8.64h6.372v16.524h13.5v6.48h-13.392v27.216c0 3.996 2.16 6.804 5.292 6.804 2.7 0 4.968-.648 8.64-2.7l2.592 5.616-15.552 8.1zm67.824-34.668v6.804h-30.348c.864 8.208 5.832 15.012 13.716 15.012 5.616 0 11.016-2.376 13.5-4.104l2.916 5.292c-6.264 5.832-11.88 8.424-21.708 11.664-15.984 0-27.108-10.692-27.108-25.596 0-11.016 3.78-23.544 27-30.024 15.552 0 22.032 9.612 22.032 20.952zm-30.456 1.08l12.744-.972c0-8.208-1.512-13.392-5.94-13.392-4.32 0-6.372 4.536-6.804 14.364zm63.288 33.588c-16.2 0-27.432-10.692-27.432-25.92 0-16.416 12.636-25.164 28.836-29.7 8.424 0 14.364 2.052 18.36 5.508V46.28h-15.552l-2.16-12.744c-.756-.648-1.296-.864-2.376-.864-3.888 0-7.668 5.508-7.668 16.308 0 10.476 6.156 18.792 15.66 18.792 4.104 0 7.776-1.836 9.936-3.456l3.456 5.508c-5.4 4.536-11.664 8.1-21.06 10.8zm27.972-1.512l-.54-5.94 5.4-1.404V11.072l-5.832.216-.54-6.156L461.8 2.324 469.468 2v33.156L486.1 25.004c11.88 0 17.172 3.132 17.172 16.092v30.672l5.4 1.404-.54 5.94-14.04-.324-12.96.324-.54-5.94 3.78-1.404V42.932c0-3.456-1.836-5.184-4.86-5.184-2.7 0-5.508 1.728-8.208 3.564l-1.836 1.296v29.16l3.78 1.404-.54 5.94-12.42-.324-14.04.324zm77.976-59.832l-3.996-.864-.756-7.992 1.512-6.804 11.772-.756 3.888.756.864 8.1-1.62 6.696-11.664.864zm-9.396 59.832l-.54-5.94 5.4-1.404v-36.72l-5.4.216-.54-5.94 16.848-2.7 7.452-.324v45.468l5.4 1.404-.54 5.94-14.04-.324-14.04.324zm82.512-33.156v6.804h-30.348c.864 8.208 5.832 15.012 13.716 15.012 5.616 0 11.016-2.376 13.5-4.104l2.916 5.292c-6.264 5.832-11.88 8.424-21.708 11.664-15.984 0-27.108-10.692-27.108-25.596 0-11.016 3.78-23.544 27-30.024 15.552 0 22.032 9.612 22.032 20.952zm-30.456 1.08l12.744-.972c0-8.208-1.512-13.392-5.94-13.392-4.32 0-6.372 4.536-6.804 14.364z" fill="#1B292A"/></g></svg>
            </div>
          </div>
        </section>

        <section className="index-intro">
          <div className="container">
            <div className="index-intro__content">
              <div className="index-intro__box">
                <div className="index-intro__box-top"></div>
                <div className="index-intro__box-bottom"></div>
              </div>
              <div className="index-intro__image">
                <img src={header} alt="Architechie" />
              </div>
            </div>
            <div className="index-intro__description">
              {posts
                .filter(post => post.node.frontmatter.templateKey === 'about-page')
                .map(({ node: post }) => (
                  <p className="index-intro__description-text">{post.frontmatter.title}</p>
                ))
              }
            </div>
          </div>
        </section>

        <section className="index-manifesto">
          <div className="container">
            <div className="index-manifesto__heading">
              <h3></h3>
            </div>
            <div className="index-manifesto__content columns">
                <div className="column is-two-thirds">
                  <h4 className="index-manifesto__subtitle">Principles</h4>
                  <h2 className="index-manifesto__title">Manifesto</h2>
                  {posts
                    .filter(post => post.node.frontmatter.templateKey === 'about-page')
                    .map(({ node: post }) => (
                      <p className="index-manifesto__description" dangerouslySetInnerHTML={{ __html: post.frontmatter.description }} />
                    ))
                  }
                </div>
            </div>
          </div>
          <div className="index-manifesto__graphic">
            <div className="index-manifesto__graphic-triangle">
              <svg width="604" height="581" viewBox="0 0 604 581" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" strokeWidth="2" d="M302 3l300 577H2z" fill="none" fill-rule="evenodd"/></svg>
            </div>
            <div className="container">
              <div className="index-manifesto__graphic-line"></div>
            </div>
          </div>
        </section>

        <section className="index-people">
          <div className="container">
            <div className="index-people__title">
              <h2>People</h2>
            </div>

            {posts
              .filter(post => post.node.frontmatter.templateKey === 'team-page')
              .map(({ node: post }) => (
                <div className="columns index-people-list">
                  {post.frontmatter.team
                    .map((person) => (
                      <div className="column is-one-third index-person">
                        <h4>Architechie</h4>
                        <h2 dangerouslySetInnerHTML={{ __html: person.name }} />
                        <div className="index-person__image">
                          <img src={person.image} alt="Github" />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: person.text }} />
                      </div>
                    ))
                  }
                </div>
              ))
            }

          </div>
        </section>

        <section className="index-blog">
          <div className="index-blog__heading">
            <h3>Writing</h3>
          </div>
          <div className="index-blog__posts">
            <div className="container">
              {posts
                .filter(post => post.node.frontmatter.templateKey === 'blog-post')
                .map(({ node: post }) => (
                  <article className="index-blog__post" key={post.id}>
                    <h4>{post.frontmatter.author}</h4>
                    <Link to={post.fields.slug} className="index-blog__link columns">
                      <div className="column is-four-fifths">
                        <h2>{post.frontmatter.title}</h2>
                      </div>
                      <div className="column index-blog__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="14" viewBox="0 0 42 14">
                          <g fill="none" fill-rule="evenodd" transform="translate(0 1)">
                            <polyline stroke="#000" strokeWidth="2" points="34 0 40 6 34 12"/>
                            <rect width="40" height="2" y="5" fill="#000"/>
                          </g>
                        </svg>
                      </div>
                    </Link>
                    <p>{post.frontmatter.description}</p>
                  </article>
                ))
              }
            </div>
          </div>
        </section>

        <section className="index-events">
          <div className="container">
            <div className="index-events__title">
              <h2>Events</h2>
            </div>

            {posts
              .filter(post => post.node.frontmatter.templateKey === 'event-page')
              .map(({ node: post }) => (
                <div className="columns index-people-list">
                  {post.frontmatter.events
                    .map((event) => (
                      <div className="column is-one-third index-event">
                        <h2>{event.name}</h2>
                        <br />
                        <h4>{event.date}</h4>
                      </div>
                    ))
                  }
                </div>
              ))
            }

          </div>
        </section>

        <section className="index-faqs">
          <div className="index-blog__heading">
            <h3>Membership Benefits</h3>
          </div>
          <div className="index-blog__posts">
            <div className="container">
              {posts
                .filter(post => post.node.frontmatter.templateKey === 'faq-page')
                .map(({ node: post }) => (
                  <div className="columns index-people-list">
                    {post.frontmatter.faqs
                      .map((faq) => (
                        <article className="index-blog__post column is-half">
                          <h4>{faq.author}</h4>
                          <h2>{faq.name}</h2>
                          <p>{faq.description}</p>
                        </article>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section className="index-cta">
          <div className="index-cta__heading">
            <h3>Join Us</h3>
          </div>
          <div className="index-cta__content">
            <div className="container">
              <h2>Hop on our mailing list to stay informed.</h2>
              <form name="signup"
                className="index-cta__box"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="signup" />
                <input name="email" type="email" placeholder="you@domain.com" />
                <button>Sign Up</button>
              </form>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            author
            description
            team {
              name
              text
              image
            }
            events {
              name
              date
            }
            faqs {
              name
              author
              description
            }
          }
        }
      }
    }
  }
`
