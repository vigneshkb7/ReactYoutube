import React from 'react';
import VideoListItem from './video-list-item';

// export default class VideoList extends React.Component{
//     constructor(props){
//         super(props);
//         const videoItem = props.videos.map((video)=>{
//             return <VideoListItem video={video}/>;
//         })
//         //console.log(videoItem);
//     }
//     render(){
//      return (<ul className="col-md-4 list-group">
//           {this.videoItem}
//         </ul>);
//     }

    
// }

const VideoList=(props)=>{
   const videoItems=props.videos.map((video)=>{
       return <VideoListItem 
       onVideoSelect={props.onVideoSelect}
       key={video.etag} video={video}/>;
   })
    return (
        <ul className="col-md-4 list-group">
        {videoItems}
        </ul>
    );
}



export default VideoList;
