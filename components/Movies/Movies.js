import  React from 'react';
import { StyleSheet , Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AllMovies from '../AllMovies/AllMovies'
import MovieDetails from '../MovieDetails/MovieDetails'

const Stack = createStackNavigator();

const Movies = () => {
    return ( 
        <Stack.Navigator 
        initialRouteName='AllMovies' 
        screenOptions={{
        headerShown: false
        }}>
            <Stack.Screen name="AllMovies" component={AllMovies} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
     );
}
 
export default Movies;