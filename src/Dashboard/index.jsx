import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar"; 
import VisaCard from "../Components/VisaCard";
import SendMoney from "../Components/SendMoney";
import QuickTransfer from "../Components/QuickTransfer";
import CashFlow from "../Components/CashFlow";
import StatisticGrid from "../Components/StatisticGrid";
import Transactions from "../Components/Transactions";
import "./Dashboard.css";
import { useState } from 'react';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sidebar open={open}/>
      <main>
        <Navbar onMenuClick={() => setOpen(!open)}/>
        <section className="container">
          <div className="column">
            <VisaCard />
            <SendMoney/>
            <QuickTransfer/>
          </div>
          <div className="column">
            <CashFlow/>
            <StatisticGrid/>
            <Transactions/>
          </div>
        </section>
      </main>

    </>
  )
}

export default Dashboard;