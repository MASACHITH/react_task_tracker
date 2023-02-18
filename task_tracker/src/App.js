import React from 'react'
import Header from './components/Header'
import Task from './components/Task'
import { useState } from 'react'

export default function App() {
  return (
    <div className=' container'>
      <Header/>
      <Task/>
    </div>
  )
}
