import { StyleSheet } from 'react-native';
const MovieDetailsStyles = StyleSheet.create({
  container:{
    backgroundColor:'#111', 
    height:'100%',
    padding:15,
    alignItems:'center'
  },
  title: {
    color:'#fff',textAlign:'center', fontWeight:700, marginVertical:20
  },
  img:{
    width:100, 
    height:100, 
    borderRadius:50
  },
  cardTitle:{
    color:'#fff', 
    fontSize:10, 
    marginTop:20
  }
});

export default MovieDetailsStyles;