import React from 'react'
import Logo from '../Logo'
import { ChartColumnBig, LayoutDashboard, MessageCircle, ScrollText, Wallet } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Logo/>
      <div className="tabs">
        <div className="tab">
          <a href="#" className='item'>
            <LayoutDashboard/>
            <h3>Dashboard</h3>
          </a>
        </div>
        <div className="tab">
          <a href="#" className='item'>
            <MessageCircle/>
            <h3>Messages</h3>
            <div className="count">9+</div>
          </a>
        </div>
        <div className="tab">
          <a href="#" className='item'>
            <ScrollText/>
            <h3>Invoices</h3>
          </a>
        </div>
        <div className="tab">
          <a href="#" className='item'>
            <Wallet/>
            <h3></h3>
          </a>
        </div>
        <div className="tab">
          <a href="#" className='item'>
            <ChartColumnBig/>
            <h3>Invoices</h3>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar