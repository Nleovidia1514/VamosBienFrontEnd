import React, { Component } from 'react';

import Slider from '../../components/Slider/Slider';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

class Home extends Component {
    render() {
        return (
            <Auxiliary>
                <Slider />
            </Auxiliary>
        );
    }
}

export default Home;