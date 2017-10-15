import React, {Component} from 'react';
import ListData from './listData';


class SearchResult extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextprops) {
        if (this.props.cities !== nextprops.cities) {
            this.props = nextprops;
        }
    }


    render() {
        return (
            <div className="search-result">
                <ul>
                    {this.props.cities.map((city, i) => <ListData city={city} key={i}/>)}
                </ul>
            </div>
        );
    }
}

export default SearchResult;
