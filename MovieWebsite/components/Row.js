import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, Image, ScrollView,View,TouchableOpacity} from 'react-native';
import axios from '../axios'


export default function Row({title,fetchUrl,navigation}) {

    const baseUrl = "https://image.tmdb.org/t/p/original/"


    const[movie,setMovie]=useState([])
   

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovie(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])

   


  return (
    <SafeAreaView style={{margin:10}}>
      <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{title}</Text>
        <ScrollView horizontal>
           {movie.map((movie)=>{
             return(
             <TouchableOpacity key={movie.id} onPress={()=>navigation.navigate('MovieDetails',{movie:movie})}>
             <View  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Image source={{uri:`${baseUrl}${movie.poster_path}`}} style={{height:300,width:200,margin:10}}></Image>
               <Text style={{color:'white'}}>{movie.original_title || movie.title || movie.name}</Text>
              </View>
             </TouchableOpacity>
             )
           })}
        </ScrollView>
     </SafeAreaView>
  );
}
