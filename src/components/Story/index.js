import * as React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from '@material-ui/core'

export default function Story ({ image, profileSrc, title }) {
  return (
    <div className='story'>
      <Avatar src={profileSrc} />
      <h4>{title}</h4>
    </div>
  )
}

Story.propTypes = {
  image: PropTypes.node.isRequired,
  profileSrc: PropTypes.string.isRequired,
  title: PropTypes.title.string.isRequired
}