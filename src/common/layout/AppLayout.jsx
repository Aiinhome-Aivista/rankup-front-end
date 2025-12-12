import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function AppLayout({ children }) {
    return (
        <div className='w-full min-h-screen bg-[#F3F4FF]'>
            <Sidebar />
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                <main className='w-full flex-1 overflow-y-auto'>{children}</main>
            </div>
        </div>
    )
}

export default AppLayout