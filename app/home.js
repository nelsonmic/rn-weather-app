import { Link, Stack, useRouter } from "expo-router";
import  Svg, { Path} from 'react-native-svg'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView} from "react-native";
import styleConstants from "../styles/utils/constants.style";
import styles from "../styles/pages/home.style";
import backgroundImage from "../assets/images/cloud.png"
import FutureForecast from "../components/FutureForecast";

const {bannerContainer, headerContainer, bgImage, banner,tempDataContainer,tempData,tempMetric, dateContainer, weatherContainer, locationContainer, searchButton, searchText}= styles
const {fw500, fw600, smText, xmdText, mdText, lgText, colorWhite200, colorGrey200, colorGrey300, ff100} = styleConstants

const Home =()=> {
  const router = useRouter()
  return(
        <SafeAreaView style={{flex:1, backgroundColor:"#1E213A"}}>
          <Stack.Screen options={{headerShown: false}}/>
          <ScrollView endFillColor={"#100E1D"} contentInsetAdjustmentBehavior="automatic" keyboardDismissMode="on-drag" overScrollMode="never" showsVerticalScrollIndicator={false}
            style={{backgroundColor: "#1E213A"}}
          >
          <View style={headerContainer}>
                <TouchableOpacity style={searchButton} onPress={()=> router.push("/search")}>
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
                <Image 
                  source={{uri:"https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/1st%20Set%20-%20Color/partly-cloudy-day.svg"}} 
                  style={{height:174, width:150, backgroundColor:"blue", marginVertical:20}}
                />
              <View style={tempDataContainer}>

                <View style={tempData}>
                  <Text style={[lgText, fw500, colorWhite200, ff100]}>15</Text>
                  <Text style={[colorGrey200, mdText, tempMetric, ff100]}>℃</Text>
                </View>

                <View style={weatherContainer}>
                  <Text style={[xmdText, colorGrey200, fw600, ff100]}>Shower</Text>
                </View>

                <View style={dateContainer}>
                  <Text style={[smText, colorGrey300, fw500, ff100]}>Today</Text>
                  <Text style={[smText, colorGrey300, fw500, ff100]}>.</Text>
                  <Text style={[smText, colorGrey300, fw500, ff100]}>Fri, 5 Jun</Text>
                </View>

                <View style={locationContainer}>
                  <Svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" color="#88869D">
                    <Path d="M0 0h24v24H0z" fill="none"></Path><Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></Path>
                  </Svg>
                  <Text style={[smText, colorGrey300, fw500, ff100]}>Helsinki</Text>
                </View>

              </View>
            </View>
          </View>

          <View style={{dispaly:"grid", flex:1, flexWrap:"wrap", flexDirection:"row", justifyContent:"space-between", height:"100%", backgroundColor:"#100E1D", padding:24}}>
            <FutureForecast foreCastData={"sds"}/>
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
            <FutureForecast />
          </View>
          </ScrollView>
    
        </SafeAreaView>
  );
}

export default Home;