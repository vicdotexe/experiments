import React from 'react'
import Cube from './Components/Cube'

const styles ={
    container:{
        display:'flex',
        width:'100vw',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center'
    }
}

export default function CSS3D() {
  return (
    <div style={styles.container}>
        <Cube></Cube>
    </div>
  )
}
