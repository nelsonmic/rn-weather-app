import { StyleSheet } from "react-native-web";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
      wrapper:{
            paddingHorizontal: 24, 
            gap:40  
      },
      container:{
            flex: 1,
            backgroundColor:"#1E213A"
      },
      searchContainer:{
            flexDirection: "row",
            gap:10,
            justifyContent:"space-between",
            alignItems:"center"
      },
      textFieldContainer:{
            flexDirection:"row",
            flex:1,
            alignItems:"center",
            gap:10,
            borderWidth:1,
            borderColor: COLORS.white200,
            padding:12
      },
      textField:{
            flex:1,
      },
      searchButton:{
            padding:14,
            backgroundColor: COLORS.blue100
      },
      searchedLocationContainer:{

      }
    });

    export default styles;