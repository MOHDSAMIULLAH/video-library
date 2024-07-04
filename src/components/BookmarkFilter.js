// src/components/BookmarkFilter.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';

function BookmarkFilter() {
  const [showBookmarks, setShowBookmarks] = useState(false);
  const videos = useSelector((state) => state.videos.videos);
  const bookmarks = useSelector((state) => state.videos.bookmarks);

  const handleToggleFilter = () => {
    setShowBookmarks(!showBookmarks);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        onClick={handleToggleFilter}
        className="bg-purple-500 text-white py-2 px-4 rounded mb-4 hover:bg-purple-600"
      >
        {showBookmarks ? 'Show All Videos' : 'Show Bookmarked Videos'}
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(showBookmarks ? bookmarks : videos).map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default BookmarkFilter;
