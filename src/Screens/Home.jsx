import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utlis/colors'
import { fonts } from '../utlis/fonts'

const Home = () => {
  return (
    <View style={styles.container}>
      
      {/* <Image source={require('../assests/logo.png')} style={styles.logo} /> */}
      
      <Text style={styles.wel}>
        Welcome Buddy..!
      </Text>
      <Text style={styles.sub}>
      Your Wellness Journey Starts Here..
      </Text>
      <Image source={require("../assests/Image.png")} style={styles.image}/>
       <View style={styles.buttonc}>
        <TouchableOpacity style={[styles.login,{backgroundColor:colors.primary}]}>
          <Text style={styles.btext1}>Login</Text>
        </TouchableOpacity>

       


       </View >
       <View style={styles.buttonc}>
       <TouchableOpacity style={styles.login}>
          <Text style={styles.btext2}>Signup</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container :{
flex:1,
backgroundColor:colors.white,
alignItems :'center',
},
logo:{
    height:40,
    width:140,
    marginVertical:30
},
image:{
    height:250,
    width:231,
    marginVertical:20
},
wel:{
    fontSize:40,
    color:colors.primary,
    fontFamily:fonts.SemiBold,
    paddingHorizontal:20,
    textAlign:'center',
    marginTop:40
    
},
sub:{
color:colors.secondary ,
fontSize:17,
textAlign:"center",
fontFamily:fonts.Medium,
paddingHorizontal:20,
marginVertical:20


},
buttonc:{
  flexDirection:'row',
  marginTop:20,
  borderWidth:2,
  borderColor:colors.primary,
  width:"60%",
  borderRadius:100,
  height:50
  
},
btext1:{
  color:colors.white,
  fontSize:18,
  fontFamily:fonts.SemiBold,
  fontWeight:'600',

},
login:{
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  
  borderRadius:100

},
btext2:{
  color:colors.primary,
  fontSize:18,
  fontFamily:fonts.SemiBold,
  fontWeight:'600',
}



})