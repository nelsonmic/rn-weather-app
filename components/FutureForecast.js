import { View, Text, Image } from "react-native";
import { SvgCssUri } from "react-native-svg";
import { useEffect } from "react";
import styles from "../styles/components/futureforcast.style";
import styleConstants from "../styles/utils/constants.style";

const {container, textContainer} = styles;
const {xsmText, colorWhite200, colorGrey200, ff500} = styleConstants;

const FutureForecast = ({forecastData={date:"Tomorrow", temp1:16, temp2:11}})=> {

  return(
      <View style={container}>
            <Text style={[xsmText, colorWhite200, ff500]}>{forecastData.date}</Text>
            <SvgCssUri 
                  uri="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/1st%20Set%20-%20Color/partly-cloudy-day.svg"
                  style={{height:62, width:56, marginVertical:20}}
            />
            <View style={textContainer}>
                  <Text style={[xsmText, colorWhite200, ff500]}>16℃</Text>
                  <Text style={[xsmText, colorGrey200, ff500]}>11℃</Text>
            </View>
      </View>
  );
}

export default FutureForecast;