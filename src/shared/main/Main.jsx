import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Concepts from '../../pages/Concepts';


class Main extends React.Component {
  render() {
    return (
        <div className="main-content p-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">      
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/concepts' component={Concepts}/>
                        </Switch>
                    </div>
                </div>
            </div>  
        </div>                     
    );
  }
}

export default Main;