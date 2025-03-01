import React from 'react';
import "./Sidebar.css";
import Logo from '../Logo';
import { ChartColumnBig, HandHelping, LayoutDashboard, MessageCircle, MonitorDot, ScrollText, Settings, Wallet, SunMoon } from 'lucide-react';
import profile from '../../assets/profile.jpg';

const Sidebar = ({open}) => {
  return (
    <aside className={ `sidebar ${open && "open"}`}> 
      <Logo/>
      <div className="tabs">
        <div className="tab active">
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
            <h3>Wallet</h3>
          </a>
        </div>
        <div className="tab">
          <a href="#" className='item'>
            <ChartColumnBig/>
            <h3>Analytics</h3>
          </a>
        </div>
        <div className="tab">
          <a href="#" className='item'>
            <MonitorDot/>
            <h3>My Activity</h3>
          </a>
        </div>
        <div className="tab">
          <a href="#" className='item'>
            <Settings/>
            <h3>Settings</h3>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="item-tabs">
          <div className="item-tab">
           <HandHelping/>
           <h3>Get Help</h3> 
          </div>
          <div className="item-tab">
            <SunMoon/>
            <h3>Theme</h3>
          </div>
          <div className="user">
            <div className="profile">
              <img src={profile} alt='' />
            </div>
            <div className="details">
              <h4 className='name'>Ant Kwame</h4>
              <p className='muted'>User</p>
            </div>
          </div> 
        </div>
      </div>
    </aside>
  )
}

export default Sidebar