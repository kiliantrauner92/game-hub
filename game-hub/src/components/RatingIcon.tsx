import React from "react";

import { Image, ImageProps } from "@chakra-ui/react";
import exceptionalIcon from "../assets/bulls-eye.webp";
import mehIcon from "../assets/meh.webp";
import recommendedIcon from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const RatingIcon = ({ rating }: Props) => {
  if (rating < 3) return null;
  const mapIcons: { [key: number]: ImageProps } = {
    5: { alt: "exceptional", src: exceptionalIcon },
    4: { alt: "recommended", src: recommendedIcon },
    3: { alt: "meh", src: mehIcon },
  };

  return <Image {...mapIcons[rating]} boxSize="30px" />;
};

export default RatingIcon;
