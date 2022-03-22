import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
      super(props);

      this.state = {
        dishes: DISHES,
        selectedDish: null
      };
    }

   

    render() {

    const HomePage =  () => {
      return(
        <Home />
      );
    }
  

    return (
      <div className="Main">
        <Header />
        
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        
        <Footer />
      </div>
    );
  } 
}

export default Main;
