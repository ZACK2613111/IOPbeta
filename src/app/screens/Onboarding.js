import React, {useRef, useState, useEffect} from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import data from "../../data/OnboardingData";
import COLORS from "../../data/colors";

const Onboarding = () => {
  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);

  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    setViewableItems(viewableItems);
  });

  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);

  const handleNext = () => {
    if (currentPage == data.length - 1) return;

    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage + 1,
    });
  };

  const handleBack = () => {
    if (currentPage == 0) return;
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage - 1,
    });
  };

  const handleSkipToEnd = () => {
    flatlistRef.current.scrollToIndex({
      animate: true,
      index: data.length - 1,
    });
  };

  const renderTopSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10 * 2,
          }}
        >
          {/* Back button */}
          <TouchableOpacity
            onPress={handleBack}
            style={{
              padding: 10,
            }}
          >
            {/* Back icon */}
            {/* Hide back button on 1st screen */}
            <AntDesignIcons
              name="left"
              style={{
                fontSize: 25,
                color: COLORS.black,
                opacity: currentPage == 0 ? 0 : 1,
              }}
            />
          </TouchableOpacity>

          {/* Skip button */}
          {/* Hide Skip button on last screen */}
          <TouchableOpacity onPress={handleSkipToEnd}>
            <Text
              style={{
                fontSize: 18,
                color: COLORS.black,
                opacity: currentPage == data.length - 1 ? 0 : 1,
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const renderBottomSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10 * 2,
            paddingVertical: 10 * 2,
          }}
        >
          {/* Pagination */}
          <View style={{flexDirection: "row", alignItems: "center"}}>
            {
              // No. of dots
              [...Array(data.length)].map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor:
                      index == currentPage ? COLORS.GRAY : COLORS.GRAY + "20",
                    marginRight: 8,
                  }}
                />
              ))
            }
          </View>

          {/* Next or GetStarted button */}
          {/* Show or Hide Next button & GetStarted button by screen */}
          {currentPage != data.length - 1 ? (
            <TouchableOpacity
              onPress={handleNext}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: COLORS.GREEN,
              }}
              activeOpacity={0.8}
            >
              <AntDesignIcons
                name="right"
                style={{fontSize: 18, color: "white", opacity: 0.3}}
              />
              <AntDesignIcons
                name="right"
                style={{fontSize: 25, color: "white", marginLeft: -15}}
              />
            </TouchableOpacity>
          ) : (
            // Get Started Button
            <TouchableOpacity
              style={{
                paddingHorizontal: 10 * 2,
                height: 60,
                borderRadius: 30,
                backgroundColor: COLORS.GREEN,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  marginLeft: 10,
                }}
              >
                Get Started
              </Text>
              <AntDesignIcons
                name="right"
                style={{
                  fontSize: 18,
                  color: "white",
                  opacity: 0.3,
                  marginLeft: 10,
                }}
              />
              <AntDesignIcons
                name="right"
                style={{fontSize: 25, color: "white", marginLeft: -15}}
              />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  };

  const renderFlatlistItem = ({item}) => {
    return (
      <View
        style={{
          width: SIZES.width,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginVertical: 10 * 2,
          }}
        >
          <ImageBackground
            source={item.img}
            style={{width: 335, height: 335, resizeMode: "contains"}}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 10 * 4,
            marginVertical: 10 * 4,
          }}
        >
          <Text style={{fontSize: 30, textAlign: "center", fontWeight: "bold"}}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 18,
              opacity: 0.4,
              textAlign: "center",
              marginTop: 15,
              lineHeight: 28,
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.GRAY} />

      {/* TOP SECTION - Back & Skip button */}
      {renderTopSection()}

      {/* FLATLIST with pages */}
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={renderFlatlistItem}
        ref={flatlistRef}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
        initialNumToRender={1}
        extraData={width}
      />

      {/* BOTTOM SECTION - pagination & next or GetStarted button */}
      {renderBottomSection()}
    </View>
  );
};

export default Onboarding;
