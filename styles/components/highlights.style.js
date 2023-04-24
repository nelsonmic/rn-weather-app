import { StyleSheet} from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
      container:{
            alignSelf:"center",
            alignItems:"center",
            width:"100%",
            padding:25,
            backgroundColor:COLORS.primary,
            marginBottom:30
      },
      dataContainer:{
            flexDirection:"row",
            alignItems:"center",
            marginVertical:20
      }
})

export default styles;