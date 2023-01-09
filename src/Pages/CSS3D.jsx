import React from 'react'
import Cube from '../Components/Cube'

const styles ={
    container:{
        display:'flex',
        width:'100%',
        height:'100%',
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
