import Entypo from '@expo/vector-icons/Entypo'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useFonts } from 'expo-font'
import { useRouter } from 'expo-router'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Welcome = () => {
  const router = useRouter();
  const {height , width} = Dimensions.get("screen")
  const [fontsLoaded] = useFonts({
     'CustomFont-ExtraBold': require('../../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
     'CustomFont-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
     'CustomFont-SemiBold': require('../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
     'CustomFont-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
     });
     return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
          <View style={{flexDirection:'row', marginTop:130, justifyContent: 'space-evenly', gap:5, marginBottom:15}}>
            <Image source={require('../../assets/images/Frame 312.png')}
            style={{height:67,  width: 68}}>
            </Image>
            <Text style={{
                color:'black',
                marginTop:20,
                fontSize: 19,
                fontFamily:'CustomFont-SemiBold',
                fontWeight:'600'}}>
                RepairHub</Text>
          </View>

          <Text
          style={{
                color:'black',
                marginTop:25,
                marginBottom:-10,
                fontSize: 20,
                fontFamily:'CustomFont-SemiBold',
                fontWeight:'600',
                textAlign:'center'}}
                >Welcome</Text>
          <Text style={[styles.subText, {marginBottom: 30}]}>
            Choose how you want to continue
          </Text>

          <TouchableOpacity onPress={() => router.push('technician')} 
          activeOpacity={0.7} style={styles.card}>
            <View style={styles.iconBox}>
                <MaterialCommunityIcons name="account-hard-hat-outline" size={26} color="#007AFF" />
            </View>
            <View style={styles.textBox}>
                <Text style={styles.title}>Continue as Technician</Text>
                <Text style={styles.description}>Offer your repair services and get more jobs.</Text>
            </View>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace('login')} 
          activeOpacity={0.7} style={[styles.card, {marginBottom: 30}]}>
            <View style={styles.iconBox}>
                <MaterialCommunityIcons name="account-group-outline" size={26} color="#007AFF" />
            </View>
            <View style={styles.textBox}>
                <Text style={styles.title}>Continue as Customer</Text>
                <Text style={styles.description}>Book trusted repair services for your devices. </Text>
            </View>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.subText}>Don't know which to choose?</Text>
          <Text style={{
            fontSize: 16,
            fontFamily: 'CustomFont-SemiBold',
            fontWeight: '600',
            color: '#2563EB',
            textAlign: 'center',
            marginTop: 0,
          }}>learn more about roles</Text>
        </SafeAreaView>
     )

}

 export default Welcome


 const styles = StyleSheet.create({
 subText: {
   fontSize: 16,
   fontFamily: 'CustomFont-SemiBold',
   fontWeight: '600',
   color: '#8E8E96',
   textAlign: 'center',
   marginTop: 12,
 },
 card: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#F8FAFC',
   borderRadius: 12,
   padding: 16,
   marginBottom: 18,
 },
 cardSelected: {backgroundColor: '#E0F2FE',},
 iconBox:{
    width:40,
    height:40,
    borderRadius:8,
    backgroundColor:'#E2E8F0',
    justifyContent:'center',
    alignItems:'center',
    marginRight:12,
 },
 textBox:{flex:1,},
 title:{
    fontSize:16,
    fontWeight:'600',
    fontFamily:'CustomFont-SemiBold',
    color:'black',
    marginBottom:2,
 },
 description:{
    fontSize:14,
    fontWeight:'600',
    fontFamily:'CustomFont-SemiBold',
    color:'#64748B',
    marginBottom:2,
 }
})