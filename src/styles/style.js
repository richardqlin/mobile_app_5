import { StyleSheet, Dimensions, Text, View } from 'react-native';

const styles = StyleSheet.create({
border: {
 width: Dimensions.get('window').width * 0.7,
 margin:10,
 padding: 10,
 borderWidth :1,
 borderColor: '#f00'
},

  container: {

    margin:10,
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});


export default styles;