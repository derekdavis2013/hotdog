import React, { PureComponent } from "react";
import _ from 'lodash';
import axios from 'axios';

class Home extends PureComponent {
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
            this.setState(_.assign({}, this.state, { url: payload.data.url, loadingState: 'SUCCESS' }));
        });
    };

    renderPicOrMp4() {
        if(_.endsWith(this.state.url, 'mp4') || _.endsWith(this.state.url, 'webm')) {
            return (
                <video className="video-player" controls autoPlay loop>
                    <source src={this.state.url} type="video/mp4" />
                </video>
            );
        }

        return (
            <img src={this.state.url} />
        );
    }

    loadDoggo = () => {
        switch (this.state.loadingState) {
            case 'NOT_STARTED': {
                return (
                    <div>
                        <h1>CLICK BUTTON TO LOAD A V GOOD BOI</h1>
                    </div>
                );
            }

            case 'PENDING': {
                return (
                    <div>
                        <h1>FETCHING THE FLOOF</h1>
                    </div>
                );
            }

            case 'SUCCESS': {
                return this.renderPicOrMp4();
            }
        }
    };

    render() {
        return (
            <div className="text-center">
                <div>
                    <button onClick={this.getBoi}>
                        One Good Boi, Please
                    </button>
                </div>
                {this.loadDoggo()}
            </div>
        );
    }
}

export default Home;