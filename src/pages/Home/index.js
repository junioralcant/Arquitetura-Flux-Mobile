import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

// import { Container } from './styles';

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      description: 'Tênis de Caminhada Leve e Confortavel',
      price: 120.99,
      image:
        'https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/58/D12-1407-058/D12-1407-058_zoom1.jpg?',
    },
    {
      id: 2,
      description: 'Tênis de Caminhada Leve e Confortavel',
      price: 110.88,
      image:
        'https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/58/D12-1407-058/D12-1407-058_zoom1.jpg?',
    },
  ]);

  return (
    <View style={style.body}>
      <FlatList
        data={products}
        keyExtractor={product => product.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={style.container}>
            <Image style={style.image} source={{uri: item.image}} />
            <Text style={style.description}>{item.description}</Text>
            <Text style={style.price}>{'R$' + item.price}</Text>
            <TouchableOpacity style={style.addCart}>
              <View style={style.addCartContainerAmount}>
                <Text style={style.addCartTextAmount}>1</Text>
              </View>
              <Text style={style.addCartText}>ADICIONAR</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#191920',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 300,
    maxHeight: 400,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 5,
    marginTop: 30,
    padding: 15,
  },

  image: {
    width: 250,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 2,
    marginBottom: 30,
  },

  description: {
    fontSize: 20,
    color: '#333333',
  },

  price: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  addCart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    height: 50,
    backgroundColor: '#7159C1',
    borderRadius: 5,
  },

  addCartText: {
    marginLeft: 50,
    display: 'flex',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  addCartContainerAmount: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#48397B',
    width: 60,
    height: 50,
  },

  addCartTextAmount: {
    fontSize: 20,
    color: '#FFF',
  },
});
