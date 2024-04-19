import { useMemo } from "react";
import { clsx } from "clsx";
import { View, Image, Text, TouchableOpacity } from "react-native";

export const CuisineCard = ({
  customStyles,
  customClassNames,
  imgSrc,
  customImgClasses,
  cuisineName,
}) => {
  return (
    <TouchableOpacity className={customClassNames}>
      <Image
        className="rounded-lg h-20 w-20 mx-auto"
        source={imgSrc}
        resizeMode="cover"
      />
      <Text className="mx-auto text-xs font-semibold mt-2">{cuisineName}</Text>
    </TouchableOpacity>
  );
};
