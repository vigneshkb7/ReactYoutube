import React from 'react';


// export default class VideoListItem extends React.Component{
//     constructor(props){
//         super(props);
        
//     }
//     render(){
//      return (<li>video</li>);
//     }

    
// }

const VideoListItem=({video,onVideoSelect})=>{
   // const video=props.video  
   const imageUrl=video.snippet.thumbnails.default.url;
    return (
        <li onClick={()=>onVideoSelect(video)}mclassName="list-group-items">
        <div className="video-list media">

        <div className="media-left">
        <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
        <div className="media-heading">
        {video.snippet.title}
        </div>
        </div>

       </div>
       </li>
    );

}

export default VideoListItem;



