import React from 'react';

import MainNav from '@/Components/MainNav/MainNav';
import Footer from '@/Components/Footer/Footer';
import DashboardHeader from '@/Components/DashboardHeader/DashboardHeader';
import AccountSection from '@/Components/AccountSection/AccountSection';



import fakeDatas from '@/__Mocks__/fakeData.json';

const Dashboard = () => {

	const accountSections = fakeDatas.map((data, index) => (
		<AccountSection
		  key={index}
		  title={data.title}
		  amount={data.amount}
		  description={data.description}
		/>
	  ));
	return (
		<>
		  <MainNav/>
		  <main className='main bg-dark'>
			<DashboardHeader/>
			<h2 className='sr-only'>Accounts</h2>
			{accountSections}
		  </main>
		  <Footer />
		</>
	  );
};

export default Dashboard;