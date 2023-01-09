import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CSS3D from './Pages/CSS3D';
import Pseudo3D from './Pages/Pseudo3D';

export default function App() {
  return (
    <>
      <BrowserRouter basename='/dist'>
        <div style={
          {
            display:'flex',
            width:'100vw',
            height:'100vh'
          }
        }>
          <div style={{
            display:'flex',
            flexDirection:'column',
            borderRight:'1px solid gray',
            padding:'0.5rem',
            gap:'1rem'
          }}>
            <Link to='/'>Pseudo3D</Link>
          <Link to='/3d'>3D</Link>
          </div>

<div style={{
  width:'100%',
  overflowY:'auto'
}}>
<Routes>
        <Route path="/" element={<Pseudo3D />}>
        
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/3d" element={<CSS3D/>}></Route>
      </Routes>
</div>
        </div>


    </BrowserRouter>
    </>
  )
}
