import React from 'react'
import Content, { HTMLContent } from '../components/Content'

const TeamGrid = ({ gridItems }) => {
  // const TeamContent = contentComponent || Content

  return (
    <div className="columns is-multiline person-card">
      {gridItems.map(item => (
        <div key={item.image} className="column is-6">
          <section className="section">
            <p className="has-text-centered">
              <img alt="" src={item.image} />
            </p>
            <h3>{item.name}</h3>
            <HTMLContent className="content" content={item.text} />
          </section>
        </div>
      ))}
    </div>
  )
}

export default TeamGrid
