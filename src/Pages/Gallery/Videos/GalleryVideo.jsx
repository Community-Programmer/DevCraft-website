import React from 'react'


const GalleryVideo = () => {

  const videoContext = require.context('../../../Assets/Gallery/Videos', false, /\.(mp4|webm|ogg)$/);

  const videos = videoContext.keys().map(videoContext);
  return (
    <>
    <h1 className="main-heading">Video Vault</h1>
    <div className="video-section">
        {videos.map((data,key)=>{
          return(<video controls>
            <source src={data} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>)
        })}
    



    </div>
    </>
  )
}

export default GalleryVideo