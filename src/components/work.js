import './work.css'
import React from 'react'

import Workcard from './workcard'
import Workcarddata from './workcarddata'
export const work = () => {
   return (
   <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {Workcarddata.map((val, ind) => {
            return(
              <Workcard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              />
            )
          })}
        </div>
     </div>
   );
 };
 export default work;