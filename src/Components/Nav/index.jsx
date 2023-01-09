import React from 'react'
import './style.scss';
const headerDark = 'rgb(22, 22, 22)';
const headerMedium = 'rgb(29, 29, 29)';
const headerLight = 'rgb(62, 62, 62)';
const styles = {
    nav:{
        transform: `rotate('45 deg')`,
        position: `relative`,
        //paddingLeft: `$depth`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `start`,
        //background:`linear-gradient(to right, $dark, $light $depth*2)`,
        //webkitClipPath: `polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0)`,
        clipPath: `polygon(0 0, calc(100% + $depth*2) 0, calc(100% + $depth*2) 100%, $depth 100%, 0 calc(100% - $depth))`,
    },
    spacer:{
        boxShadow: `-1px 0 0 rgba(255, 255, 255, 0.05)`,
        //background: `radial-gradient($light ,$dark)`,
        backgroundSize: `200% 200%`,
        backgroundPosition: `12% 0%`,
    },
    section:{
        boxShadow: `-1px 0 0 rgba(255, 255, 255, 0.05)`,
        //background:`radial-gradient($light ,$dark)`,
    },
    header:{
        position: `relative`,
        //border-top: 1px solid $headerHighlight;
        //width: `calc(100% + ($depth*1.25))`,
        boxShadow: `-1px -2px 6px rgba(0, 0, 0, 0.541), inset 0 1px 0 rgb(255, 255, 255)`,
    },
    title:{
        position: `relative`,
        background: `radial-gradient(at top,${headerLight},${headerMedium} 80%,${headerDark})`,
        backgroundSize: `150% 100%`,
        backgroundPosition: `50% 0%`,
        padding:`0.5rem`,
        boxShadow:`inset 0 1px 0 rgba(255, 255, 255, 0.137)`,
    },
    headerTail:{
        position: `absolute`,
        backgroundColor: `${headerMedium}`,
        right:`100%`,
        //width: `$depth`,
        height: `100%`,
        transform: `skewY(.785398rad)`,
        transformOrigin: `right`,
        boxShadow: `0px -3px 6px rgba(0, 0, 0, 0.89)`,
    },
    headerTailEnd:{
        position: `absolute`,
        backgroundColor: `${headerMedium}`,
        //left:`calc(100% - ($depth*2))`,
        //width: `($depth*2)`,
        height: `100%`,
        transform: `skewY(.785398rad)`,
        transformOrigin: `right`,
        zIndex: `-1`,
    },
    sectionContent:{

    },
    spacerShadow:{

    }
}

export default function Nav({content, style, depth, hue}) {
  return (
    <div style={{
        ...styles.nav,...style,paddingLeft: `${depth}px`,
        background: `linear-gradient(to right, hsla(${hue || 207}, 69%,25%,1),hsla(${hue || 207}, 66%,40%,1))`,
        clipPath: `polygon(0 0, calc(100% + ${depth*2}px) 0, calc(100% + ${depth*2}px) 100%, ${depth}px 100%, 0 calc(100% - ${depth}px))`
        }}>
        
        <div style={{...styles.spacer,height:'30px', background: `radial-gradient(hsla(${hue || 207}, 69%,25%,1),hsla(${hue || 207}, 66%,40%,1))`}}></div>
        {content.map((x,i)=>(
        <div key={i} style={{...styles.section,height: i == content.length-1 ? '100%' : '', background: `radial-gradient(hsla(${hue || 207},66%,40%,1),hsla(${hue || 207}, 69%,25%,1))`}}>
            <div style={{...styles.header,width: `calc(100% + (${depth*1.25}px))`}}>
                <div style={{...styles.headerTail,width: `${depth}px`}}></div>
                <div style={{...styles.headerTailEnd,width: `${depth*2}px`, left:`calc(100% - (${depth*2}px))`}}></div>
                <div style={styles.title}>{x.title}</div>
            </div>
            <ul style={styles.sectionContent}>
                {x.links.map((l,i)=>(<li key={i}>{l.name}</li>))}
            </ul>
        </div>
        ))}
    </div>
  )
}
