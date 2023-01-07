import React from 'react'
import './style.scss';

export default function Nav({content, style, depth}) {
  return (
    <div className='nav' style={style}>
        
        <div className='nav__spacer' style={{height:'30px'}}></div>
        {content.map((x,i)=>(
        <div key={i} className='nav__section' style={{height: i == content.length-1 ? '100%' : ''}}>
            <div className='nav__header'>
                <div className='nav__headerTail'></div>
                <div className='nav__headerTailend'></div>
                <div className='nav__title'>{x.title}</div>
            </div>
            <ul className='nav__sectionContent'>
                {x.links.map((l,i)=>(<li key={i}>{l.name}</li>))}
            </ul>
        </div>
        ))}
    </div>
  )
}
