import React from 'react'
import ProcessElements from './Recruitment Process/ProcessElements'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import { Link } from 'react-router-dom';


export default function RecruitmentProcess() {
  return (
    <>
      <div>
         <h1 className='container mt-4 mb-4 d-flex justify-content-center'
         style={{fontSize:'5rem'}}>Recruitment Process</h1>
         <VerticalTimeline style={{border:'none', color:'black'}}>
           {
            ProcessElements.map(element => {
              return (
                <VerticalTimelineElement
                   style={{border:'none', color:'black'}}
                   key={element.key}
                   iconStyle={{backgroundColor: "rgb(117, 101, 136)", border:'none'}}
                   icon={element.icon}
                 >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}</h3>
                  <p id='description'>{element.description}</p>
                  <Link to={`/`}> 
                    <button 
                    style={{backgroundColor: "rgb(117, 101, 136)", border:'none', marginTop: "1rem", padding: '0.2rem', borderRadius:'1rem'}}>
                    {element.buttonText}
                    </button>
                  </Link>
                </VerticalTimelineElement>
              )
            })
           }
         </VerticalTimeline>
      </div>
    </>
  )
}

