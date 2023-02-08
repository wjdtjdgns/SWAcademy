import PhotoList from "./PhotoList.js";
import { request } from "./api.js";

// const DUMMY_DATA = [
//   {
//     id: 1,
//     imagePath:
//       "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20200428_052455.jpg",
//     cats: "1, 2",
//     created_at: "2021-08-22T12:13:26.364z",
//     updated_at: "2021-08-22T12:26:50.467z",
//     photo_in_cats: [
//       {
//         id: 1,
//         name: "나나",
//         colors: "yellow, white",
//         birthday: null,
//         profileImage:
//           "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20201217_012751.jpg",
//         published_at: "2021-08-22T12:09:21.753z",
//         created_at: "2021-08-22T12:09:20.857z",
//         updated_at: "2021-08-22T12:11:16.963z",
//       },
//       {
//         id: 2,
//         name: "모나",
//         colors: "black, white",
//         birthday: null,
//         profileImage:
//           "https://s3.ap-northeast-2.amazonaws.com/kdt-cdn.roto.codes/cat-photos/20210821_075630.jpg",
//         published_at: "2021-08-22T12:09:49.615z",
//         created_at: "2021-08-22T12:09:48.793z",
//         updated_at: "2021-08-22T12:12:14.809z",
//       },
//     ],
//   },
// ];

export default function App({ $target }) {
  const $h1 = document.createElement("h1");
  $h1.innerHTML = "Cat Photos";
  $h1.style.textAlign = "center";
  $target.appendChild($h1);

  this.state = {
    limit: 5,
    nextStart: 0,
    photos: [],
    isLoading: false,
  };

  const PhotoListComponent = new PhotoList({
    $target,
    initialState: {
      isLoading: this.state.isLoading,
      photos: this.state.photos,
    },
    onScrollEnded: async () => {
      await fetchPhotos();
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    PhotoListComponent.setState({
      isLoading: this.state.isLoading,
      photos: nextState.photos,
    });
  };

  const fetchPhotos = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    const { limit, nextStart } = this.state;
    const photos = await request(
      `/cat-photos?_limit=${limit}&_start=${nextStart}`
    );
    this.setState({
      ...this.state,
      nextStart: nextStart + limit,
      photos: this.state.photos.concat(photos),
      isLoading: false,
    });
  };

  fetchPhotos();
}
