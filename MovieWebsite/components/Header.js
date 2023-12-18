import React,{useState,useEffect} from 'react';
import { Text, ImageBackground,View,  TouchableOpacity} from 'react-native';
import axios from '../axios';
import requests from '../request'


export default function Header() {

  const baseUrl = "https://image.tmdb.org/t/p/original/"


  const [movie, setMovie] = useState([]);
  
  useEffect(() => {  
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        return request;   
    } fetchData();
  }, []) 

 
  return (
   <ImageBackground style={{height:400,width:400,position:'relative'}}  source={{uri:`${baseUrl}${movie.backdrop_path}`}}>
   <View style={{position:'absolute',top:100,left:10}}>
   <Text style={{color:'white',fontWeight:'bold',fontSize:35}}>{movie.original_title || movie.name || movie.title}</Text>
   <Text style={{color:'white',fontWeight:'bold',fontSize:10}} numberOfLines={2}>{movie.overview}</Text>
   <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>{movie.vote_average}⭐</Text>
   <View>
   <TouchableOpacity><Text style={{margin:10,color:'white',borderColor:'black',backgroundColor:'orange',width:100,padding:10,textAlign:'center'}}>Play</Text></TouchableOpacity>
   </View>
   </View>
    </ImageBackground>
  );
}
