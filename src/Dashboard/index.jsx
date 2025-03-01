import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "./Dashboard.css";
import { useState } from 'react';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sidebar open={open}/>
      <main>
        <Navbar onMenuClick={() => setOpen(!open)}/>
      </main>
    </>
  )
}

export default Dashboard;