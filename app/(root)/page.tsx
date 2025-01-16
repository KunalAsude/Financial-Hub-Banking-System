import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "Kunal", lastName : "Asude" , email :'Kunal@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type ='greeting'
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='Secure and reliable banking system for seamless financial management and transactions. Experience advanced security, efficient processing, and trustworthy financial solutions.'
          />
          <TotalBalanceBox 
          accounts={[]}
          totalCurrentBalance={12500.45}
          totalBanks={1}

          />
        </header>
        Recent Transactions
      </div>
      <RightSideBar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:1000},{ currentBalance:2000}]}
      />
    </section>
  )
} 

export default Home
