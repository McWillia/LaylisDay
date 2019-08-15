import React from 'react';
import './style/App.css';

interface EProps {
	
}
class E extends React.Component <EProps>{
	constructor(props : EProps){
		super(props);
	}
	render(){
		return (
			<div>
				<div className='row'>
					<div className='col'>
						<div className='E' >
				        	a
				      	</div>
					</div>			
				</div>
				<div className='row'>
					<div className='col'>
						<div className='E' >
				        	a
				      	</div>
					</div>
					<div className='col' />
					<div className='col' />
				</div>
				<div className='row'>
					<div className='col' >
						<div className='E' >
				        	a
				      	</div>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<div className='E' >
				        	a
				      	</div>
					</div>
					<div className='col' />
					<div className='col' />
				</div>
				<div className='row'>
					<div className='col' >
						<div className='E' >
				        	a
				      	</div>
					</div>
				</div>
			</div>
		)
	}
}
export default E;