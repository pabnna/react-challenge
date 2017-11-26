import React, { PropTypes } from 'react'

import './Search.css'


function Search({ searchValue, onChange }) {
  return (<input
    className="Search"
    type="text"
    value={searchValue}
    onChange={onChange}
    placeholder="Search text" />);
}

Search.propTypes = {
   searchValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
}

export default Search
