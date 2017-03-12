import React, {Component} from 'react';

class Questionair extends Component {
    styles = {
        margins: {
            marginBottom: "3vh"
        }
    }

    render() {
        return (
            <div style={this.styles.margins}>
                <label>I Have Question!</label>
            </div>
        )
    }
}

export default Questionair;