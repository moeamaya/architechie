import React from 'react'
import { EventPageTemplate } from '../../templates/event-page'

const EventPagePreview = ({ entry, widgetFor }) => {
  // const entryPeople = entry.getIn(['data', 'team', 'people'])
  // const people = entryPeople ? entryPeople.toJS() : []

  return (
    <EventPageTemplate
      title={entry.getIn(['data', 'title'])}
      // heading={entry.getIn(['data', 'heading'])}
      // team={{ people }}
    />
  )
}

export default EventPagePreview
