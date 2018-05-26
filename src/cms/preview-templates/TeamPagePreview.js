import React from 'react'
import { TeamPageTemplate } from '../../templates/team-page'

const TeamPagePreview = ({ entry, widgetFor }) => (
  <TeamPageTemplate
    title={entry.getIn(['data', 'title'])}
    // content={widgetFor('body')}
  />
)

export default TeamPagePreview
