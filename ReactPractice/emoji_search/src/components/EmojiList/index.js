import styled from "@emotion/styled";
import EmojiListItem from "../EmojiListItem";

const Container = styled.ul`
  width: 100%;
  padding: 0;
`;

const EmojiList = ({ emojis }) => {
  return (
    <Container>
      {emojis.map((emoji) => (
        <EmojiListItem key={emoji.title} emoji={emoji} />
      ))}
    </Container>
  );
};

export default EmojiList;
