import * as React from 'react'
import propTypes from 'prop-types'
import Post from './Post'
import MessageSender from './MessageSender'
import StoryReel from 'StoryReel'

export default function Feed () {

  return (
    <div className='feed'>
      <div>Feed</div>
      <StoryReel />
      <MessageSender />
      <Post />
    </div>
  )
}

Feed.propTypes = {

}