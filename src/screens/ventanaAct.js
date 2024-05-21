import React from 'react';
import { View, ScrollView,TouchableOpacity, StyleSheet, Text, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/data';
import dataA from '../data/dataA';
import Boton from '../components/Boton';

const ActDeClase = ({ navigation }) => {
    const informacion = data;
    const informacionA = dataA;

    const irPantalla2 = async () => {
        navigation.navigate('Pantalla2');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
            <View style={styles.fondoTexto}>
                <Text style={styles.title}>Pokémon de tipo fuego</Text>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={informacion}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.title}>{item.numero}</Text>
                            <Image source={item.imageT} style={styles.imageT} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={informacion}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.title}>{item.numero}</Text>
                            <Image source={item.imageT} style={styles.imageT} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.fondoTextoA}>
                <Text style={styles.title}>Pokémon de tipo agua</Text>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={informacionA}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.title}>{item.numero}</Text>
                            <Image source={item.imageT} style={styles.imageT} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={informacionA}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.title}>{item.numero}</Text>
                            <Image source={item.imageT} style={styles.imageT} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <Boton
            textoBoton='Ir a creditos'
            accionBoton={irPantalla2}
            />
            <Text style={styles.title}></Text>

            <Text style={styles.title}></Text>
        </View>
        </ScrollView>
        
    );
};

export default ActDeClase;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
        height: 240, // Altura fija para evitar el crecimiento automático
        marginHorizontal:5
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems:'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        borderStartColor: 'blue',
    },
    texto:{
        marginHorizontal:15
    },
    fondoTexto:{
        backgroundColor: 'orange',
        paddingHorizontal: 100,
        paddingVertical:10,
        margin: 12,
    },
    fondoTextoA:{
        backgroundColor: 'lightblue',
        paddingHorizontal: 100,
        paddingVertical:10,
        margin: 12,
    },
    imageT:{
        width: 40,
        height: 15,
    },
});
