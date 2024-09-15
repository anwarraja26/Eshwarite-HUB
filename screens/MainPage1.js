import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput, Pressable, TouchableOpacity, Linking, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MainPage1 = () => {
  const navigation = useNavigation();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle redirection to roadmap.sh
  const handleRoadmapRedirect = () => {
    Linking.openURL("https://roadmap.sh");
  };
  const handleMuskImageRedirect = () => {
    Linking.openURL("https://www.foxbusiness.com/technology/elon-musk-blasts-apples-approach-ai-threatens-ban-devices-openai-integrated-operating-system");
  };

  // Function to fetch suggestions
  const fetchSuggestions = async (query) => {
    // Dummy implementation - replace with actual fetch logic
    const techSuggestions = [
      "JavaScript",
      "Java",
      "React Native",
      "Python",
      "Node.js",
      "Swift",
      "Kotlin",
      "Eshwar College freshathon",
      "eshwar",
      "hackathon",
      "workshop",
      "hackfest",
    ];

    if (query.length > 0) {
      const filteredSuggestions = techSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle input change
  const handleInputChange = (text) => {
    setQuery(text);
    fetchSuggestions(text);
  };

  // Function to handle search action
  const handleSearch = () => {
    if (query) {
      Linking.openURL(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    }
  };

  // Function to render the rectangle image at the top of the content box
  const renderTopImage = () => {
    return (
      <Image
        style={styles.rectangleImage}
        contentFit="cover"
        source={require("../assets/musk.png")}
      />
    );
  };

  // Function to render the MIT image below the text
  const renderBottomImage = () => {
    return (
      <Image
        style={styles.mitImage}
        contentFit="cover"
        source={require("../assets/mit.png")}
      />
    );
  };

  // Function to render the fresh.png image
  const renderFreshImage = () => {
    return (
      <Image
        style={styles.freshImage}
        contentFit="cover"
        source={require("../assets/fresh.png")}
      />
    );
  };

  // Alignment function
  const alignment = ({ left, right, top, width }) => ({
    left,
    right,
    top,
    width,
    position: "absolute",
  });

  // New alignment function for text
  const textAlignment = {
    marginVertical: 15,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorBlack,
    textAlign: "left",
  };

  return (
    <View style={styles.mainPage}>
      <Image
        style={[styles.downBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/down-bar.png")}
      />
      <View style={styles.mainPageChild} />

      <Pressable
        style={[styles.wrapper, styles.searchLayout]}
        onPress={() => navigation.navigate("Favourtie")}
      >

      </Pressable>
      <Pressable
        style={styles.sideBar}
        onPress={() => navigation.navigate("SideBar")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/side-bar.png")}
        />
      </Pressable>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.iconLayout]} />
        <TextInput
          style={[styles.searchInput, styles.textTypo]}
          placeholder="Search"
          placeholderTextColor={Color.colorGray_700}
          value={query}
          onChangeText={handleInputChange}
        />
        <Pressable
          style={styles.vector}
          onPress={handleSearch}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
        </Pressable>
        {suggestions.length > 0 && (
          <View style={styles.suggestionsContainer}>
            <FlatList
              data={suggestions}
              renderItem={({ item }) => (
                <Text style={styles.suggestionItem}>{item}</Text>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        )}
      </View>
      <Pressable
        style={styles.troley}
        onPress={() => navigation.navigate("TrolleyPage")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/troley.png")}
        />
      </Pressable>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollableContent}>
        <View style={styles.contentBox}>
          <Text style={styles.headlineText}>Musk Blasts Apple for OpenAI Integration</Text>
          {renderTopImage()}
          <Text style={styles.descriptionText}>
            Elon Musk on Monday threatened to ban Apple devices at his respective companies if the tech giant integrated OpenAI at the operating system level. {'\n'}
            {'\n'}
            Writing on X, the Tesla CEO called the prospect an "unacceptable security violation." {'\n'}
            {'\n'}
            Should he follow through with the ban, Musk said visitors would have to check their Apple devices "at the door, where they will be stored in a Faraday cage." {'\n'}
            {'\n'}
            The comments came after Apple announced a slew of AI features across its apps and operating platforms and a partnership with OpenAI to bring the ChatGPT technology to its devices.
          </Text>
          <Text style={styles.contentText}>
            {/* Additional content can be added here */}
          </Text>

          {/* Horizontal Line */}
          <View style={styles.horizontalLine} />

          {/* New Text */}
          <Text style={styles.newText}>
            The cement that could turn your house into a giant battery
          </Text>



          {renderBottomImage()}

          <Text style={textAlignment}>
            Researchers at MIT have developed a carbon-cement supercapacitor, made from water, cement, and carbon black, offering a promising alternative to lithium-based batteries for energy storage.
            {'\n'}
            {'\n'}
            These supercapacitors charge quickly, are durable, and could potentially power homes or electric vehicles, contributing to the global transition to renewable energy sources.
            {'\n'}
            {'\n'}
            While still in early stages, this innovation utilizes commonplace materials, hinting at a scalable solution for sustainable energy storage in the built environment.
          </Text>

          {/* Horizontal Line */}
          <View style={styles.horizontalLine} />
          <Text style={styles.newText}>SECE Freshathon 2024</Text>

          {/* Fresh Image */}
          {renderFreshImage()}
          <Text style={styles.descriptionText}>
          Freshathon 2024, organized by the Department of S&H Centre for Innovation, is an exclusive project expo for first-year students, happening on June 12, 2024.{'\n'}
          {'\n'}
          Top three teams in each class will be awarded trophies and certificates, fostering a spirit of competition and innovation among participants.{'\n'}
          {'\n'}
          Cash prizes await the overall top three teams, with the first prize bagging a substantial amount of 10,000, followed by 5,000 for the second prize and 3,000 for the third prize.{'\n'}
          {'\n'}
          This event promises not only recognition but also significant financial incentives, encouraging students to showcase their creativity and talent through innovative projects.{'\n'}
          </Text>
        </View>
      </ScrollView>

      <Pressable
        style={[styles.heart, styles.heartLayout]}
        onPress={() => navigation.navigate("Favourtie")}
      >

      </Pressable>

      <Image
        style={[styles.heartIcon, styles.heartLayout]}
        contentFit="cover"
        source={require("../assets/heart.png")}
      />
      <Pressable
        style={styles.community}
        onPress={() => navigation.navigate("CommunityPade")}
      >
        <Image
          style={[styles.icon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/community.png")}
        />
      </Pressable>
      <TouchableOpacity style={styles.roadmap} onPress={handleRoadmapRedirect}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/roadmap.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settings} onPress={() => navigation.navigate("SettingPage")}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/setting.png")}
        />
      </TouchableOpacity>
      <Pressable
        style={styles.people}
        onPress={() => navigation.navigate("Suggestion")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/people.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  downIconLayout: {
    height: 46,
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  searchLayout: {
    width: 376,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  mainPageItemLayout: {
    width: 450,
    position: "absolute",
    top: 390,
    left: 10,
    right: 150,
  },
  heartLayout: {
    height: 22,
    width: 22,
    position: "absolute",
    top: 900,
  },
  downBarIcon: {
    top: 810,
  },
  mainPageChild: {
    top: 2,
    backgroundColor: Color.colorGray_500,
    height: 84,
    width: 430,
    left: 0,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_8xs,
  },
  wrapper: {
    top: 158,
    height: 224,
    left: 8,
    width: 400,
  },
  sideBar: {
    left: 30,
    top: 40,
    width: 20,
    height: 15,
    position: "absolute",
  },
  searchChild: {
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_600,
    borderStyle: "solid",
    borderColor: Color.colorGray_700,
    borderWidth: 1,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  searchInput: {
    top: "29.82%",
    left: "6.75%",
    color: Color.colorGray_700,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.itimRegular,
    width: "85%",
  },
  icon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "92.5%",
    top: "36.84%",
    right: "3.75%",
    bottom: "36.84%",
    width: "3.75%",
    height: "26.32%",
    position: "absolute",
  },
  suggestionsContainer: {
    position: "absolute",
    top: 57,
    width: "100%",
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorGray_700,
    borderWidth: 1,
    borderRadius: Border.br_xl,
    zIndex: 1,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGray_700,
  },
  search: {
    top: 82,
    height: 57,
    left: 10,
  },
  troley: {
    left: "88.14%",
    top: "4.22%",
    right: "7.43%",
    bottom: "91.63%",
    width: "4.60%",
    height: "2.40%",
    position: "absolute",
  },
  mainPageItem: {
    top: 424,
    left: 10,
    height: 98,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  javaHasBuiltIn: {
    top: 438,
    left: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  similarText: {
    top: 648,
    left: 19,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  mainPageInner: {
    top: 479,
    width: 375,
    height: 150,
    borderRadius: Border.br_8xs,
    left: 9,
    position: "absolute",
  },
  icon5: {
    overflow: "hidden",
  },
  community: {
    left: 357,
    top: 820,
    width: 25,
    height: 25,
    position: "absolute",
  },
  roadmap: {
    left: 185,
    top: 820,
    width: 25,
    height: 25,
    position: "absolute",
  },
  settings: {
    left: 275,
    top: 820,
    width: 24,
    height: 25,
    position: "absolute",
  },
  people: {
    left: 105,
    top: 820,
    width: 25,
    height: 25,
    position: "absolute",
  },
  scrollableContent: {
    top: 150,
    left: 10,
    right: 10,
    bottom: 50,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
    borderColor: Color.colorGray_700,
    borderWidth: 1,
    padding: 10,
  },
  contentBox: {
    height: 1880, // adjust height as needed
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rectangleImage: {
    width: "100%",
    height: 200, // adjust height as needed
    borderRadius: Border.br_xs,
  },
  mitImage: {
    width: "100%",
    height: 200, // adjust height as needed
    borderRadius: Border.br_xs,
    marginTop: 15, // Space between text and image
  },
  freshImage: {
    width: "100%",
    height: 200, // adjust height as needed
    borderRadius: Border.br_xs,
    marginTop: 15, // Space between text and image
  },
  descriptionText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorBlack,
    textAlign: "left",
    marginTop: 15, // Space between image and text
  },
  freshText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorBlack,
    textAlign: "left",
    marginTop: 15, // Space between image and text
  },
  contentText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorBlack,
  },
  headlineText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.josefinSansBold,
    color: Color.colorBlack,
    textAlign: "center",
    marginVertical: 10,
  },
  mainPage: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  newText: {
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
    marginBottom: 10,
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: Color.colorGray_700,
    marginVertical: 15,
  },
  newText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.josefinSansBold,
    color: Color.colorBlack,
    textAlign: "center",
    marginBottom: 15, // Space between text and image
  },
});

export default MainPage1;
