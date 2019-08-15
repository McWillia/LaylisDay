import React from 'react';
import './style/App.css';

interface VProps {
	
}
class V extends React.Component <VProps>{
	constructor(props : VProps){
		super(props);
	}
	render(){
		return (
			<div>
				<div className='row'>
					<div className='col'>
						<div className='L' >
				        	a
				      	</div>
					</div>
					<div className='col' />
					<div className='col'>
						<div className='L' >
				        	a
				      	</div>
					</div>
				</div>

				<div className='row'>
					<div className='col'>
						<div className='L' >
				        	a
				      	</div>
					</div>
					<div className='col' />
					<div className='col'>
						<div className='L' >
				        	a
				      	</div>
					</div>
				</div>
				<div className='row'>
					<div className='col' />
					<div className='col' >
						<div className='L' >
				        	a
				      	</div>
					</div>
					<div className='col' />
				</div>
			</div>
		)
	}
}
export default V;