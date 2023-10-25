import React from 'react'
import '../Course/Course.css'
import MainNav from '../MainNav'
const Course = () => {
  return (
    <>
    <MainNav/>
    <div className="course-container">

        <div className="detail-container">

        <h1>Manage Course Details</h1>

        <div className="input-container">
        <input type="text" placeholder='Course Name' />
        <input type="text" placeholder='Branch Name' />
        <input type="text" placeholder='Subject Name' />
        <input type="text" placeholder='Description' />
        </div>
        
        <div className="c-btn-container">
            <button>Save</button>
            <button>Update</button>
            <button>Delete</button>
            <button>Clear</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Course