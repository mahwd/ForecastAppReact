import React, {Component} from 'react';

class ListData extends Component {


    render() {
        switch (this.props.city.unit) {
            case "C":
                return (
                    <li>
                        <span>{this.props.city.name}  </span>
                        <span> {this.props.city.value_C}</span>
                    </li>
                );
                break;
            case "K":
                return (
                    <li>
                        <span>{this.props.city.name}  </span>
                        <span> {this.props.city.value_K}</span>
                    </li>
                );
                break;
            case "F":
                return (
                    <li>
                        <span>{this.props.city.name}  </span>
                        <span> {this.props.city.value_F}</span>
                    </li>
                );
                break;
            default:
                return (
                    <li>Empty</li>
                );
                break;
        }
    }
}


export default ListData;
