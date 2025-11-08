import React from 'react'
import { Download, Save, Settings, Upload, } from 'lucide-react'
import ToolBar from '../components/Toolbar.jsx'
import AnnotationCanvas from '../components/AnnotationCanvas.jsx'
import Sidebar from '../components/Sidebar.jsx'

const Home = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <header className='flex justify-between items-center px-4 py-2 border-b border-gray-300 bg-white'>
        <div className='text-3xl'>
          Annothem
        </div>
        <div className='flex justify-evenly items-center gap-4'>
          <div className='flex gap-2 border bg-gray-100 border-gray-300 p-3 rounded-lg'>
            <Upload /> Upload
          </div>
          <div className='flex gap-2 border bg-gray-100 border-gray-300 p-3 rounded-lg'>
            <Save /> Save
          </div>
          <div className='flex gap-2 border bg-gray-100 border-gray-300 p-3 rounded-lg'>
            <Download /> Export
          </div>
          <Settings />
        </div>
      </header>
      <main className='flex p-4 gap-4'>
        <ToolBar />
        <AnnotationCanvas />
        <Sidebar />
      </main>
    </div>
  )
}

export default Home
