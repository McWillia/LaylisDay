import React from 'react';
import './style/App.css';

interface OProps {
	
}
class O extends React.Component <OProps>{
	constructor(props : OProps){
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
					<div className='col' >
						<div className='L' >
				        	a
				      	</div>
					</div>
				</div>
			</div>
		)
	}
}
export default O;