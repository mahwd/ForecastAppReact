import React, { Component } from 'react';



class Filters extends Component {
  constructor(props) {
    super(props);
  }




   render() {
      return (
         <form className="">
           <input className ="temp" type="radio" name="temp" value="K" onChange={this.onChange}/> K<br/>
           <input className ="temp" type="radio" name="temp" value="C" onChange={this.onChange}/> C<br/>
           <input className ="temp" type="radio" name="temp" value="F" onChange={this.onChange} /> F
         </form>
      );
   }
    onChange = (e) => {
        console.log(e.currentTarget.value);
        this.props.getUnit(e.currentTarget.value);
  }
}


export default Filters;
