import { View, SafeAreaView, TextInput, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import styles from "../styles/pages/search.style";
import styleConstants from "../styles/utils/constants.style";
import { color } from "react-native-reanimated";

const { container, searchContainer, wrapper, textField, searchButton } = styles;
const {colorWhite200, ff600, ff500, xsmText} = styleConstants;

export default function Details() {
  return (
      <SafeAreaView style={ container }>
            <View style={ wrapper }>
                  <View style={ searchContainer }>
                        <View style={}>
                              <TextInput style={[colorWhite200, ff500, xsmText, textField]} placeholder="search location"/>
                        </View>
                        <TouchableOpacity>
                              <Text style={[colorWhite200, ff600, xsmText, searchButton]}>Search</Text>
                        </TouchableOpacity>
                  </View>
            </View>
      </SafeAreaView>
  );
}
