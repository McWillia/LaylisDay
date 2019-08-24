import React from 'react';
import './style/App.css';

interface UProps {
	
}
class U extends React.Component <UProps>{
	constructor(props : UProps){
		super(props);
	}
	render(){
		return (
			<div>
				<div className='row'>
					<div className='col'>
						<div className='holder' >
				        	a
				      	</div>
					</div>
					<div className='col' />
					<div className='col'>
						<div className='holder' >
				        	a
				      	</div>
					</div>
				</div>

				<div className='row'>
					<div className='col'>
						<div className='holder' >
				        	a
				      	</div>
					</div>
					<div className='col' />
					<div className='col'>
						<div className='holder' >
				        	a
				      	</div>
					</div>
				</div>
				<div className='row'>
					<div className='col' >
						<div className='holder' >
				        	a
				      	</div>
					</div>
				</div>
			</div>
		)
	}
}
export default U;