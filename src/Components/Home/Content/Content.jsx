import React from 'react'
import '../Content/Content.css'

const Content = () => {
  return (
    <div className="content-container">
        <div className="txt-container">
            <h1>Student Result Management System</h1>
            <p>A Student Result Management System elegantly streamlines academic result storage and processing, enhancing <br />educational institutions' ability to monitor and communicate student achievements.</p>
        </div>

        <div className="icon-container">
            <div className="icon"><p>HTML</p></div>
            <div className="icon"><p>SCSS</p></div>
            <div className="icon"><p>JQuery</p></div>
            <div className="icon"><p>React</p></div>
        </div>

    </div>
  )
}

export default Content