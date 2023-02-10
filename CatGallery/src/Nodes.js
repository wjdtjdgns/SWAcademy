export default function Nodes({ $target, initialState, onClick }) {
  const $nodes = document.createElement("div");
  $target.appendChild($nodes);
  $nodes.classList.add("nodes");

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { isRoot, nodes } = this.state;
    $nodes.innerHTML = `
    <div class="Nodes">
      ${
        isRoot
          ? ""
          : `
        <div class="Node">
          <img src="https://cat-photos-dev-serverlessdeploymentbucket-fdpz0swy5qxq.s3.ap-northeast-2.amazonaws.com/public/images/prev.png" />
        </div>
      `
      }
      ${nodes
        .map(
          (node) => `
        <div class="Node">
          <img src="${
            node.type === "DIRECTORY"
              ? "https://cat-photos-dev-serverlessdeploymentbucket-fdpz0swy5qxq.s3.ap-northeast-2.amazonaws.com/public/images/directory.png"
              : "https://cat-photos-dev-serverlessdeploymentbucket-fdpz0swy5qxq.s3.ap-northeast-2.amazonaws.com/public/images/file.png"
          }" />
          ${node.name}
        </div>
      `
        )
        .join("")}

    </div>
    `;
  };

  this.render();
}
