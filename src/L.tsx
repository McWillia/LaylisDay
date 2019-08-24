import React from 'react';
import './style/App.css';
import { Button } from 'reactstrap';


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
				        	<p>We are starting here, first things first:-</p>
				        	<Button 
				        		outline
				        		color="info"
				        		disabled
				        	>
				        		Have A Shower
			        		</Button>
			        		<Button
			        			outline
			        			color="primary"
			        		>	
			        			Get Dressed
			        		</Button>
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