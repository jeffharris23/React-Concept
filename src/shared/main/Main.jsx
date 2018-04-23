import * as React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from '../../pages/Home';
import Concepts from '../../pages/Concepts';
import Form from '../../pages/Form';
import Callback from '../../pages/Callback';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import PrivateRoute from '../../components/PrivateRoute';





class Main extends React.Component {
  render() {
    return (
        <div className="main-content p-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">    
                        
                        <Switch>
                            <Route exact path='/' component={Home} wrapper="home"/>
                            <Route exact path='/concepts' component={Concepts}  wrapper="concepts another-class"/>
                            <Route exact path='/form' component={Form}  />
                            <Route path="/login" render={(props)=><Login auth={this.props.auth} {...props}/>}/>
                            <PrivateRoute path='/dashboard' component={Dashboard} auth={this.props.auth}/>
                            <Route path="/callback" render={(props)=><Callback auth={this.props.auth} {...props}/>}/>
                        </Switch>      
           
                    </div>
                </div>
            </div>  
        </div>                     
    );
  }
}

export default Main;