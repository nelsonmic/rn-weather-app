import { StyleSheet} from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
      container:{
            alignSelf:"flex-start",
            width:"48%",
            marginBottom:15,
            padding:30,
            alignItems:"center",
            backgroundColor:COLORS.primary
      },
      textContainer:{
            flexDirection:"row",
            gap:15,
            justifyContent:"space-between",
      }
})

export default styles;