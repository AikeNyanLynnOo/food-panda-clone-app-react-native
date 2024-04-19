import { useMemo } from "react";
import { clsx } from "clsx";
import { styles } from "../utils/styles";
import { Image, Text, View } from "react-native";

export const TitleWithImgCard = ({
  customStyles,
  customClasses,
  title,
  subTitle,
  imgSrc,
  customImgClasses,
}) => {
  const wrapperClasses = useMemo(() => {
    return clsx({
      "p-3": true,
      relative: true,
      "bg-white": true,
      "rounded-lg": true,
      ...customClasses,
    });
  }, [customClasses]);

  const imgClasses = useMemo(() => {
    return clsx({
      absolute: true,
      "bottom-0": true,
      "right-0": true,
      "h-20": true,
      "w-20": true,
      ...customImgClasses,
    });
  }, [customImgClasses]);

  return (
    <View className={wrapperClasses}>
      <View>
        <Text className="text-lg font-bold">{title}</Text>
        <Text className="text-xs w-4/6">{subTitle}</Text>
      </View>
      <Image className={imgClasses} source={imgSrc} resizeMode="contain" />
    </View>
  );
};
