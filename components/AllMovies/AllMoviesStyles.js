import { StyleSheet } from 'react-native';
const AllMoviesStyles = StyleSheet.create({
  container:{
    backgroundColor:'#111'
  },
  title: {
    color:'#fff',textAlign:'center', fontWeight:700, marginVertical:20
  },
  img:{
    width:100, 
    height:100, 
    borderRadius:50, 
    cursor:'pointer'
  },
  cardTitle:{
    color:'#fff', 
    fontSize:10, 
    marginTop:20, 
    textAlign:'start'
  }
});

export default AllMoviesStyles;