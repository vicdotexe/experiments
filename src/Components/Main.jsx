import React from 'react'


export default function Main() {
  return (
    <div style={{position:'relative', left:'100px'}}>

        <div className='nav'>
        <div className='nav__spacer'></div>
            <div className='nav__section'>
                <div className='nav__header'>
                    <div className='nav__headerTail'></div>
                    <div className='nav__headerTailend'></div>
                    <h1>Test Header 1</h1>
                </div>
                <ul className='nav__sectionContent'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
            <div className='nav__section'>
                <div className='nav__header'>
                    <div className='nav__headerTail'></div>
                    <div className='nav__headerTailend'></div>
                    <h1>Test Header 2</h1>
                </div>
                <ul className='nav__sectionContent'>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
                <div></div>
            </div>

        </div>


    </div>

  )
}
