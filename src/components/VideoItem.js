import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleBookmark } from '../features/videoSlice';
import VideoPlayerPopup from './VideoPlayerPopup';

function VideoItem({ video }) {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleToggleBookmark = () => {
    dispatch(toggleBookmark(video.id));
  };

  const handlePlayVideo = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
      <p className="text-lg font-semibold mb-2">{video.name}</p>
      <div className="flex justify-between w-full mb-2">
        <button
          onClick={handlePlayVideo}
          className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
        >
          Play
        </button>
        <button
          onClick={handleToggleBookmark}
          className={`py-1 px-3 rounded ${video.bookmarked ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-500 hover:bg-gray-600'} text-white`}
        >
          {video.bookmarked ? 'Unbookmark' : 'Bookmark'}
        </button>
      </div>
      {isPopupOpen && <VideoPlayerPopup video={video} onClose={handleClosePopup} />}
    </div>
  );
}

export default VideoItem;
