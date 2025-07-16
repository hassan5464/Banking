import React from 'react'
import HeaderBox from "../../components/HeaderBox"
import TotalBalanceBox from "../../components/ui/TotalBalanceBox"
function page() {
  const loggedIn = {
    firstName : "Adrian"
  };



  return (
    <section>
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
      </div>
    </section>
  )
}

export default page
