import PropTypes from 'prop-types';

import React from 'react';

export default function Navbar(props) {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/">{props.about}</a>
        <a className="nav-link" href="/">Pricing</a>
        <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
   { props.searchBar ? <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form> : "" }
  </div>
</nav>

  )
}


// Navbar.propTypes={
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string.isRequired,
// }

// Navbar.defaultProps={
//   title: "My Title",
//   about: "About This Page"
// }