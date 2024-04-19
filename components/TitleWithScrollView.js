import { ScrollView, Text, View } from "react-native";

export const TitleWithScrollView = ({
  title,
  customClassName,
  ChildEle,
  dataArray,
  customChildEleClasses,
}) => {
  return (
    <View className={customClassName}>
      <Text className="text-lg font-semibold pb-4">{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {dataArray.map((data, index) => (
          <ChildEle
            key={index}
            {...data}
            customClasses={customChildEleClasses}
          />
        ))}
      </ScrollView>
    </View>
  );
};
