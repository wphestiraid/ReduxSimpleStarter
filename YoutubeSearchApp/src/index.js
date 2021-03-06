import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import { API_KEY } from '../config.js';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Create a new component. This component shuld produce some html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this._videoSearch('galaxy s9');
    }

    _videoSearch(term) {
        YTSearch({ key: API_KEY, term }, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce(term => {
            this.videoSearch(term);
        }, 400);
        return (
            <div>
                <SearchBar
                    onSearchTermChange={term => this._videoSearch(term)}
                />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo =>
                        this.setState({ selectedVideo })
                    }
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page
// (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
