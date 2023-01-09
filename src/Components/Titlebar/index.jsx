// import React from 'react'
// import './style.scss'


// export default function Titlebar({title, style, children, date, depth, thickness,toptext}) {
//   return (
//     <div className='pullout' style={style}>
//         <div className='pullout__shadowCaster'></div>
//         <div className='pullout__bodycontainer'>
//         <div className={`pullout__body`} style={{height:depth+'px'}}>
//         </div>
//         <div className='pullout__toptext'>{toptext}</div>
//         </div>

//         <div className='pullout__face pullout__left' style={{height:thickness ? thickness+'px' : ''}}> 
//           {date && (<><div className='pullout__inset'>Date</div>
//           <div className='pullout__divider'></div></>)}
//           <h1>{title}</h1>
//         </div>
//         {children}
//     </div>
//   )
// }



import React, { useState } from 'react'
import './style.scss'
const dark = 'rgb(20, 69, 98)';
const light = 'rgb(34, 108, 168)';
const styles = {
  pullout:{

  },
  topcontent:{
    position:'absolute',
    bottom:'20%',
    left:'50%',
    transform: 'translate(-50%,0)'
  },
  bodyContainer:{
    position: 'relative',
  },
  body:{
    clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0% 100%)',
    clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0% 100%)',
    //background: `linear-gradient(to top,${light}, ${dark},rgba(0, 0, 0, 0.342))`,
    backgroundSize: '200% 100%',
    backgroundPosition: '50% 0%',
    position: 'relative',
    top:0.3
  },
  face:{
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 8px rgba(0, 0, 0, 0.418)',
    //background:`linear-gradient(${light}, ${dark})`,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  divider:{
    borderLeft:'1px solid black',
    borderRight:'1px solid $light',
    width:'2px',
    marginTop:'-1px',
    minHeight: '100%',
    height:'100%',
  },
  inset:{
    margin:'0.3rem',
    padding: '0.2rem',
    background: 'rgb(41, 39, 39)',
    outline: '1px solid rgba(255,255,255,0.1)',
    backgroundClip:'border-box',
    boxShadow: 'inset 1px 1px 4px rgba(0, 0, 0, 0.685)',
  }
}

export default function Titlebar({children, style, depth, thickness,topcontent, hue}) {

  return (
    <div style={{...styles.pullout, ...style}}>
        <div style={styles.bodyContainer}>
        <div style={{height:`${depth}px`, ...styles.body, background: `linear-gradient(to top,hsla(${hue || 207}, 66%,40%,1), hsla(${hue || 207}, 69%,25%,1),rgba(0, 0, 0, 0.342))`}}>
        </div>
        <div style={styles.topcontent}>{topcontent}</div>
        
        </div>

        <div style={{height:thickness ? thickness+'px' : '', ...styles.face,background:`linear-gradient(hsla(${hue || 207}, 66%,40%,1), hsla(${hue || 207}, 69%,25%,1))`}}> 
          {children}
        </div>
    </div>
  )
}
