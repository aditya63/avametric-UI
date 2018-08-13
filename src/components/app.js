import React, { Component } from 'react';
import Header from './header';
import About from './about/about';
import Footer from './footer';


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      isMounted:false,
      partners:[]

    }
  }
  componentDidMount() {
    let res= fetch('http://localhost:3000/api/partners')
    this.setState( {isMounted:true}, () => {
      res.then(response => response.json())
      .then(data => {
        console.log(data);
        if( this.state.isMounted ) {
          this.setState({partners:[...data]})
        }
      });
    })

  }
  componentWillUnmount() {
    this.setState( { isMounted: false } )
  }

  render() {

    return (
      <div>
        <Header/>
        <About partnerInfo={this.state.partners}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
