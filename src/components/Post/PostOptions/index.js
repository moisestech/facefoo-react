import * as React from 'react'
import PropTypes from 'prop-types'
import {
  ThumbUpIcon,
  ChatBubbleOutlineIcon,
  NearMeIcon,
  AccountCircleIcon,
  ExpandMoreOutlined } from '@material-ui/core'

export default function PostOptions () {
  return (
    <div className='post-options'>
      <div className='post-option'>
        <ThumbUpIcon />
        <p>Like</p>
      </div>
      <div className='post-option'>
        <ChatBubbleOutlineIcon />
        <p>Comment</p>
      </div>
      <div className='post-option'>
        <NearMeIcon />
        <p>Share</p>
      </div>
      <div className='post-option'>
        <AccountCircleIcon />
        <ExpandMoreOutlined />
      </div>
    </div>
  )
}