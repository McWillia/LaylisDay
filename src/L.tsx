import React from 'react';
import './style/App.css';

interface LProps {
	colour: string;
}

class L extends React.Component <LProps>{
	constructor(props : LProps){
		super(props);
	}
	render(){
		const {colour} = this.props;
		return (
			<div>
				<div className='row'>
					<div className='col'>
						<div className='L' >
				        	a
				      	</div>
					</div>
					<div className='col' />
					<div className='col' />
				</div>
				<div className='row'>
					<div className='col'>
						<div className='L' >
				        	a
				      	</div>
					</div>
					<div className='col' />
					<div className='col' />
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
export default L;