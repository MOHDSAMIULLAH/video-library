import React from "react";
import AddVideo from "../components/AddVideo";
import BookmarkFilter from "../components/BookmarkFilter";

const Home = () => {
  return (
    <div>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
        <div class="min-h-28 ">
          <div class="max-w-screen-lg mx-auto py-4">
            <h2 class="font-bold text-center text-6xl text-slate-700 font-display">
              Video Library
            </h2>
            <AddVideo />
            <BookmarkFilter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
