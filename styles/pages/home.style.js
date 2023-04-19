import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding:24,
        position:"relative"
      },
      bgImage:{
        flex: 1,
        position: "absolute",
        opacity: 0.065,
        alignSelf:"center",
        marginTop:50
      },
      headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      },
      searchButton:{
        backgroundColor:"#6E707A",
        textAlign: "center",
        paddingVertical:12,
        paddingHorizontal:20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
      },
      searchText:{
        color:"#fff",
        fontSize:16,
        fontWeight:500,
      },
      locationButton:{
        paddingVertical:8,
        paddingHorizontal:8,
        backgroundColor:"#6E707A",
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
      },
      banner:{
        borderWidth:1,
        flex:1,
        alignItems:"center",
        justifyContent:"center",

      }
    });

    export default styles;