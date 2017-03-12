import React, {Component} from 'react';
import Title from './Title';
import YesButton from './YesButton';

class Background extends Component {
    styles = {
        paddings: {
          padding: "10px"
        },
        backgroundBox: {
            width: "100%",
            height: "100vh",
            background: "pink",
            textAlign: "center"
        },
        baeminFontFamily: {
            fontFamily: "BMDOHYEON"
        },
    }

    render() {
        return (
            <div style={Object.assign({}, this.styles.backgroundBox, this.styles.paddings, this.styles.baeminFontFamily)}>
                <Title/>
                <YesButton/>
            </div>
        )
    }
}

export default Background;