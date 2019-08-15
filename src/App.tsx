import React from 'react';
import './style/App.css';
import { Button } from 'reactstrap';
import L from './L';
import O from './O';
import V from './V';
import E from './E';
import U from './U';


class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <div className='row' >
          <div className='col'>
            <L 
              colour={'red'}
            />
          </div>
          <div className='col'>
            <O />
          </div>
          <div className='col'>
             <V />
          </div>
          <div className='col'>
             <E />
          </div>
        </div>

        <div className='row '>
          <div className='col' />
          <div className='col uRow'>
              <U />
          </div>
          <div className='col' />

        </div>
      </div>
    );
  }
}

export default App;
