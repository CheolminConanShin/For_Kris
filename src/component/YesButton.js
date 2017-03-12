import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

class YesButton extends Component {
    styles = {
        buttonSize: {
            height: "16vh"
        },
        buttonColor: {
            backgroundColor: "green"
        },
        baeminFontFamily: {
            fontFamily: "BMDOHYEON"
        }
    }

    render() {
        return (
            <FlatButton style={Object.assign({}, this.styles.buttonColor, this.styles.buttonSize, this.styles.baeminFontFamily)} label="Yes"/>
        )
    }
}

export default YesButton;