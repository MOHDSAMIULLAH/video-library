// src/components/VideoPlayerPopup.js
import React from 'react';

function VideoPlayerPopup({ video, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
        >
          ×
        </button>
        <video src={video.file} controls autoPlay className="rounded-md" />
      </div>
    </div>
  );
}

export default VideoPlayerPopup;
