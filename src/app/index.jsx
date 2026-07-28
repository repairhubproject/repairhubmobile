import { useFonts } from 'expo-font'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



const Index = () => {
  const router = useRouter();
  const {height , width} = Dimensions.get("screen")
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fontsLoaded] = useFonts({
   'CustomFont-ExtraBold': require('../../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
   'CustomFont-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
   'CustomFont-SemiBold': require('../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
   'CustomFont-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
   });
   const {width: SCREEN_WIDTH} = Dimensions.get('screen');
   return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <View style={{flex:1, justifyContent: 'flex-end', marginTop:20,}}>
        <Text onPress={() => router.push('login')} 
        style={{color:'black', fontSize:16, fontFamily:'CustomFont-Regular', textAlign:'right', paddingHorizontal:20}}>
          Skip
        </Text>
      </View>

      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        contentContainerStyle={{paddingHorizontal:20, alignItems:'center'}}>
          <View style={{width: SCREEN_WIDTH, alignItems:'center', justifyContent:'center', paddingRight: 20}}>
        <Image source={require('../../assets/images/onboarding-image1.png')}
        style={{height:400, width:'100%', resizeMode:'contain', marginTop:-150}}>
        </Image>
        <Text style={styles.mainText}>
          Find Trusted Repair 
          Experts
        </Text>
        <Text style={styles.subText}>
          Connect with verified technicians near you and get reliable repairswithout the stress.
        </Text>
        </View>
      
        <View style={{width: SCREEN_WIDTH, alignItems:'center', justifyContent:'center', paddingRight: 20}}>
        <Image source={require('../../assets/images/onboarding-image2.png')}
        style={{height:420, width:'100%', resizeMode: 'contain', marginTop:-150}}>
        </Image>
        <Text style={styles.mainText}>
          Track Your Repair Progress
        </Text>
        <Text style={styles.subText}>
          Stay updated from request to completion with real-time repair tracking.
        </Text>
        </View>
      </ScrollView>



        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('login')}
                style={styles.touchableOpacity}>
             <Text style={{color: 'white', fontFamily:'CustomFont-Medium', fontSize: 22, fontWeight: '500' }}>
                Continue
             </Text>
            </TouchableOpacity>
            

        </View>

    </SafeAreaView>
   )
}

export default Index


const styles = StyleSheet.create({
container: {
  flex: 1,
  width: '100%',
  paddingHorizontal: 10,
},
mainText: {
  fontSize: 30,
  fontFamily: 'CustomFont-ExtraBold',
  color: '#000000',
  textAlign: 'center',
  marginTop: -60,
  marginBottom: 10,
},
subText: {
  fontSize: 14,
  fontFamily: 'CustomFont-Regular',
  fontWeight: '400',
  color: '#000000',
  textAlign: 'center',
  marginBottom: 10,
  marginTop: -10,
},
touchableOpacity:{
  backgroundColor: '#2563EB',
  borderRadius: 20,
  height: 62,
  paddingHorizontal: 20,
  marginBottom: 15,
  marginTop: 15,
  justifyContent: 'center',
  alignItems: 'center',
},
})

