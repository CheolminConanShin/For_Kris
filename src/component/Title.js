import React, {Component} from 'react';

class Title extends Component {
            styles = {
        textBox: {
            width: "100%",
            textAlign: "center"
        },
        baeminFontFamily: {
            fontFamily: "BMDOHYEON"
        },
        titleFontSize: {
            fontSize: "5vw"
        }
    }

    render() {
        return (
            <div style={this.styles.textBox}>
                <div style={Object.assign({}, this.styles.baeminFontFamily, this.styles.titleFontSize)}>For Kris</div>
            </div>
        );
    }
}

export default Title;