import React from 'react'
import Router from './Router'

const Layout = () => {
    return (
        <div className="min-h-screen w-screen flex flex-col bg-[#EFEFEF]">
            <main className="flex flex-col grow">
                <Router />
            </main>
        </div>
    )
}

export default Layout
