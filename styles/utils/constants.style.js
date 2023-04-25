import { StyleSheet } from "react-native";
import {COLORS, SIZES, FONTS} from "../../constants"

const styleConstants = StyleSheet.create({
      colorPrimary: {
            color:COLORS.primary
      },
      colorSecondary: {
            color:COLORS.secondary
      },
      colorWhite100:{
            color:COLORS.white100
      },
      colorWhite200:{
            color:COLORS.white200
      },
      colorGrey100:{
            color:COLORS.grey100
      },
      colorGrey200:{
            color:COLORS.grey200
      },
      colorGrey300:{
            color:COLORS.grey300
      },
      colorBlue100:{
            color:COLORS.blue100
      },
      xsmText:{
            fontSize:SIZES.xsm
      },
      smText:{
            fontSize:SIZES.sm
      },
      xmdText:{
            fontSize:SIZES.xmd
      },
      mdText:{
            fontSize:SIZES.md
      },
      lgText:{
            fontSize:SIZES.lg
      },
      headerText:{
            fontSize:SIZES.header
      },
      ff400:{
            fontFamily:FONTS.ff400
      },
      ff500:{
            fontFamily:FONTS.ff500
      },
      ff600:{
            fontFamily:FONTS.ff600
      },
      ff700:{
            fontFamily:FONTS.ff700
      },
      ff800:{
            fontFamily:FONTS.ff800
      },
      ff900:{
            fontFamily:FONTS.ff900
      },
      
})

export default styleConstants;