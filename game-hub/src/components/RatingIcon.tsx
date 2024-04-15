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
    let highestRatingScore = 0;
    let highestRatingIndex = 0;

    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i].count > highestRatingScore) {
        highestRatingScore = ratings[i].count;
        highestRatingIndex = i;
      }
    }

    return highestRatingIndex;
  };

  const highestRatingIndex = getHighestRating();
  return (
    <Image src={mapIcons[ratings[highestRatingIndex].title]} boxSize="30px" />
  );
};

export default RatingIcon;
