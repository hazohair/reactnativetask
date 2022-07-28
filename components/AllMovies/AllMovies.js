import  React, { useEffect, useState } from 'react';
import { StyleSheet , Text, View, ScrollView } from 'react-native';
import { Card, Image } from "@rneui/themed";
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';
import AllMoviesStyles from '../AllMovies/AllMoviesStyles'

const AllMovies = ({navigation}) => {

   const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1")
        .then((res) => setMovies(res.data.results))
        .catch((err) => alert(err) )
    }, [])

    return ( 
            <ScrollView style={AllMoviesStyles.container}> 
        
    <Text style={AllMoviesStyles.title}> See Your Favotite Movies  </Text>
        



        {movies.map((movie) => {
           return  (
                <View 
                style={{flexDirection:'row',marginVertical:15}}
                > 
                <Image
                onPress=
                {() => navigation.navigate("MovieDetails", {id: movie.id})} 
                        style={AllMoviesStyles.img}
                        resizeMode="contain"
                        source={{ uri: 'https://image.tmdb.org/t/p/w500/'+movie.poster_path}}
                    />  
                    <View >
                      <Card.Title  
                      style={AllMoviesStyles.cardTitle}
                      >
                        {movie.title} 
                      </Card.Title> 
                      <View style={{flexDirection:'row'}}> 
                        <Text style={{color:'#fff', fontSize:10}}>Released at </Text>
                        <Text style={{color:'#ddd', fontSize:10}}> 
                          {movie.release_date} 
                        </Text>  
                      </View>
                    </View>
                </View>
           )
        })}
        
        
    </ScrollView>
     );
}
 
export default AllMovies;