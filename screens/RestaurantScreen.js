import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import client, { urlFor } from "../sanity";
import { StatusBar } from "expo-status-bar";
import MuiComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { primary } from "../utils/colors";
import { styles } from "../utils/styles";
import TitleWithGrid from "../components/TitleWithGrid";
import { ImgCard } from "../components/ImgCard";

function RestaurantScreen() {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState(0);
  const {
    params: {
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
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // for header
    });
  }, []);

  //   useEffect(() => {
  //     client
  //       .fetch('*[_type == "restaurant"]')
  //       .then((deals) => {
  //         setDailyDeals(
  //           deals.map((deal) => ({ ...deal, imgUri: urlFor(deal.image).url() }))
  //         );
  //       })
  //       .catch((e) => {
  //         console.log("Error>>", e);
  //       });
  //   }, []);

  const handleGoback = () => {
    navigation.goBack();
  };
  const changeTab = (updateIndex) => {
    setActiveTab(updateIndex);
  };

  return (
    <View className="bg-white">
      <StatusBar style="dark" />
      <SafeAreaView>
        <ScrollView stickyHeaderIndices={[0]}>
          <View className="flex px-4 pt-14 flex-row justify-between items-center bg-white">
            <TouchableOpacity onPress={handleGoback}>
              <MuiComIcon size={23} color={primary} name="arrow-left" />
            </TouchableOpacity>
            <View className="flex flex-row items-center gap-x-4">
              <TouchableOpacity>
                <MuiComIcon name="heart-outline" size={23} color={primary} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MuiComIcon
                  name="share-variant-outline"
                  size={23}
                  color={primary}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MuiComIcon name="magnify" size={24} color={primary} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="px-4 my-6 flex flex-row items-center">
            <Image
              source={{
                uri: logoUri,
              }}
              className="h-14 w-14 rounded-md object-cover"
            />
            <Text className="text-lg font-semibold ml-3">{name}</Text>
          </View>
          <View className="px-4 flex flex-row justify-between w-full mb-3">
            <Text className="text-xs">
              {0.5}km away | MMK {delivery_fee} Delivery
            </Text>
            <TouchableOpacity>
              <Text
                className="text-xs font-semibold"
                style={styles.textPrimary}
              >
                More info
              </Text>
            </TouchableOpacity>
          </View>
          <View className="px-4 flex flex-row justify-between items-center w-full mb-3">
            <View className="flex flex-row items-center">
              <MuiComIcon color={primary} size={23} name="star-outline" />
              <Text className="font-semibold ml-2">{rating}</Text>
              <Text className="text-xs ml-2">{500} ratings</Text>
            </View>
            <TouchableOpacity>
              <Text
                className="text-xs font-semibold"
                style={styles.textPrimary}
              >
                See reviews
              </Text>
            </TouchableOpacity>
          </View>
          <View className="px-4 flex flex-row justify-between items-center w-full mb-3">
            <View className="flex flex-row items-center">
              <MuiComIcon
                color={primary}
                size={21}
                name="clock-time-five-outline"
              />
              <Text className="font-semibold ml-2">
                Delivery {15}-{30} min
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                className="text-xs font-semibold"
                style={styles.textPrimary}
              >
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            className="px-4 my-5 border-b border-slate-300"
            showsHorizontalScrollIndicator={false}
          >
            {["Popular", "Main Menu"].map((tab, index) => (
              <TouchableOpacity key={index} onPress={() => changeTab(index)}>
                <Text
                  className={`py-3 mr-3 capitalize font-semibold ${
                    activeTab === index
                      ? "border-b-2 border-pink-500"
                      : "border-b-0"
                  }`}
                  style={activeTab === index && styles.textPrimary}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TitleWithGrid
            customClasses={{
              "px-4": true,
            }}
            title="Popular"
            TitleIcon={() => (
              <MuiComIcon name="fire" size={23} color="#FFC700" />
            )}
            subTitle="Most ordered right now"
            gridItems={
              (cuisines &&
                cuisines.length > 0 &&
                cuisines.map((cuisine) => ({
                  ...cuisine,
                  imgUri: urlFor(cuisine.image).url(),
                }))) ||
              []
            }
            GridItem={ImgCard}
            gridItemClasses={{
              "w-full": true,
              "h-44": true,
              ralative: true,
              shadow: true,
            }}
            GridItemChild={({ price }) => (
              <Text className="absolute bottom-2 right-2 z-10 border border-slate-300 rounded-full px-2 py-1 bg-white text-xs font-semibold text-slate-600">
                MMK {price}
              </Text>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default RestaurantScreen;
