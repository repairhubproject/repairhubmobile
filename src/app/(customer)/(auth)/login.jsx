import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Login = () => {
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
        <View
         style={styles.container}>
            <Image source={require('../../../../assets/images/Repair Icon.png')}
            style={{height: 344, width: 253, marginTop: -70, marginBottom: -60, alignSelf: 'center'}}
            />
            <Text style={styles.mainText}>Welcome Back!!</Text>
            <Text style={styles.subText}>Login to Continue</Text>

            <TextInput style={styles.textInput}
             placeholder='Email or Phone Number'
             placeholderTextColor={'#0B0C14'}
            />

            <View style={styles.passwordContainer}>
             <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#0B0C14"
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={setPassword}
              />
  
              <TouchableOpacity 
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                style={styles.iconWrapper}
              >
                <Feather 
                  name={isPasswordVisible ? "eye" : "eye-off"} 
                  size={22} 
                  color="#0B0C14" 
                />
              </TouchableOpacity>
            </View>

         <View style={{flexDirection: 'row', marginTop: -5}}>
            <FontAwesome name="exclamation-circle" size={10} color="#E40613" />
            <Text style={{color:'#0B0C14', fontSize:10, fontFamily:'CustomFont-Regular', fontWeight:'400'}}>
              Password must be more than 8 caracters</Text>
         </View>
         <View style={{ alignItems: 'flex-end', marginTop: 0 }}>
           <TouchableOpacity onPress={() => {/* link */}}>
             <Text style={{ color: '#2563EB', fontSize: 16, fontFamily: 'CustomFont-SemiBold' }}>
              Forgot Password?
             </Text>
           </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.push('/home')}
          style={styles.TouchableOpacity}>
            <Text style={{color: 'white', fontFamily:'CustomFont-Medium', fontSize: 24, fontWeight: '500' }}>
              Login</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.line}/>
              <Text style={styles.dividerText}>Or Continue With</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.button}>
           <AntDesign name="google" size={14} color="#FC4C53" gap={10} />
           <Text style={styles.buttonText}>Continue With Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <AntDesign name="apple" size={14} color="black" gap={10} />
            <Text style={styles.buttonText}>Continue With Google</Text>
          </TouchableOpacity>
         
         <View style={{flexDirection:'row', marginTop: 20,}}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight:'400', fontFamily:'CustomFont-Regular'}}>
            Don’t have an account?  
          </Text>
          <TouchableOpacity onPress={() => router.push('/register')}>
             <Text style={{ color: '#2563EB', fontSize: 16, fontFamily: 'CustomFont-Regular' }}>
              Create Account
             </Text>
           </TouchableOpacity>
         </View>

        </View>

    </SafeAreaView>
  )
}


export default Login

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
  textAlign: 'left',
  marginTop: -50,

},
subText: {
  fontSize: 16,
  fontFamily: 'CustomFont-Regular',
  fontWeight: '400',
  color: '#000000',
  textAlign: 'left',
  marginBottom: 10,
},
textInput: {
  borderRadius:15,
  borderWidth:1,
  height:62,
  paddingHorizontal:16,
  paddingTop:21,
  justifyContent:"space-between",
  gap:10,
  marginBottom: 15,
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
  marginBottom: 30,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
dividerContainer:{
  flexDirection:'row',
  alignItems:'center',
  marginVertical: 10,
  marginBottom: 35,
},
line:{
  flex:1,
  height:1, 
  backgroundColor: '#E0E0E0',
},
dividerText:{
  marginHorizontal: 10,
  color:'#666666',
  fontSize:14,
  fontFamily: 'CustomFont-Medium',
},
button:{
  backgroundColor: '#D9D9D900',
  borderRadius:17,
  borderWidth:1,
  borderColor: '#0F1A2C',
  height:42,
  alignItems: 'center',
  justifyContent:'center',
  marginBottom: 12,
  flexDirection:"row",
},
buttonText:{
  fontSize: 12,
  fontWeight:'400',
  fontFamily: 'CustomFont-Regular',
  color:'#000000',
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