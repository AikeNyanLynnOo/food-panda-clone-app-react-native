import { clsx } from "clsx";
import React, { useMemo } from "react";
import { View, Text } from "react-native";

function TitleWithGrid({
  title,
  subTitle,
  TitleIcon,
  gridItems,
  GridItem,
  GridItemChild,
  gridItemClasses,
  customClasses,
}) {
  const wrapperClasses = useMemo(() => {
    return clsx({
      flex: true,
      "flex-col": true,
      ...customClasses,
    });
  }, [customClasses]);
  return (
    <View className={wrapperClasses}>
      <View className="flex flex-row items-center">
        <TitleIcon />
        <Text className="text-xl font-semibold ml-1">{title}</Text>
      </View>
      <Text className="text-xs mt-2">{subTitle}</Text>
      {gridItems && (
        <View className="flex flex-wrap flex-row my-5">
          {gridItems.length > 0 &&
            gridItems.map((item, index) => (
              <View
                key={index}
                className={`w-1/2 py-2 ${
                  index % 2 === 0 ? "pr-2" : "pl-2 pr-0"
                }`}
              >
                <GridItem
                  {...item}
                  customClasses={{
                    ...gridItemClasses,
                  }}
                >
                  <GridItemChild price={item.price} />
                </GridItem>
              </View>
            ))}
        </View>
      )}
    </View>
  );
}

export default TitleWithGrid;
