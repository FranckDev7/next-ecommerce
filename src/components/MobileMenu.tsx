'use client'

import { AlignLeft } from 'lucide-react'
import SideMenu from '@/components/SideMenu'
import { useState } from 'react'

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-dark-color hoverEffect hover:cursor-pointer md:hidden" />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  )
}

export default MobileMenu
