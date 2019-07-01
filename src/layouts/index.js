import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.scss'
import favicon from '../img/favicon.png'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Architechie — Architecture and Technology"
      link={[{ rel: "icon", type: "image/png", href: `${favicon}` }]}
    />
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
