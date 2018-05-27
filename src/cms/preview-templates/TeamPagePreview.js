import React from 'react'
import { TeamPageTemplate } from '../../templates/team-page'

const TeamPagePreview = ({ entry, widgetFor }) => {
  const entryPeople = entry.getIn(['data', 'team', 'people'])
  const people = entryPeople ? entryPeople.toJS() : []

  return (
    <TeamPageTemplate
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      team={{ people }}
    />
  )
}

export default TeamPagePreview
