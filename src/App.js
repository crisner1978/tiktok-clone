import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
import Video from "./components/Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ _id: id, url, channel, song, description, likes, messages, shares }) => (
            <Video
              id={id}
              url={url}
              channel={channel}
              song={song}
              description={description}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
