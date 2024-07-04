// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import BookmarkFilter from './components/BookmarkFilter';

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Video Library</h1>
        <AddVideo />
        <BookmarkFilter />
        <VideoList />
      </div>
    </Provider>
  );
}

export default App;
