import  React, { useEffect, useState } from 'react';
import { StyleSheet , Text, View } from 'react-native';
import { Card, Image } from "@rneui/themed";
import axios from "axios";
import MovieDetailsStyles from '../MovieDetails/MovieDetailsStyles'

const MovieDetails = ({ navigation, route }) => {
   const id = route.params.id;
   const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7cf3edadf185a23e94b9bf42a78c3fa2`) 
      .then((res) => setMovieDetails(res.data))
      .catch((err) => alert(err) )

    }, [id])
    return ( 
        <View 
                style={MovieDetailsStyles.container}
                > 
                <Image
                        style={MovieDetailsStyles.img}
                        resizeMode="contain"
                        source={{ uri: 'https://image.tmdb.org/t/p/w500/'+movieDetails.poster_path}}
                    />  
                    <View >
                      <Card.Title  
                      style={MovieDetailsStyles.cardTitle}
                      >
                        {movieDetails.title} 
                      </Card.Title> 
                      <View style={{alignItems:'center'}}> 
                        <Text>
                          <Text style={{color:'#fff', fontSize:10}}>Released at </Text>
                          <Text style={{color:'#ddd', fontSize:10}}> 
                            {movieDetails.release_date} 
                          </Text> 
                        </Text>
                        <Text style={{color:'#ddd', fontSize:10, paddingTop:10, paddingBottom:10}}> 
                          Overview 
                        </Text> 
                        <Text style={{color:'#ddd', fontSize:10, textAlign:'center', paddingHorizontal:20}}> 
                          {movieDetails.overview} 
                        </Text>  
                      </View>
                    </View>
                </View>
     );
}
 
export default MovieDetails;