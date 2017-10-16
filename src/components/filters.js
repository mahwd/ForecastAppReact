import React, { Component } from 'react';



class Filters extends Component {

    onChange = (e) => {
        console.log(e.currentTarget.value);
        this.props.getUnit(e.currentTarget.value);
    };

    render() {
        return (
            <form className="">
                <input className="temp" type="radio" name="temp" value="K" onChange={this.onChange}/> K<br/>
                <input className="temp" type="radio" name="temp" value="C" onChange={this.onChange} selected={true}/> C<br/>
                <input className="temp" type="radio" name="temp" value="F" onChange={this.onChange}/> F
            </form>
        );
    }
}

export default Filters;
