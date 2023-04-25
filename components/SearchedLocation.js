import { View, Text, Pressable } from 'react-native';
import { useState } from 'react'
import { Svg, Path } from 'react-native-svg'
import styleConstants from '../styles/utils/constants.style';
import styles from '../styles/components/searchedlocation.style';

const {xsmText, ff500, colorWhite200, colorGrey400} = styleConstants
const { container } = styles

const SearchedLocation =({ location="London" })=>{

      const [pressed, setPressed] = useState(false)
      return(
            <Pressable onPressIn={()=> setPressed(true)} onPressOut={()=> setPressed(false)} style={[container, { borderWidth: pressed? 1:0}]}>
                  <Text style={[xsmText, ff500, colorWhite200]}>{location}</Text>
                  <Text style={[colorGrey400, xsmText, ff500]}>{pressed? ">" : ""}</Text>
            </Pressable>
      )
}

export default SearchedLocation;