import React from 'react'
import { Link } from 'react-router-dom'
// import "rsuite/dist/rsuite.min.css"; 
const about = () => {
  return (
    <div>
    <Link to="/">
      <h1>Back to homess</h1>
    </Link>
  </div>
  )
}
const Paragraph  = () =>{ 
return(
  <center>
    <div>
      <h2>HELLOO</h2>
      <div style={{ marginTop: 20, width: 800 }} >
        <Paragraph style={{marginTop:30}} rows={4} />
      </div>
    </div>
  </center>
);
}

export default about

