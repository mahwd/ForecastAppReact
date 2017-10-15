import React, {Component} from 'react';
import axios from 'axios';

const apiKey = '27cb999c93709b76e41d3638da96eb28';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            unit: 'C',
            status: false,
            errorContent: '',
        };

    }

    handleSearch = (event) => {
        this.setState({
            cityName: event.target.value,
            status: true,
            errorContent: '',
        });
    };

    componentWillReceiveProps(nextprops) {
        if (this.props.unit !== nextprops.unit) {
            this.props = nextprops;
            this.setState({unit: nextprops.unit});
            this.handleRequest();
        }
    }


    handleRequest = () => {

        let requestUrl = baseUrl + 'APPID=' + apiKey;
        requestUrl += '&q=' + this.state.cityName + '&units=metric';
        if (this.state.status) {
            axios.get(requestUrl)
                .then((response) => {
                    this._successMessage(response);
                })
                .catch((error) => {
                    let {errorContent} = this.state;
                    errorContent = <p style={{color: 'red', fontSize: 14,}}> i have no information about this city </p>
                    this.setState({errorContent: errorContent});
                });
        } else {
            console.log("enter new city");
        }
        this.state.status = false;
    };

    _successMessage = (response) => {
        const temp = response.data.main.temp;
        const temp_F = temp * 9 / 5 + 32;
        const temp_K = parseFloat((temp_F + 459.67) * 5 / 9).toFixed(2);
        this.props.getResults({
            name: this.state.cityName,
            value_C: temp,
            value_F: temp_F,
            value_K: temp_K,
            unit: this.state.unit
        });
    };

    render() {
        return (
            <div>
                <input value={this.state.cityName} type="text" placeholder="find city" onChange={this.handleSearch}/>
                <button onClick={this.handleRequest}>Add city</button>
                <button>Clear</button>
                <hr/>
                {this.state.errorContent}

            </div>
        );
    }


}


export default Search;