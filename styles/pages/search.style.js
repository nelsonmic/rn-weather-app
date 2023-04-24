import { StyleSheet } from "react-native-web";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor:"#1E213A"
      },
      wrapper:{
            paddingHorizontal: 24,   
      },
      searchContainer: {
            flexDirection: "row",
            gap:10,
            justifyContent:"space-between",
            alignItems:"center"
      },
      textField:{
            borderWidth:1,
            borderColor: COLORS.white200,
            flex:1,
            padding:12
      },
      searchButton:{
            padding:12,
            backgroundColor: COLORS.blue100
      }
    });

    export default styles;