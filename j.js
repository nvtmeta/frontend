import "./styles.css";
import { useState, useEffect } from "react";

const tabs = ["photos", "todos", "posts"];
function App() {
  const [title, setTitle] = useState("");
  const [store, setStore] = useState([]);
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  function handleClick() {
    setStore((prev) => {
      const newTitle = [...prev, title];
      return newTitle;
    });
    setTitle("");
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type, title]);

  return (
    <div className="App">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setType(tab);
          }}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: " #000"
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => {
          handleClick(title);
        }}
      >
        Render
      </button>
      <ul>
        <li>
          {store.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </li>
        {posts.map((posts) => (
          <li key={posts.id}>
            {posts.thumbnailUrl || posts.title || posts.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
