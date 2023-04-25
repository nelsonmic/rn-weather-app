import { View, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import { Svg, Path } from "react-native-svg";
import styles from "../styles/pages/search.style";
import styleConstants from "../styles/utils/constants.style";
import { COLORS } from "../constants";
import SearchedLocation from "../components/SearchedLocation";

const { container, searchContainer, wrapper, textFieldContainer, textField, searchButton, searchedLocationContainer } = styles;
const {colorWhite200, ff600, ff500, xsmText} = styleConstants;

const Search= ()=> {
  return (
      <SafeAreaView style={ container }>
            <View style={ wrapper }>
                  <View style={ searchContainer }>
                        <View style={textFieldContainer}>
                              <Svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color={COLORS.grey400}>
                                    <Path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></Path>
                              </Svg>
                              <TextInput 
                                    style={[colorWhite200, ff500, xsmText, textField]} 
                                    placeholder="search location" placeholderTextColor={COLORS.grey400}
                                    autoFocus={true}
                                    cursorColor={COLORS.white200}
                                    inputMode="search"
                                    returnKeyType="search"
                              />
                        </View>
                        <TouchableOpacity>
                              <Text style={[colorWhite200, ff600, xsmText, searchButton]}>Search</Text>
                        </TouchableOpacity>
                  </View>

                  <ScrollView style={ searchedLocationContainer }>
                        <SearchedLocation />
                  </ScrollView>
                  
            </View>
      </SafeAreaView>
  );
}

export default Search;
