import { useMemo } from "react";
import { clsx } from "clsx";
import { View, Image, TouchableOpacity } from "react-native";

export const ImgCard = ({
  customStyles,
  customClasses,
  imgUri,
  customImgClasses,
}) => {
  const wrapperClasses = useMemo(() => {
    return clsx({
      "h-32": true,
      "w-24": true,
      "rounded-lg": true,
      "overflow-hidden": true,
      ...customClasses,
    });
  }, [customClasses]);

  const imgClasses = useMemo(() => {
    return clsx({
      "h-full": true,
      "w-full": true,
      "object-cover": true,
      ...customImgClasses,
    });
  }, [customImgClasses]);

  return (
    <TouchableOpacity className={wrapperClasses}>
      <Image
        className={imgClasses}
        source={{
          uri: imgUri,
        }}
        resizeMode="cover"
        defaultSource={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        }}
      />
    </TouchableOpacity>
  );
};
