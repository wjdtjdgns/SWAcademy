export default function PhotoList({ $target, initialState, onScrollEnded }) {
  let isInitialize = false;
  const $photoList = document.createElement("div");
  $target.appendChild($photoList);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!isInitialize) {
      $photoList.innerHTML = `
        <ul class="PhotoList__photos"></ul>
        <button class="PhotoList__loadMore" style="width:100%; height 200px; font-size:20px;">Load More</button>
      `;

      isInitialize = true;
    }

    const { photos } = this.state;

    const $photos = $photoList.querySelector(".PhotoList__photos");

    photos.forEach((photo) => {
      if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
        const $li = document.createElement("li");
        $li.setAttribute("data-id", photo.id);
        $li.style = "list-style: none;";
        $li.innerHTML = `<img width="100%" src="${photo.imagePath}" />`;

        $photos.appendChild($li);
      }
    });
  };

  this.render();

  $photoList.addEventListener("click", (e) => {
    if (e.target.className === "PhotoList__loadMore" && !this.state.isLoading) {
      onScrollEnded();
    }
  });
}
