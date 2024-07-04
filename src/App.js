// src/App.js
import React from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import BookmarkFilter from './components/BookmarkFilter';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Home/>
      {/* <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Video Library</h1>
        <AddVideo />
        <BookmarkFilter />
        <VideoList />
      </div> */}
    </>
  );
}

export default App;
