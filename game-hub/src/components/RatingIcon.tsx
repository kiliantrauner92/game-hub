import React from "react";

import { Image } from "@chakra-ui/react";
import exceptionalIcon from "../assets/bulls-eye.webp";
import mehIcon from "../assets/meh.webp";
import recommendedIcon from "../assets/thumbs-up.webp";

import { Rating } from "../hooks/useGames";

interface Props {
  ratings: Rating[];
}
const RatingIcon = ({ ratings }: Props) => {
  const mapIcons: { [key: string]: string } = {
    exceptional: exceptionalIcon,
    recommended: recommendedIcon,
    meh: mehIcon,
    //skip:
  };
  const highestRatingScore: number = ratings.reduce(
    (prev, current) => (prev > current.count ? prev : current.count),
    0
  );
  let r = ratings.find((r) => r.count === highestRatingScore)!.id;

  return <Image src={mapIcons[ratings[r].title]} boxSize="30px" />;
};

export default RatingIcon;
