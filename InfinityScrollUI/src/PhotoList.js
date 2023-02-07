export default function PhotoList({ $target, initialState, onScrollEnded }) {
  const $photoList = document.createElement("ul");
  $target.appendChild($photoList);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $photoList.innerHTML = `
      ${this.state
        .map(
          (photo) =>
            `
          <li>
            <img width="100%" src="${photo.imagePath}" />
          </li>
        `
        )
        .join("")}
    `;
  };

  this.render();
}
