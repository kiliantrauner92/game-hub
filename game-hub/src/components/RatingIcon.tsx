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

  const getHighestRating = () => {
    const highestRatingScore: number = ratings.reduce(
      (prev, current) => (prev > current.count ? prev : current.count),
      0
    );
    const r = ratings.find((r) => r.count === highestRatingScore);
  };
  return <Image src={mapIcons["exceptional"]} boxSize="30px" />;
};

export default RatingIcon;
