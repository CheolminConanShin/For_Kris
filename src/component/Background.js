import React, {Component} from 'react';
import Title from './Title';

class Background extends Component {
    styles = {
        paddings: {
          padding: "10px"
        },
        backgroundBox: {
            width: "100%",
            height: "100vh",
            background: "pink"
        }
    }

    render() {
        return (
            <div style={Object.assign({}, this.styles.backgroundBox, this.styles.paddings)}>
                <Title/>
            </div>
        )
    }
}

export default Background;