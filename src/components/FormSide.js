import React from 'react'
import logo from '../imgs/logo.svg'
import notesIcon from '../imgs/notes.svg'
import listIcon from '../imgs/list.svg'
import workflowIcon from '../imgs/workflow.svg'


export default function FormSide() {
  return (
    <aside className='form__side'>
      <img src={logo} alt="" className='form__logo' />
      <h2>Your productivity space</h2>
      <div className='form__features'>
        <div className='feature'>
          <img src={listIcon} alt="" />
          <p>Organize your daily activities</p>
        </div>
        <div className='feature'>
          <img src={workflowIcon} alt="" />
          <p>Structure your workflow</p>
        </div>
        <div className='feature'>
          <img src={notesIcon} alt="" />
          <p>Save a reminder for later</p>
        </div>
      </div>
    </aside>
  )
}
