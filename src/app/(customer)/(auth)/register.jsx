
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [password, setPassword] = useState('')
    const router = useRouter();
    const {height , width} = Dimensions.get("screen")
    const [fontsLoaded] = useFonts({
    'CustomFont-ExtraBold': require('../../../../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    'CustomFont-Regular': require('../../../../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'CustomFont-SemiBold': require('../../../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'CustomFont-Medium': require('../../../../assets/fonts/Poppins/Poppins-Medium.ttf'),
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image source={require('../../../../assets/images/Repair Icon.png')}
         style={{height: 344, width: 253, marginTop: -80, marginBottom: -75, alignSelf: 'center'}}
        />
        <Text style={styles.mainText}>Create Account</Text>
        <Text style={styles.subText}>Join RepairHub and connect with
        trusted repair experts.</Text>

        <Text style={styles.textInputLabel}>
          Full Name
        </Text>
        <TextInput style={styles.textInput}
          placeholder='Enter Your Full Name'
          placeholderTextColor={'#0B0C14'}
        />

        <Text style={styles.textInputLabel}>
          Email Address
        </Text>
        <TextInput style={styles.textInput}
          placeholder='Enter Your Email Address'
          placeholderTextColor={'#0B0C14'}
        />

        <Text style={styles.textInputLabel}>
          Phone Number
        </Text>
        <TextInput style={styles.textInput}
          placeholder='Enter Your Phone Number'
          placeholderTextColor={'#0B0C14'}
        />
        <Text style={styles.textInputLabel}>
          Password
        </Text>
        <View style={styles.passwordContainer}>
         <TextInput
           style={styles.passwordInput}
            placeholder="Create Password"
            placeholderTextColor="#0B0C14"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
         />         
          <TouchableOpacity 
           onPress={() => setIsPasswordVisible(!isPasswordVisible)}
           style={styles.iconWrapper}>
           <Feather 
             name={isPasswordVisible ? "eye" : "eye-off"} 
             size={22} 
             color="#0B0C14" />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: -10}}>
          <FontAwesome name="exclamation-circle" size={10} color="#E40613" />
          <Text style={{color:'#0B0C14', fontSize:10, fontFamily:'CustomFont-Regular', fontWeight:'400'}}>
          Password must be more than 8 caracters</Text>
        </View>

        <TouchableOpacity onPress={() => router.push('/')}
          style={styles.TouchableOpacity}>
          <Text style={{color: 'white', fontFamily:'CustomFont-Medium', fontSize: 24, fontWeight: '500' }}>
          Register</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight:'400', fontFamily:'CustomFont-Regular'}}>
            Already have an account?  
          </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={{ color: '#2563EB', fontSize: 16, fontFamily: 'CustomFont-Regular' }}>
               Login
              </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}



export default register

const styles = StyleSheet.create({
  container: {
  flex: 1,
  width: '100%',
  paddingHorizontal: 20,
},
mainText: {
  fontSize: 24,
  fontFamily: 'CustomFont-ExtraBold',
  color: '#000000',
  textAlign: 'center',
  marginTop: -60,

},
subText: {
  fontSize: 16,
  fontFamily: 'CustomFont-Regular',
  fontWeight: '400',
  color: '#000000',
  textAlign: 'center',
  marginBottom: 10,
  paddingHorizontal: 20,
  marginTop: -10,
},
textInputLabel:{
  fontSize: 20,
  fontFamily: 'CustomFont-SemiBold',
  fontWeight: '600',
  color: '#000000',
  marginTop: 2,
},
textInput: {
  borderRadius:15,
  borderWidth:1,
  height:62,
  paddingHorizontal:16,
  paddingTop:18,
  justifyContent:"space-between",
  marginBottom: 10,
  marginTop: -5,
  flexDirection:"row",
  fontSize:14,
  fontFamily:'CustomFont-Regular',
  fontWeight:'400',
},
TouchableOpacity:{
  backgroundColor: '#2563EB',
  borderRadius: 5,
  height: 62,
  paddingHorizontal: 16,
  marginBottom: 15,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
passwordContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  paddingHorizontal: 12,
  marginVertical: 8,
},
passwordInput: {
  flex: 1,
  height: 48,
  color: '#0B0C14',
},
iconWrapper: {
  padding: 4,
  },
})