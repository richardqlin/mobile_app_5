import React, {Component} from 'react';

import styles from '../styles/style';

import Form from '../components/Form';

import {StyleSheet, Text,View} from 'react-native';

class TabScreen extends Component {
constructor(){
super();

}


render(){
return(

<View style = {styles.container} >

<Form  />

</View>
);

}
}


export default TabScreen;