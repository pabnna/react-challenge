import React, { PropTypes } from 'react'
import Text from './Text';

import './SelectedList.css'

function renderText({id, text}) {
  return (<Text key={id.toString()}>{text}</Text>)
}

function filterText(searchValue) {
    return ({text}) => { return text.includes(searchValue); }
}

function SelectedList({ searchValue, list }) {
  return (
    <ul className="SelectedList">
      {list
        .filter(filterText(searchValue))
        .slice(0, 40) // show the first 40 elements after filtering
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
