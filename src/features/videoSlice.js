// src/features/videoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
  bookmarks: [],
};

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    addVideo: (state, action) => {
      state.videos.push(action.payload);
    },
    toggleBookmark: (state, action) => {
      const video = state.videos.find(v => v.id === action.payload);
      if (video) {
        video.bookmarked = !video.bookmarked;
        if (video.bookmarked) {
          state.bookmarks.push(video);
        } else {
          state.bookmarks = state.bookmarks.filter(v => v.id !== action.payload);
        }
      }
    },
  },
});

export const { addVideo, toggleBookmark } = videoSlice.actions;

export default videoSlice.reducer;
