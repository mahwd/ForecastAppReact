import React, {Component} from 'react';
import Search from './search';
import SearchResult from './search-result';
import Filters from './filters';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cities: [],
            unit: 'C'
        }
    }

    // if unit state changed reconfigures units
    configureUnits = (unit) => {
        const {cities} = this.state;
        cities.map((item, i) => {
            item.unit = unit;
        });
        this.setState({cities: cities});
        console.log(this.state.cities);
    };

    // checks if state or props changed
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.unit !== nextState.unit) {
            this.configureUnits(nextState.unit);
        }
        return true;
    }

    _getResults = (data) => {
        // assume data is new city
        let isNewEntry = true;
        const {cities} = this.state;

        cities.map((item, i) => {
            if (data.name === item.name) {
                // the city exists update data
                console.log("update data");
                isNewEntry = false;
            }
        });

        // by default setting new city to state
        if (isNewEntry) {
            console.log("detected newEntry =>" + isNewEntry);
            cities.push(data);
            this.setState({cities: cities});
        } else {
            // otherwise
            console.log("cities contains this city");
        }
        // setting isNewEntry its default value
        isNewEntry = true;
    };

    _getUnit = (str) => {
        const {unit} = this.state;
        this.setState({unit: str});
        console.log("str=" + str);
    };

    render() {
        return (
            <div className="app">
                <Search getResults={this._getResults} unit={this.state.unit}/>
                <SearchResult cities={this.state.cities}/>
                <Filters getUnit={this._getUnit}/>
            </div>
        );
    }
}

