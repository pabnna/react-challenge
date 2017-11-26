import React, { PropTypes } from 'react'

import './SelectedList.css'

function renderText({id, text}) {
  return null;
}

function filterText(searchValue) {
    return ({text}) => true
}

function SelectedList({ searchValue, list }) {
  return (
    <ul>
      {list
        .filter(filterText(searchValue))
        .map(renderText)}
    </ul>
  )
}

SelectedList.propTypes = {
   searchValue: PropTypes.string.isRequired,
   list: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     text: PropTypes.string.isRequired,
   })).isRequired,
}

export default SelectedList
