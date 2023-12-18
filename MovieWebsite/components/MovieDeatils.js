
import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, ImageBackground, ScrollView ,Image,TouchableOpacity} from 'react-native';


const MovieDetails = ({ route }) => {

    const[cast,setCast]=useState([])
  
   



    const baseUrl = "https://image.tmdb.org/t/p/original/"


  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${route.params.movie.id}?api_key=ab1da08307f82007e9975d4dccf67670&language=en-US&append_to_response=credits`)
    .then(res=>res.json())
    .then(d=>setCast(d.credits.cast))
  })

  
 
  
  



  return (
   <View style={{backgroundColor:'black'}}>
     <ImageBackground style={{display:'flex',justifyContent:'flex-end',alignItems:'center',height:400}} source={{uri:`${baseUrl}${route.params.movie.backdrop_path}`}}>
      <View style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
      <Text style={{color:'white',fontWeight:'bold',textAlign:'center',fontSize:20}}>Title: {route.params.movie.title || route.params.movie.original_title || route.params.movie.name}</Text>
      <Text numberOfLines={'3'} style={{color:'white'}}>{route.params.movie.overview}</Text>
      <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}}>{route.params.movie.vote_average}⭐</Text>
      <TouchableOpacity   style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Text style={{margin:10,color:'white',borderColor:'black',margin:10,backgroundColor:'orange',width:100,padding:10,textAlign:'center'}}>Play Trailer</Text></TouchableOpacity>
      </View>
    </ImageBackground>
    <Text style={{color:'white',fontSize:40,fontWeight:'bold'}}>Cast</Text>
    <ScrollView horizontal>
       {cast.slice(0,10) && cast.map((movie)=>{
            return(
               <View key={movie.id} style={{height:300,display:'flex',alignItems:'center',justifyContent:'center'}}>
               <Image  style={{height:100,width:100,borderRadius:100,margin:10,borderWidth:1,borderColor:'transparent'}}  source={{uri:`https://image.tmdb.org/t/p/original/${movie.profile_path}`}}></Image>
               <Text style={{textAlign:'center',color:'white',fontWeight:'900'}}>{movie.name}</Text>
               <Text  style={{textAlign:'center',color:'white'}}>{movie.known_for_department}</Text>
               </View>
            )
        })}
    </ScrollView>
    </View>

  );
};

export default MovieDetails;
