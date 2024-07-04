// src/components/VideoList.js
import React from 'react';
import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';

function VideoList() {
  const videos = useSelector((state) => state.videos.videos);

  return (
    <div className="flex flex-col items-center p-4">
        
        <h2 className="bg-pink-500 text-white py-2 px-4 rounded mb-4 ">List of All Videos </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {videos && videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
    </div>
        </div>
  );
}

export default VideoList;
