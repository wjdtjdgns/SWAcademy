import { useState } from "react";
import EmojiList from "./components/EmojiList";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import emojiJson from "./data/emoji.json";

function App() {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <Header />
      <SearchBox onSearch={setKeyword} />
      <EmojiList emojis={emojiJson} />
    </div>
  );
}

export default App;
