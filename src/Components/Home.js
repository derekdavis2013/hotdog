import React, { Component } from "react";
import _ from 'lodash';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadingState: 'NOT_STARTED',
            url: ''
        }
    }


    getBoi = () => {
        this.setState(_.assign({}, this.state, { loadingState: 'PENDING' }));
        axios.get('https://random.dog/woof.json').then((payload) => {
            this.setState(_.assign({}, this.state, { url: payload.data.url, loadingState: 'SUCCESS' }))
        });
    };



    render() {
        return (
            <div className="text-center">
                <img src={this.state.url} />
                <div>
                    <button onClick={this.getBoi}>
                        One Good Boi, Please
                    </button>
                </div>
            </div>
        );
    }
}

export default Home;