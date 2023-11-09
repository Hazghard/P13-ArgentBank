import React from 'react';
import Name from './DashboardName/Name';
import DashboardInputs from './DashboardInputs/DashboardInputs';

const DashboardHeader = () => {
	return (
		<div className='header'>
			<Name/>
			<DashboardInputs/>
		</div>
	);
};

export default DashboardHeader;