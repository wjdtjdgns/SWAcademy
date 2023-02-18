import { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

function App() {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <Header />
      <SearchBox onSearch={setKeyword} />
    </div>
  );
}

export default App;
