import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import _ from 'lodash';
const API='AIzaSyCaKG_KHqAI-850qyOz05rnDNL6eVw4HXU';

export default class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={videos:[],
      selectedVideo:null};
  this.videoSearch('angular2');
  }

  videoSearch(term){
    YTSearch({key:API,term:term},(videos)=>{
      console.log(videos);
            this.setState({videos:videos,
            selectedVideo:videos[0]});//this is equal to videos:data this is es6 specific synatx
    });
  }
  
  render(){
    const videoSearch=_.debounce((term)=>{this.videoSearch(term),300});
  return (<div>
  <SearchBar onSearch={videoSearch} />
  <VideoDetail video={this.state.selectedVideo}/>}
  <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
  videos={this.state.videos} />
  </div>);
  }
};

ReactDOM.render(<App/>,document.querySelector('.container'));
