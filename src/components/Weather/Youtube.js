import { useState, useEffect } from "react";
import "./Youtube.scss";
import moment from "moment";
import axios from "axios";
const Youtube = () => {
  const [video, setVideo] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    // let res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    //   part: "snippet",
    //   maxResults: "20",
    //   key: "AIzaSyCw46K9nqhSsDm67nZ1_oXSbKgu9-TFq4Q",
    //   type: "video",
    //   q: search,
    // });
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "5",
        key: "AIzaSyCF-I_BXsKrgqrhCazJ3kx97I8hKLW8TTc",
        type: "video",
        q: search,
      },
    });
    if (res && res.data && res.data.items) {
      let videos = res.data.items;
      console.log(videos);
      let result = [];
      if (videos && videos.length > 0) {
        videos.map((e) => {
          let obj = {};
          obj.id = e.id.videoId;
          obj.title = e.snippet.title;
          obj.date = e.snippet.publishedAt;
          obj.desc = e.snippet.description;
          result.push(obj);
        });
      }
      setVideo(result);
    }
    console.log(res);
  };
  return (
    <div className="YoutubeContainer">
      <div className="youtubeSearch">
        <input
          className="youtubeSearchInput"
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        ></input>
        <button className="youtubeSearchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {video &&
        video.length > 0 &&
        video.map((e) => {
          return (
            <div className="video" key={e.id}>
              <div className="Left">
                <iframe
                  className="iframe"
                  src={`https://www.youtube.com/embed/${e.id}`}
                  title={e.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{e.title}</div>
                <div className="author">{}</div>
                <div className="date">
                  Published at {moment(e.date).format("DD-MM-YYYY HH:mm:ss")}
                </div>
                <div className="desc">{e.desc}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Youtube;
