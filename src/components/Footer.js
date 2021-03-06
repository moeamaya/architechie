import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.svg'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <svg width="35" height="32" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round"><path stroke-linejoin="round" d="M22 7l12 24H10z"/><path d="M1 31L17 1"/></g>
          </svg>
        </Link>
      </div>
      <div className="navbar-center">
        <div class="navbar-date">Made in San Francisco</div>
        <div class="navbar-by">Designed by <a target="_blank" href="https://monograph.io/">Monograph</a></div>
      </div>
      <div className="navbar-end">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1 1h22v22H1z" stroke="#000" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
      </div>
    </div>
  </footer>
)

export default Footer
