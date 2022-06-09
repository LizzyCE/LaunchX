import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import RecoveryPsw from '../pages/RecoveryPsw';
import SendEmail from '../pages/SendEmail';
import NewPsw from '../pages/NewPsw';
import MyAccount from '../pages/MyAccount'
import CreateAccount from '../pages/CreatAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import '../styles/global.css'

const App = () => {
    return(
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/recovery-psw" component={RecoveryPsw}/>
                <Route exact path="/send-email" component={SendEmail} />
                <Route exact path="/new-psw" component={NewPsw}/>
                <Route exact path="/my-account" component={MyAccount}/>
                <Route exact path="/create-account" component={CreateAccount} />
                <Route exact path="/checkout" component={Checkout}/>
                <Route exact path="/orders" component={Orders}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Layout>
        </BrowserRouter>
        
    );
}

export default App;