import React from 'react';

import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';

const App = () => {

return (

<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

<Text>toko Parfum</Text>

<TextInput placeholder="Cari produk..." />

<ScrollView>

<Image

source={{uri:'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-7943130/christian_dior_christian_dior_sauvage_man_edp_-_100_ml_full04_ue59n7nw.jpeg'}}style={{width:200,height:200}}/>

<Image

source={{uri:'https://dynamic.zacdn.com/AaRjkyTqzOFIKGMeau5Zr3WfoA0=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/christian-dior-6396-8509932-1.jpg'}}style={{width:200,height:200}}/>

<Image

source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbOVQq3c9FzNOL6oRcuiIB5QvhPeMi8Npyg&s'}}style={{width:200,height:200}}/>

</ScrollView>

<Button title="Beli" onPress={() => ('Produk telah ditambahkan ke keranjang belanja')} />

</View>

);

};

export default App;