import React from 'react';
import '../sass/components/header.scss';

export default function Header() {
  return (
    <div className='header'>
        <div className='pullout'>
            <div className='pullout__body'></div>
            <div className='pullout__face pullout__left'> 
                <div className='pullout__inset'>Date</div>
                <div className='pullout__divider'></div>
                <h1>Title</h1>
            </div>
        </div>
        
        <div className='pullout'>
            <div className='pullout__body'></div>
            <div className='pullout__face pullout__left'> 
                <div className='pullout__inset'>Date</div>
                <div className='pullout__divider'></div>
                <h1>Title 1</h1>
            </div>
        </div>

        <div className='pullout'>
            <div className='pullout__body'></div>
            <div className='pullout__face pullout__left'> 
                <div className='pullout__inset'>Date</div>
                <div className='pullout__divider'></div>
                <h1>Title 2</h1>
            </div>
        </div>

    </div>
  )
}
