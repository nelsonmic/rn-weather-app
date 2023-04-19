import { Link, Stack, useRouter } from "expo-router";
import  Svg, { Path} from 'react-native-svg'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import styles from "../styles/pages/home.style";
import backgroundImage from "../assets/images/cloud.png"

export default function Home() {
  const router = useRouter()
  return(
        <SafeAreaView style={{flex:1, backgroundColor:"#1E213A"}}>
          <Stack.Screen options={{headerShown: false}}/>
          <View style={styles.container}>

            <Image source={backgroundImage} style={styles.bgImage} />

            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.searchButton} onPress={()=> router.push("/search")}>
                  <Text style={styles.searchText}>Search for places</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.locationButton}>
                  <Svg height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
                    <Path d="M0 0h24v24H0z" fill="none"/>
                    <Path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                  </Svg>
                </TouchableOpacity>
            </View>

            <View style={styles.banner}>
              
              <View>
                {/* <Image source="" /> */}
              </View>

              <View style={styles.tempDataContainer}>

                <View style={styles.tempData}>
                  <Text style={styles.tempDegree}>15</Text>
                  <Text style={styles.tempMetric}>℃</Text>
                </View>

                <View>
                  <Text style={styles.weather}>Shower</Text>
                </View>

                <View>
                  <Text>Today</Text>
                  <Text>.</Text>
                  <Text>Fri, 5 Jun</Text>
                </View>

                <View>
                  <Svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" color="#000">
                    <Path d="M0 0h24v24H0z" fill="none"></Path><Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></Path>
                  </Svg>
                  <Text style={styles.location}>Helsinki</Text>
                </View>

              </View>

            </View>

          </View>
        </SafeAreaView>
  );
}