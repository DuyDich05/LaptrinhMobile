import React from "react";
import {View,Text,TextInput,StyleSheet,Image,ScrollView} from "react-native";

export default function ExplorerScreen(){

return(

<ScrollView style={styles.container}>

<Text style={styles.title}>Explorer</Text>

<TextInput
placeholder="Search for meals or area"
style={styles.search}
/>

<Text style={styles.section}>Top Categories</Text>

<View style={styles.row}>

<Image source={{uri:"https://picsum.photos/200"}} style={styles.img}/>
<Image source={{uri:"https://picsum.photos/201"}} style={styles.img}/>
<Image source={{uri:"https://picsum.photos/202"}} style={styles.img}/>

</View>

<Text style={styles.section}>Popular Items</Text>

<View style={styles.card}>
<Text>Food 1</Text>
<Text>1$</Text>
</View>

<View style={styles.card}>
<Text>Food 2</Text>
<Text>3$</Text>
</View>

</ScrollView>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20
},

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:10
},

search:{
borderWidth:1,
padding:10,
borderRadius:6,
marginBottom:20
},

section:{
fontSize:18,
fontWeight:"bold",
marginVertical:10
},

row:{
flexDirection:"row",
justifyContent:"space-between"
},

img:{
width:100,
height:70,
borderRadius:8
},

card:{
backgroundColor:"#f5f5f5",
padding:15,
borderRadius:10,
marginBottom:10
}

})