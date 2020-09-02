import * as React from 'react'
import PropTypes from 'prop-types'

export default function Widgets () {
  return (
    <div className='widgets'>
      <iframe
        width='340'
        height='100%'
        style{{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameborder='0'
        allowTransparency='true'
        allow='encrypted-media'
      />
    </div>
  )
}

Widgets.propTypes = {

}