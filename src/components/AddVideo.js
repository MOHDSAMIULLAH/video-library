// src/components/AddVideo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVideo } from '../features/videoSlice';
import { v4 as uuidv4 } from 'uuid';

function AddVideo() {
  const dispatch = useDispatch();
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleAddVideo = () => {
    if (videoFile) {
      const videoData = {
        id: uuidv4(),
        file: URL.createObjectURL(videoFile),
        name: videoFile.name,
        bookmarked: false,
      };
      dispatch(addVideo(videoData));
      setVideoFile(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-md shadow-md">
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoChange}
        className="mb-4"
      />
      <button
        onClick={handleAddVideo}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Video
      </button>
    </div>
  );
}

export default AddVideo;
