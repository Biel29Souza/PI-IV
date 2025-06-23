import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();
  const iconSize = 32;
  const iconColor = '#fff';

  return (
    <View style={styles.footerBar}>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => Alert.alert('Produto', 'Em desenvolvimento')}
      >
        <Icon name="cart" size={iconSize} color={iconColor} />
        <Text style={styles.footerText}>Produto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => Alert.alert('Evento', 'Em desenvolvimento')}
      >
        <Icon name="calendar" size={iconSize} color={iconColor} />
        <Text style={styles.footerText}>Evento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate('TelaPrincipal')}
      >
        <Icon name="home" size={iconSize} color={iconColor} />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => Alert.alert('Visitação', 'Em desenvolvimento')}
      >
        <Icon name="clipboard-list" size={iconSize} color={iconColor} />
        <Text style={styles.footerText}>Visitação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Icon name="file-chart" size={iconSize} color={iconColor} />
        <Text style={styles.footerText}>Relatórios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerBar: {
    flexDirection: 'row',
    backgroundColor: 'darkgreen',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 100,
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 13,
    marginTop: 4,
    fontWeight: 'bold',
  },
});
