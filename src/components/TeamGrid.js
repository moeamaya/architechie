import React from 'react'

const TeamGrid = ({ team }) => (
  <div className="columns is-multiline">
    {team.people.map(item => (
      <div key={item.image} className="column is-6">
        <section className="section">
          <p className="has-text-centered">
            <img alt="" src={item.image} />
          </p>
          <h3>{item.name}</h3>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

export default TeamGrid