import { Container } from "./styles";

import { AiFillStar, AiOutlineStar  } from "react-icons/ai";

export function Rating({ grade, isBigSize }) {
  let stars = [];
  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= grade) {
      stars.push(<AiFillStar key={cont} />);
    } else {
      stars.push(<AiOutlineStar  key={cont} />);
    }
  }

  return <Container isBigSize={isBigSize}>{stars}</Container>;
}