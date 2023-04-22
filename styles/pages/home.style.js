import {
  StyleSheet,
  Dimensions
} from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 24,
    paddingHorizontal: 24
  },
  searchButton: {
    backgroundColor: "#6E707A",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
  },
  locationButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: "#6E707A",
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
  bannerContainer: {
    flex: 1,
    minHeight: Dimensions.get('window').height - 130,
    padding: 24,
    paddingBottom:80,
    position: "relative",
    backgroundColor: "#1E213A",
  },
  bgImage: {
    flex: 1,
    position: "absolute",
    top: 0,
    opacity: 0.065,
    alignSelf: "center",
  },
  banner: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop:40,
  },
  tempData: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop:40
  },
  tempMetric: {
    marginBottom: 25,
  },
  weatherContainer: {
    marginVertical: 5,
    alignItems: "center"
  },
  dateContainer: {
    marginVertical: 35,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  }
});

export default styles;