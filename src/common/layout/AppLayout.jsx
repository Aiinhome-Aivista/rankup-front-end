import React from 'react'
import Navbar from './Navbar'

function AppLayout({ children }) {
    return (
        <div className='w-full min-h-screen flex flex-col'>
            <Navbar />
            <main className='w-screen grow h-full overflow-y-auto'>{children}</main>
        </div>
    )
}

export default AppLayout