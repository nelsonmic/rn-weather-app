import { Link, Stack, useRouter } from "expo-router";
import  Svg, { Path, SvgCssUri} from 'react-native-svg'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView} from "react-native";
import styleConstants from "../styles/utils/constants.style";
import styles from "../styles/pages/home.style";
import {COLORS} from "../constants"
import backgroundImage from "../assets/images/cloud.png"
import FutureForecast from "../components/FutureForecast";
import Highlights from "../components/Highlights";

const {bannerContainer, headerContainer, bgImage, banner,tempDataContainer,tempData,tempMetric, dateContainer, weatherContainer, locationContainer, searchButton, searchText, highlightContainer, futureForcastContainer}= styles
const {ff500, ff600, ff700, smText, xmdText, headerText, mdText, lgText, colorWhite200, colorGrey200, colorGrey300, ff100, ff200} = styleConstants

const Home =()=> {
  const router = useRouter()
  return(
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.secondary}}>
          <Stack.Screen options={{headerShown: false}}/>
          <ScrollView endFillColor={COLORS.secondary} contentInsetAdjustmentBehavior="automatic" keyboardDismissMode="on-drag" overScrollMode="never" showsVerticalScrollIndicator={false}
            style={{backgroundColor: COLORS.primary}}
          >
          <View style={headerContainer}>
                <TouchableOpacity style={searchButton} onPress={()=> router.push("search")}>
                  <Text style={[searchText, ff100]}>Search for places</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.locationButton}>
                  <Svg height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
                    <Path d="M0 0h24v24H0z" fill="none"/>
                    <Path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                  </Svg>
                </TouchableOpacity>
          </View>
          
          <View style={bannerContainer}>
            <Image source={backgroundImage} style={bgImage} />
            <View style={banner}>
                <SvgCssUri 
                  uri="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/1st%20Set%20-%20Color/partly-cloudy-day.svg"
                  style={{height:174, width:150, marginVertical:20, alignSelf: "center"}}
                />
              <View style={tempDataContainer}>

                <View style={tempData}>
                  <Text style={[lgText, ff500, colorWhite200, ff200]}>15</Text>
                  <Text style={[colorGrey200, mdText, tempMetric, ff100]}>℃</Text>
                </View>

                <View style={weatherContainer}>
                  <Text style={[xmdText, colorGrey200, ff600, ff100]}>Shower</Text>
                </View>

                <View style={dateContainer}>
                  <Text style={[smText, colorGrey300, ff500, ff100]}>Today</Text>
                  <Text style={[smText, colorGrey300, ff500, ff100]}>.</Text>
                  <Text style={[smText, colorGrey300, ff500, ff100]}>Fri, 5 Jun</Text>
                </View>

                <View style={locationContainer}>
                  <Svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" color="#88869D">
                    <Path d="M0 0h24v24H0z" fill="none"></Path><Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></Path>
                  </Svg>
                  <Text style={[smText, colorGrey300, ff500, ff100]}>Helsinki</Text>
                </View>

              </View>
            </View>
          </View>

          <View style={{ backgroundColor:COLORS.secondary, padding:24}}>
            <View style={futureForcastContainer}>
                  <FutureForecast />
                  <><FutureForecast forecastData={{ date: "Sun, 7 jun", temp1: 16, temp2: 11 }} /><FutureForecast forecastData={{ date: "Mon, 8 jun", temp1: 16, temp2: 11 }} /><FutureForecast forecastData={{ date: "Tue, 9 jun", temp1: 16, temp2: 11 }} /><FutureForecast forecastData={{ date: "Wed, 10 jun", temp1: 16, temp2: 11 }} /><FutureForecast forecastData={{ date: "Thur, 11 jun", temp1: 16, temp2: 11 }} /></>
            </View>

            <View style={highlightContainer}>
                  <Text style={[colorWhite200, ff200, ff700, headerText, {marginVertical:40}]}>Today's Highlights</Text>
                  <View>
                        <Highlights type={"Wind Status"} highlightData={{value:7, unit:"mph"}} />
                        <Highlights type={"Humidity"} highlightData={{value:84, unit:"%"}}/>
                        <Highlights type={"Visibility"} highlightData={{value:"6,4", unit:"miles"}}/>
                        <Highlights type={"Air Pressure"} highlightData={{value:998, unit:"mb"}}/>
                  </View>
            </View>
          </View>
          </ScrollView>
    
        </SafeAreaView>
      );
}

export default Home;