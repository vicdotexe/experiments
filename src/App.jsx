import React, { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Titlebar from "./Components/Titlebar";

const titles = [
  "Test Title",
  "Here's a 2nd Title",
  "Another Title"
]

const items = [
  {
      title:'title 1',
      links:[
          {
              name:'link 1',
              source:'https://google.com'
          },
          {
              name:'link 2',
              source:'https://google.com'
          },
          {
              name:'link 3',
              source:'https://google.com'
          },
      ]
  },
  {
      title:'title 2',
      links:[
          {
              name:'link 4',
              source:'https://google.com'
          },
          {
              name:'link 5',
              source:'https://google.com'
          },
          {
              name:'link 6',
              source:'https://google.com'
          },
      ]
  },
  {
      title:'title 3',
      links:[
          {
              name:'link 7',
              source:'https://google.com'
          },
          {
              name:'link 8',
              source:'https://google.com'
          },
          {
              name:'link 9',
              source:'https://google.com'
          },
      ]
  },
  {
      title:'title 4',
      links:[
          {
              name:'link 10',
              source:'https://google.com'
          },
          {
              name:'link 11',
              source:'https://google.com'
          },
          {
              name:'link 12',
              source:'https://google.com'
          },
      ]
  }
]

export default function app() {
  const [hue, setHue] = useState(109);
  const [angle, setAngle] = useState(1);
  return (
  <>
  {/* just a containting div to take up the whole screen and center the list of titlebars */}
  <div style={{height:'50px'}}>
    <input type="range" min="1" max="360" value={hue} class="slider"  onChange={(e)=>setHue(e.target.value)}/>
    <input type="range" min="1" max="40" value={angle} class="slider"  onChange={(e)=>{setAngle(e.target.value), console.log(angle)}}/>
  </div>
  <div style={{display:'flex', justifyContent:'center', width:'100vw'}}>
    {/* <div style={{borderRight:'1px solid white', borderTop:'1px solid white', width:'10%'}}></div> */}
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', height:'100%', width:'80%'}}>
      <Titlebar depth={parseInt(angle) + 20} thickness={20} hue={hue} style={{width:'100%'}} topcontent={<div style={{fontSize:'36px'}}>Welcome</div>}/>
        <div style={{display:'flex',  justifyContent:'space-between', alignItems:'start', width:'100%', height:'70vh', position:"relative"}}>
          
          
          <div style={{width:'80%', display:'flex', flexDirection:'column',alignSelf:'center', justifySelf:'space-between', margin:'0 3rem'}}>
            {titles.map((x,i)=>(
              <div>
                <Titlebar key={i} date={true} depth={parseInt(angle) + 10} hue={hue}>{
                  <h1 style={{fontSize:20, margin:6, textAlign:'center', width:'100%'}}>{x}</h1>
                }</Titlebar>
                <div style={{padding:'2rem'}}>Here is some random content for: {x}</div>
              </div>
            ))}
          </div>
          <Nav content={items} style={{width:'200px', marginRight:'0.75rem', height:`calc(100% + ${angle}px`}}/>
        </div>
      
      
      {/* a 400px div to contain all the titlebars */}
      <Titlebar thickness={20} depth={parseInt(angle) + 40} hue={hue} style={{width:'100%', position:'relative', top:'-30px', zIndex:'-1'}}/>
    </div>
    {/* <div style={{borderLeft:'1px solid white', borderTop:'1px solid white', width:'10%'}}></div> */}
  </div>


  </>
);}
