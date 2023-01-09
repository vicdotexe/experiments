import React, { useState } from 'react'

const styles = {
    world:{
        perspective:'500px',
        border:'1px solid white'
    },
    cube:{
        //transform:'rotateX(0deg) ',
        transformStyle:'preserve-3d'
    },
    frontFace:{
        // display:'flex',
        // justifyContent:'center',
        // alignItems:'center',
        width:'400px',
        height:'200px',
        background:'hsla(210,100%,50%,1)',
        transformStyle:'preserve-3d',
        boxShadow:'0px 15px 10px rgba(0,0,0,0.15)',
        //perspective:'1px',
        position:'relative',
        
        background:'linear-gradient(transparent,hsla(210,100%,30%,1),hsla(210,100%,50%,1))',
        
    },
    bottomFace:{
                display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'400px',
        height:'100px',
        background:'hsla(210,100%,50%,1)',
        transform: 'rotateX(-90deg)',
        transformStyle:'preserve-3d',
        transformOrigin:'50% 0%',
        border:'1px solid white'
    },
    words:{
        transform:'rotateX(-90deg)',
        transformOrigin:'50% 100%',
        transformStyle:'preserve-3d',
        boxShadow:'0px 15px 10px rgba(0,0,0,0.15)',
        bottom:'20%',
        position:'absolute',
        left:'35%'
    }
}

export default function Cube() {
    const [deg, setDeg] = useState(68);
    const [yDeg, setyDeg] = useState(45);

    const [mouseDown, setMouseDown] = useState(0);
    const [startDeg, setStartDeg] = useState(90);
    const [startYDeg, setStartYDeg] = useState(0);

    const [rightInput, setRightInput] = useState('right - always facing camera')
    const [leftInput, setLeftInput] = useState('left - always facing camera')
    const [topInput, setTopInput] = useState('top - anchored on bottom')
    const [frontInput, setFrontInput] = useState('front - flush with plane')

    const [startY,setStartY] = useState(0);
    const [startX, setStartX] = useState(0);

    const onMouseDown = (e)=>{
        setMouseDown(true);
        setStartY(e.pageY);
        setStartX(e.pageX);
        setStartDeg(deg);
        setStartYDeg(yDeg);
    }

    function contain(num){
        if (num > 360){
            num-=360;
        }else if (num < 0){
            num += 360;
        }
        return num;
    }

    const onMove = (e) =>{
        e.preventDefault();
        if(!mouseDown){return;}
        const scrolly = startY - e.pageY;
        const scrollx = startX - e.pageX;


        setDeg(contain(startDeg + scrolly));
        setyDeg(contain(startYDeg - scrollx));

    }
    const onLeave = (e) =>{
        e.preventDefault();
        setMouseDown(false);
    }

  return (<>
  <div>

    <div>
        x:<input type='range' min='0' max='360' value={deg} onChange={(e)=>setDeg(e.target.value)} style={{margin:'50px'}}/>
        y:<input type='range' min='0' max='360' value={yDeg} onChange={(e)=>setyDeg(e.target.value)} style={{margin:'50px'}}/>
    </div>

    <div>
        <div style={{...styles.world}} onMouseDown={onMouseDown} onMouseMove={onMove} onMouseUp={onLeave} onLeave={onLeave}>
            <div style={{...styles.cube, transform:`translate3d(0,0,-100px) rotateY(${parseInt(yDeg)}deg) rotateX(${parseInt(deg)}deg)`}}>
                <div style={styles.frontFace}>
                    <div style={{...styles.words, 
                        transform:`rotateX(${-deg}deg) `
                        }}>
                        asdf
                        <input 
                                        value={topInput}
                                        onChange={(e)=>setTopInput(e.target.value)}
                        onMouseDown={(e)=>{e.stopPropagation()}}></input>
                    </div>
                    <input onMouseDown={(e)=>{e.stopPropagation()}}
                    value={leftInput}
                    onChange={(e)=>setLeftInput(e.target.value)}
                    style={{
                        transformOrigin:'50% 100%',
                        transformStyle:'preserve-3d',
                        transform:`translate(-50%,0) rotateX(${-deg}deg) rotateY(${-yDeg}deg) `,
                        boxShadow:'0px 15px 10px rgba(0,0,0,0.15)',
                        bottom:'0%',
                        position:'absolute',
                        left:'0'
                    }}/>
                    <input onMouseDown={(e)=>{e.stopPropagation()}}
                    value={rightInput}
                    onChange={(e)=>setRightInput(e.target.value)}
                    style={{
                        transformOrigin:'50% 100%',
                        transformStyle:'preserve-3d',
                        transform:`translate(50%,0) rotateX(${-deg}deg) rotateY(${-yDeg}deg) `,
                        boxShadow:'0px 15px 10px rgba(0,0,0,0.15)',
                        bottom:'0%',
                        position:'absolute',
                        right:'0'
                    }}/>
                </div>
                <div style={styles.bottomFace}  >
                    sdf
                    <input 
                        value={frontInput}
                        onChange={(e)=>setFrontInput(e.target.value)}
                    onMouseDown={(e)=>{e.stopPropagation()}}></input>
                </div>

            </div>
        </div>
    </div>
    
  </div>
    
    

  </>

  )
}
