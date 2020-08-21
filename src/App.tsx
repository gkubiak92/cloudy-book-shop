import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Amplify
import Amplify from 'aws-amplify';
// Pages
import Home from 'pages/Home';
import Error from 'pages/Error/Error';
import Books from 'pages/Books/Books';
import Cart from 'pages/Cart/Cart';
import Checkout from 'pages/Checkout/Checkout';
import BookDetails from 'pages/BookDetails/BookDetails';
import Admin from 'pages/Admin/Admin';

// Components
import Header from './components/Header';

// Amplify Configurations
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <Route exact path='/books' component={Books} />
        <Route path='/books/:id' children={<BookDetails></BookDetails>} />
        <Route path='/admin' component={Admin} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
