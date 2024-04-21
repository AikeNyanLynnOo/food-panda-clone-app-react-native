import { useMemo } from "react";
import { clsx } from "clsx";
import { View, Image, TouchableOpacity, Text } from "react-native";
import MuiIcon from "react-native-vector-icons/MaterialIcons";
import { primaryGrey } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

export const RestaurantCard = ({
  customStyles,
  customClasses,
  _id,
  imgUri,
  logoUri,
  name,
  short_description,
  rating,
  address,
  promotion,
  delivery_fee,
  cuisines,
  customImgClasses,
}) => {
  const navigator = useNavigation();
  const wrapperClasses = useMemo(() => {
    return clsx({
      "h-auto": true,
      "w-56": true,
      "mr-3": true,
      "overflow-hidden": true,
      ...customClasses,
    });
  }, [customClasses]);

  const imgClasses = useMemo(() => {
    return clsx({
      "h-32": true,
      "w-full": true,
      "rounded-lg": true,
      //   "object-cover": true,
      ...customImgClasses,
    });
  }, [customImgClasses]);

  const handlePress = () => {
    navigator.navigate("Restaurant", {
      _id,
      imgUri,
      logoUri,
      name,
      short_description,
      rating,
      address,
      promotion,
      delivery_fee,
      cuisines,
    });
  };

  return (
    <TouchableOpacity className={wrapperClasses} onPress={handlePress}>
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
      <View className="flex flex-row justify-between py-1">
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="text-sm font-semibold flex-1 pr-3"
        >
          {name}
        </Text>
        <View className="flex flex-row items-center gap-x-1">
          <MuiIcon name="star" size={13} color="#FFC700" />
          <Text className="text-xs font-semibold">{rating}</Text>
        </View>
      </View>
      <Text className="text-xs font-thin">{short_description}</Text>
      <View className="flex flex-row items-center gap-x-1 mt-1">
        <MuiIcon name="directions-bike" size={13} color={primaryGrey} />
        <Text className="text-xs">$-{delivery_fee}</Text>
      </View>
    </TouchableOpacity>
  );
};
