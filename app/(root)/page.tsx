import React from 'react'
import HeaderBox from "../../components/HeaderBox"
import TotalBalanceBox from "../../components/TotalBalanceBox"
import RightSidebar from '@/components/RightSidebar';
function page() {
  const loggedIn = {
    firstName : "Adrian",
    lastName: "JSM",
    email: "hassanelmonge034@gmail.com"
  };



  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "guest"}
          subtext="Access and manage your account and transaction efficiently."
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTION
      </div>
        <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 123.50}, {currentBalance: 1223}]}/>
    </section>
  ) 
}

export default page
