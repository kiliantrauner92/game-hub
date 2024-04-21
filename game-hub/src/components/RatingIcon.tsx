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
    5: { alt: "exceptional", src: exceptionalIcon, boxSize: "32px" },
    4: { alt: "recommended", src: recommendedIcon, boxSize: "25px" },
    3: { alt: "meh", src: mehIcon, boxSize: "25px" },
  };

  return <Image marginLeft={2} {...mapIcons[rating]} />;
};

export default RatingIcon;
