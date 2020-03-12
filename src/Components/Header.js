import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

// import { Container } from './styles';

import logo from '../essets/imagens/logo.png';

export default function Header() {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Image style={style.image} source={logo} />
        <Text style={style.textAmount}>3</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#191920',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  textAmount: {
    color: '#fff',
    backgroundColor: '#7159C1',
    width: 24,
    height: 24,
    borderRadius: 12,
    textAlign: 'center',
  },
});
