import React, {Component} from 'react';

class Title extends Component {
    styles = {
        textBox: {
            width: "100%",
            marginBottom: "3vh"
        },
        titleFontSize: {
            fontSize: "5vw"
        }
    }

    render() {
        return (
            <div style={this.styles.textBox}>
                <div style={Object.assign({}, this.styles.titleFontSize)}>For Kris</div>
            </div>
        );
    }
}

export default Title;