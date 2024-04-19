import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { neutral, primary, primaryGrey } from "../utils/colors";
import { TitleWithImgCard } from "../components/TitleWithImgCard";
import { styles } from "../utils/styles";
import { ImgCard } from "../components/ImgCard";
import { useMemo } from "react";
import { DEAL_IMGS } from "../utils/images";
import { withExpoSnack } from "nativewind";
import MuiIcon from "react-native-vector-icons/MaterialIcons";
import MuiComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { TitleWithScrollView } from "../components/TitleWithScrollView";
import { CuisineCard } from "../components/CuisineCard";
import client, { urlFor } from "../sanity";

function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // for header
    });
  }, []);

  const [dailyDeals, setDailyDeals] = useState([]);
  const [landingCards, setLandingCards] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "dailyDeal"]')
      .then((deals) => {
        setDailyDeals(
          deals.map((deal) => ({ ...deal, imgUri: urlFor(deal.image).url() }))
        );
      })
      .catch((e) => {
        console.log("Error>>", e);
      });
    client
      .fetch('*[_type == "landingCard"]')
      .then((cards) => {
        
        setLandingCards(
          cards.map((card) => ({ ...card, imgUri: urlFor(card.image).url() }))
        );
      })
      .catch((e) => {
        console.log("Error>>", e);
      });
    client
      .fetch('*[_type == "cuisine"]')
      .then((cuisines) => {
        setCuisines(
          cuisines.map((cuisine, index) => ({
            ...cuisine,
            index: index,
            imgUri: urlFor(cuisine.image).url(),
          }))
        );
      })
      .catch((e) => {
        console.log("Error>>", e);
      });
  }, []);

  return (
    <View>
      <ScrollView
        alwaysBounceVertical={false}
        bounces={true}
        stickyHeaderIndices={[0]}
      >
        {/* Start Nav Bar */}
        <View
          className="flex flex-row pt-10 pb-3 px-5 justify-between h-fit"
          style={[styles.bgPrimary]}
        >
          <View className="flex flex-row items-center">
            <TouchableOpacity>
              <MuiIcon name="menu" size={25} color={neutral} />
            </TouchableOpacity>

            <View className="flex flex-col ml-4">
              <Text className="text-lg text-white font-semibold">
                17 Thiri Street
              </Text>
              <Text className="text-sm text-white">Yangon</Text>
            </View>
          </View>
          <View className="flex flex-row items-center gap-x-4">
            <TouchableOpacity>
              <MuiComIcon name="heart-outline" size={23} color={neutral} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MuiComIcon name="shopping-outline" size={23} color={neutral} />
            </TouchableOpacity>
          </View>
        </View>
        {/* End Nav Bar */}

        {/* Start Search Bar */}

        <View className="px-5 py-3" style={[styles.bgPrimary]}>
          <TouchableOpacity className="rounded-full bg-white h-10 flex flex-row px-3 items-center">
            <MuiComIcon name="magnify" size={24} color={primaryGrey} />
            <Text className="ml-3">Search for shops & restaurants</Text>
          </TouchableOpacity>
        </View>

        {/* End Search Bar */}

        {/* Start Cards */}
        <View className="p-4">
          <TitleWithImgCard
            title={landingCards.length > 0 && landingCards[0].title}
            subTitle={landingCards.length > 0 && landingCards[0].subTitle}
            customClasses={{
              "h-36": true,
            }}
            customImgClasses={{
              "h-5/6": true,
              "w-3/6": true,
            }}
            imgSrc={{
              uri: (landingCards.length > 0 && landingCards[0].imgUri) || null,
            }}
          />
          <View className="flex flex-row justify-between mt-2 h-40">
            <TitleWithImgCard
              title={landingCards.length > 0 && landingCards[1].title}
              subTitle={landingCards.length > 0 && landingCards[1].subTitle}
              customClasses={{
                "h-full": true,
                "flex-1": true,
                "mr-2": true,
              }}
              customImgClasses={{
                "h-5/6": true,
                "w-3/6": true,
                "-bottom-2": true,
              }}
              imgSrc={{
                uri:
                  (landingCards.length > 0 && landingCards[1].imgUri) || null,
              }}
            />
            <View className="flex flex-col flex-1 justify-between h-full">
              <TitleWithImgCard
                title={landingCards.length > 0 && landingCards[2].title}
                subTitle={landingCards.length > 0 && landingCards[2].subTitle}
                customClasses={{
                  "h-40": true,
                  "flex-1": true,
                  "mb-2": true,
                }}
                customImgClasses={{
                  "h-5/6": true,
                  "w-3/6": true,
                  "-right-3": true,
                }}
                imgSrc={{
                  uri:
                    (landingCards.length > 0 && landingCards[2].imgUri) || null,
                }}
              />
              <TitleWithImgCard
                title={landingCards.length > 0 && landingCards[3].title}
                subTitle={landingCards.length > 0 && landingCards[3].subTitle}
                customClasses={{
                  "h-40": true,
                  "flex-1": true,
                }}
                customImgClasses={{
                  "h-5/6": true,
                  "w-3/6": true,
                  "-right-3": true,
                }}
                imgSrc={{
                  uri:
                    (landingCards.length > 0 && landingCards[3].imgUri) || null,
                }}
              />
            </View>
          </View>
        </View>
        {/* End Cards */}

        {/* Start daily deals */}

        <TitleWithScrollView
          title="Your daily deals"
          ChildEle={ImgCard}
          customChildEleClasses={{
            "mr-3": true,
            "h-44": true,
            "w-32": true,
          }}
          dataArray={dailyDeals}
          customClassName="py-5 bg-white p-4"
        />

        {/* End daily deals */}

        {/* Start cuisines */}

        <TitleWithScrollView
          title="Cuisines"
          ChildEle={({ imgUri, name, index }) => (
            <View className="flex flex-col justify-between">
              <CuisineCard
                customClassNames="mr-3 w-fit flex flex-col text-center mb-3"
                imgSrc={{
                  uri: imgUri,
                }}
                cuisineName={name}
              />
              <CuisineCard
                customClassNames="mr-3 w-fit  flex flex-col text-center"
                imgSrc={{
                  uri: cuisines[index + 6].imgUri,
                }}
                cuisineName={cuisines[index + 6].name}
              />
            </View>
          )}
          dataArray={cuisines.slice(0, 6)}
          customClassName="py-5 bg-white p-4"
        />
        {/* End cuisines */}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
