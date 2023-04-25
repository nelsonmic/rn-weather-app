import { View, Text } from "react-native";
import styleConstants from "../styles/utils/constants.style";
import styles from "../styles/components/highlights.style";

const {xsmText,xmdText,mdText, ff500,ff700, colorWhite200, colorGrey200} = styleConstants
const {container, dataContainer} = styles
const Highlights = ({ type="Wind status", highlightData={value:7, unit:"mph"} })=> {
  return(
      <View style={[container]}>
            <Text style={[xsmText, ff500, colorWhite200]}>{type}</Text>
            <View style={[dataContainer]}>
                  <Text style={[mdText, ff700, colorWhite200]}>{highlightData.value}</Text>
                  <Text style={[xmdText, ff500, colorGrey200]}>{highlightData.unit}</Text>
            </View>
      </View>
  );
}

export default Highlights;