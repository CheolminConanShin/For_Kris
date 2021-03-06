import React, {Component} from 'react';

class Title extends Component {
    styles = {
        margins: {
            marginBottom: "3vh"
        },
        titleFontSize: {
            fontSize: "5vw"
        }
    }

    render() {
        return (
            <div style={this.styles.margins}>
                <label style={Object.assign({}, this.styles.titleFontSize)}>For Kris</label>
            </div>
        );
    }
}

export default Title;