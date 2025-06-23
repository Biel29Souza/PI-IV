import React, { useState } from 'react';
import {
  Alert,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigationState } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TelaPrincipal from './TelaPrincipal';
import Dashboard from './Dashboard';
import Usuario from './Usuario';
import Footer from './Footer';

const Drawer = createDrawerNavigator();

const EmDesenvolvimento = (titulo) => () =>
  Alert.alert(titulo, 'Em desenvolvimento', [{ text: 'OK' }]);

export default function DrawerMenu() {
  const [darkMode, setDarkMode] = useState(false);

  // Detectar tela atual
  const routeName = useNavigationState((state) => {
    const index = state.index;
    return state.routes[index]?.name;
  });

  function headerWithBackAndTitle({ navigation, route }) {
    const isTelaPrincipal = route.name === 'TelaPrincipal';

    return {
      headerStyle: { backgroundColor: '#388e3c' },
      headerTintColor: '#fff',
      headerTitle: '',
      headerLeft: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 12 }}>
            <Icon name="arrow-left" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{route.name}</Text>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerRight}>
          {isTelaPrincipal && (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={35} color="#fff" />
            </TouchableOpacity>
          )}
          {!isTelaPrincipal && (
            <TouchableOpacity onPress={() => setDarkMode((prev) => !prev)}>
              <Icon
                name={darkMode ? 'white-balance-sunny' : 'moon-waning-crescent'}
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          )}
          <Icon name="account-circle" size={35} color="#fff" />
        </View>
      ),
    };
  }

  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator
        initialRouteName="TelaPrincipal"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation, route }) => headerWithBackAndTitle({ navigation, route })}
      >
        <Drawer.Screen name="TelaPrincipal">
          {(props) => <TelaPrincipal {...props} darkMode={false} />}
        </Drawer.Screen>
        <Drawer.Screen name="Dashboard">
          {(props) => <Dashboard {...props} darkMode={darkMode} />}
        </Drawer.Screen>
        <Drawer.Screen name="Usuario">
          {(props) => <Usuario {...props} darkMode={darkMode} />}
        </Drawer.Screen>
      </Drawer.Navigator>

      {/* Mostra o footer apenas se não estiver na TelaPrincipal */}
      {routeName !== 'TelaPrincipal' && <Footer />}

    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={({ color }) => <Text style={{ fontWeight: 'bold', color }}>Home</Text>}
        icon={() => <Icon name="home" size={50} color="#388e3c" />}
        onPress={() => props.navigation.navigate('TelaPrincipal')}
      />
      <DrawerItem
        label={({ color }) => <Text style={{ fontWeight: 'bold', color }}>Produto</Text>}
        icon={() => <Icon name="cart" size={50} color="#388e3c" />}
        onPress={EmDesenvolvimento('Produto')}
      />
      <DrawerItem
        label={({ color }) => <Text style={{ fontWeight: 'bold', color }}>Evento</Text>}
        icon={() => <Icon name="calendar" size={50} color="#388e3c" />}
        onPress={EmDesenvolvimento('Evento')}
      />
      <DrawerItem
        label={({ color }) => <Text style={{ fontWeight: 'bold', color }}>Visitação</Text>}
        icon={() => <Icon name="clipboard-list" size={50} color="#388e3c" />}
        onPress={EmDesenvolvimento('Visitação')}
      />
      <DrawerItem
        label={({ color }) => <Text style={{ fontWeight: 'bold', color }}>Doação</Text>}
        icon={() => <Icon name="gift" size={50} color="#388e3c" />}
        onPress={EmDesenvolvimento('Doação')}
      />
      <DrawerItem
        label={({ color }) => <Text style={{ fontWeight: 'bold', color }}>Relatórios</Text>}
        icon={() => <Icon name="file-chart" size={50} color="#388e3c" />}
        onPress={() => props.navigation.navigate('Dashboard')}
      />
      <View style={styles.divisor} />
      <DrawerItem
        label={({ color }) => <Text style={{ fontWeight: 'bold', color }}>Usuários</Text>}
        icon={({ color }) => <Icon name="account" size={50} color={color} />}
        onPress={() => props.navigation.navigate('Usuario')}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  divisor: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 12,
    paddingRight: 12,
    alignItems: 'center',
  },
});
