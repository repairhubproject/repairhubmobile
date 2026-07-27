import Ionicons from '@react-native-vector-icons/ionicons';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from '../../../../data';


const profileImage = require('../../../../assets/images/profilePicture.png')
const electricalManImage = require('../../../../assets/images/electricianManImage.jpg')
const plumberManImage = require('../../../../assets/images/plumberManImage.png')
const refrigeratorManImage = require('../../../../assets/images/refrigeratorManImage.png')
const generatorManImage = require('../../../../assets/images/generatorManImage.png')
const electronicsManImage = require('../../../../assets/images/electronicsManImage.png')
const bannerImage = require('../../../../assets/images/banner.png')





export default function Index() {
  const [technicianData, setTechnicianData] = useState([]);
  
useEffect(()=>{
  if(data && data.length > 0){
    setTechnicianData(data)
  }
}, [])
  const categories = [
    {
      image: electricalManImage,
      service: "Electrical Services"
    },
    {
      image: plumberManImage,
      service: "Plumbing Services"
    },
    {
      image: refrigeratorManImage,
      service: "Refrigerator Repair"
    },
    {
      image: generatorManImage,
      service: "Generator Repair"
    },
    {
      image: electronicsManImage,
      service: "Electronics Repair"
    }
  ]
  return (
    <SafeAreaView>
      {/* Main view that holds the homepage*/}
      <View style={styles.container}>
        {/* All content container view */}
        <View style={styles.headerContainer}>
          {/* Header container and content*/}
          <View style={{flexDirection: "row", gap: 10}}>
              <Image source={profileImage} style={styles.profileImage} />
              <View style={{paddingBottom: 5}}>
                <Text style={styles.mainText}>Hi Sonia!</Text>
                <Text style={styles.bodyText}>What do you want to fix</Text>
              </View> 
          </View>
          
          <View>
            <MaterialDesignIcons style={{marginRight: 10}} name="bell-outline" size={24} color="black" />
          </View>
        </View>
        {/* Technician search goes here*/}
        <View style={{flexDirection: "row", borderWidth: 2, width: 375, height: 48, borderRadius: 20, marginTop: 15, borderColor: "#2563EBC4"}}>
          <Ionicons style={{marginLeft: 10, marginTop: 10}} name="search" size={24} color="black" />
          <TextInput 
          placeholder="Search technicians, repairs or service..."
          />
          <MaterialDesignIcons style={{marginLeft: 50, marginTop: 10}} name="tune-variant" size={24} color="black" />
        </View>
        {/* categories and see profile goes here*/}
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15}}>
          <Text style={{fontSize: 24, fontFamily: "poppins-extra-bold", fontWeight: "bold"}}>Categories</Text>
          <View style={{flexDirection: "row", alignSelf: "flex-end"}}>
            <Link style={{fontSize: 14, fontFamily: "poppins-extra-bold", fontWeight: "bold", color: "#2563EB"}} href="#">See Profile</Link>
            <MaterialDesignIcons name="chevron-right" size={20} color="#2563EB" />
          </View>
        </View>
        {/* Technician category goes here*/}
        <View>
          <FlatList 
          data={categories}
          renderItem={({item})=>{
            return(
              <Pressable style={{marginTop: 10, width: 75}}>
                <Image style={{width: 60, height: 60, borderWidth: 2, borderColor: "#2563EB", borderRadius: 15}} source={item.image}/>
                <Text style={{textAlign: "center", fontSize: 11, paddingRight: 10, fontWeight: "700"}}>{item.service}</Text>
              </Pressable>
            )
          }}
          horizontal={true}
          />
        </View>
        {/* Site Banner goes here*/}
        <View>
          <ImageBackground 
          style={{width: 370, height: 80, marginTop: 15}}
          imageStyle={{borderRadius: 21}}
          source={bannerImage}>
            <View style={{marginTop: 8, width: 120, marginLeft: 10}}>
              <Text style={{color: "white", fontWeight: "600"}}>Need urgent help?</Text>
              <Text style={{color: "white", fontSize: 12, fontWeight: "400"}}>Emergency repairs available 24/7</Text>
              <Text style={{color: "white", fontSize: 10}}>[Find Technician]</Text>
            </View>
          </ImageBackground>
        </View>

        {/* Nearby Technicians and see profile goes here*/}
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15}}>
          <Text style={{fontSize: 20, fontFamily: "poppins-extra-bold", fontWeight: "bold"}}>Nearby Technicians</Text>
          <View style={{flexDirection: "row", alignSelf: "flex-end"}}>
            <Link style={{fontSize: 14, fontFamily: "poppins-extra-bold", fontWeight: "bold", color: "#2563EB"}} href="#">See Profile</Link>
            <MaterialDesignIcons name="chevron-right" size={20} color="#2563EB" />
          </View>
        </View>
        {/* List of Nearby Technicians goes here*/}
        <View>
          <FlatList 
          data={technicianData}
          renderItem={({item})=>{
            return(
              <View>
                <Pressable>
                  <Image source={item.image} style={{width: 100, height: 100}}/>
                </Pressable>
              </View>
              
            )
          }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginLeft: 15,
    marginTop: 10
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },
  profileImage:{
    width: 40, 
    height: 40, 
    borderRadius: 20,
    backgroundColor: "#2563EB"
  },
  mainText: {
    fontFamily: "poppins-extra-bold",
    fontSize: 20,
    fontWeight: "bold",
  },
  bodyText: {
    fontFamily: "poppins-regular",
    fontWeight: "300",
    fontSize: 11
  }
});
