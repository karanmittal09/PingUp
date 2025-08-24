import React, { useEffect, useState } from "react";
import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";
import moment from "moment";

const StoriesBar = () => {
  const [stories, setStories] = useState([]);

  const fetchStories = async () => {
    setStories(dummyStoriesData);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl overflow-x-auto px-4">
      <div className="flex gap-4 pb-5">
        {/* add stories card */}
        <div className="rounded-lg shadow-sm min-w-[120px] max-w-[120px] max-h-40 aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed border-indigo-300 bg-gradient-to-b from-indigo-100 to-indigo-50">
          <div className="h-full flex flex-col items-center justify-center p-4">
            <div className="size-10 bg-indigo-500 rounded-full flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" />
            </div>

            <p className="text-sm font-medium text-slate-700 text-center">
              Create Stories
            </p>
          </div>
        </div>

        {/* stories card */}
        {stories.map((story, index) => (
          <div
            key={index}
            className="
              relative rounded-lg shadow
              min-w-[7.5rem] max-w-[7.5rem] max-h-40
              cursor-pointer hover:shadow-lg
              transition-all duration-200
              bg-gradient-to-b from-indigo-500 to-purple-600
              hover:from-indigo-700 hover:to-purple-800
              active:scale-95
            "
          >
            <img
              src={story.user.profile_picture}
              alt=""
              className="absolute size-8 top-3 left-3 z-10 rounded-full ring-gray-100 shadow"
            />

            <p className="absolute top-16 left-3 text-white/60 text-sm truncate max-w-24">
              {story.content}
            </p>

            <p className="absolute bottom-1 right-2 z-10 text-white text-[12px] opacity-80">
              {moment(story.created_at).fromNow()}
            </p>

            {story.media_type !== "text" && (
              <div className="absolute inset-0 z-1 rounded-lg bg-black overflow-hidden">
                {story.media_type === "image" ? (
                  <img
                    src={story.media_url}
                    alt=""
                    className="w-full h-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80"
                  />
                ) : (
                  <video
                    src={story.media_url}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesBar;
