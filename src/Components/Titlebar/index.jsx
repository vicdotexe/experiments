import React from 'react'
import './style.scss'
export default function Titlebar({title, style, children, date, depth, thickness}) {
  return (
    <div className='pullout' style={style}>
        <div className='pullout__shadowCaster'></div>
        <div className={`pullout__body`} style={{height:depth+'px'}}></div>
        <div className='pullout__face pullout__left' style={{height:thickness ? thickness+'px' : ''}}> 
          {date && (<><div className='pullout__inset'>Date</div>
          <div className='pullout__divider'></div></>)}
          <h1>{title}</h1>
        </div>
        {children}
    </div>
  )
}
