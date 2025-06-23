//import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { View, Text, Button, StyleSheet } from 'react-native';
//
//// Importando as telas
//import DashboardScreen from './Dashboard';
//import CompostManagement from './GestaoCompostagem';
//import RelatorioFinanceiro from './RelatorioFinanceiro';
//import RelatorioUsuario from './RelatorioUsuario';
//import RelatorioProduto from './RelatorioProduto';
//import RelatorioEstoque from './RelatorioEstoque';
//import TelaPrincipal from './TelaPrincipal'; // Tela principal
//
//const Stack = createNativeStackNavigator();
//
//// Tela Inicial (Home)
//function HomeScreen({ navigation }) {
//  return (
//    <View style={styles.container}>
//      <Text style={styles.title}>Bem-vindo!</Text>
//
//      <View style={styles.buttonContainer}>
//        <Button
//          title="Gestão de Compostagem"
//          onPress={() => navigation.navigate('GestaoCompostagem')}
//          color="#388e3c"
//        />
//      </View>
//
//      <View style={styles.buttonContainer}>
//        <Button
//          title="Dashboard"
//          onPress={() => navigation.navigate('Dashboard')}
//          color="#556B2F"
//        />
//      </View>
//
//      <View style={styles.buttonContainer}>
//        <Button
//          title="Relatório Financeiro"
//          onPress={() => navigation.navigate('RelatorioFinanceiro')}
//          color="#556B2F"
//        />
//      </View>
//
//      <View style={styles.buttonContainer}>
//        <Button
//          title="Relatório de Usuário"
//          onPress={() => navigation.navigate('RelatorioUsuario')}
//          color="#556B2F"
//        />
//      </View>
//
//      <View style={styles.buttonContainer}>
//        <Button
//          title="Relatório de Produto"
//          onPress={() => navigation.navigate('RelatorioProduto')}
//          color="#556B2F"
//        />
//      </View>
//
//      <View style={styles.buttonContainer}>
//        <Button
//          title="Relatório de Estoque"
//          onPress={() => navigation.navigate('RelatorioEstoque')}
//          color="#556B2F"
//        />
//      </View>
//
//      {/* Botão para Tela Principal */}
//      <View style={styles.buttonContainer}>
//        <Button
//          title="Tela Principal"
//          onPress={() => navigation.navigate('TelaPrincipal')}
//          color="#388e3c"
//        />
//      </View>
//    </View>
//  );
//}
//
//// App principal com navegação
//export default function App() {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator initialRouteName="Home">
//        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//        <Stack.Screen name="GestaoCompostagem" component={CompostManagement} options={{ headerShown: false }} />
//        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
//        <Stack.Screen name="RelatorioFinanceiro" component={RelatorioFinanceiro} options={{ headerShown: false }} />
//        <Stack.Screen name="RelatorioUsuario" component={RelatorioUsuario} options={{ headerShown: false }} />
//        <Stack.Screen name="RelatorioProduto" component={RelatorioProduto} options={{ headerShown: false }} />
//        <Stack.Screen name="RelatorioEstoque" component={RelatorioEstoque} options={{ headerShown: false }} />
//        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ headerShown: false }} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//}
//
//// Estilos
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    paddingHorizontal: 20,
//    backgroundColor: '#e6f2e6',
//  },
//  title: {
//    fontSize: 24,
//    fontWeight: 'bold',
//    marginBottom: 30,
//    textAlign: 'center',
//    color: '#2e7d32',
//  },
//  buttonContainer: {
//    marginVertical: 10,
//  },
//});



import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerMenu from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerMenu" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

