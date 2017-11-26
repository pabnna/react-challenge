import React, { PropTypes } from 'react'

import './Search.css'

function Search() {
  return null
}

Search.propTypes = {
   searchValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
}

export default Search
