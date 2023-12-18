import React from 'react';
import { ScrollView} from 'react-native';
import Row from '../components/Row';
import requests from '../request'
import Header from '../components/Header';

export default function Home({navigation}) {
  return (
    <ScrollView  style={{backgroundColor:'black',color:'white'}}>
      <Header/>
      <Row  navigation={navigation}  title={"NetflixOriginal"} fetchUrl={requests.fetchNetflixOriginals} />
      <Row navigation={navigation}  title={"Top_Rated"} fetchUrl={requests.fetchTopRated}/>
      <Row  navigation={navigation} title={"ActionMovies"} fetchUrl={requests.fetchActionMovies}/>
      <Row navigation={navigation}  title={"HorrorMovies"} fetchUrl={requests.fetchHorrorMovies}/>
      <Row navigation={navigation}  title={"RomanceMovies"} fetchUrl={requests.fetchRomanceMovies}/>
      <Row navigation={navigation}  title={"Trending"} fetchUrl={requests.fetchTrending}/>
     </ScrollView>
  );
}

