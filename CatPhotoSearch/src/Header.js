export default function Header({ $target }) {
  const $header = document.createElement("header");
  $header.className = "Header";

  $target.appendChild($header);
}
