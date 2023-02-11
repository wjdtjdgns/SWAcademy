import Keyword from "./Keyword.js";

export default function Header({ $target, onKeywordInput }) {
  const $header = document.createElement("header");
  $header.className = "Header";

  const $title = document.createElement("h1");
  $title.innerHTML = "🐈고양이 사진 검색기🔎";
  $title.style.textAlign = "center";
  $target.appendChild($title);
  $target.appendChild($header);

  const keyword = new Keyword({ $target: $header, onKeywordInput });
}
