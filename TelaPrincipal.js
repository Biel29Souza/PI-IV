import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TelaPrincipal = ({ navigation }) => {
  const showAlert = (title) => {
    Alert.alert(title, 'Em desenvolvimento', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem-Vindo Admin</Text>
        <Icon
          name="account-circle"
          size={30}
          color="#fff"
          style={styles.userIcon}
        />
      </View>

      {/* Cards */}
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <Card
          title="Produto"
          description="Acesse informações e relatórios sobre produtos."
          iconName="cart"
          onPress={() => showAlert('Produto')}
        />
        <Card
          title="Visitação"
          description="Visualize relatórios e detalhes sobre as visitas realizadas."
          iconName="clipboard-list"
          onPress={() => showAlert('Visitação')}
        />
        <Card
          title="Evento"
          description="Gerencie e acesse relatórios sobre eventos."
          iconName="calendar"
          onPress={() => showAlert('Evento')}
        />
        <Card
          title="Doação"
          description="Acompanhe e analise as doações realizadas."
          iconName="gift"
          onPress={() => showAlert('Doação')}
        />
        <Card
          title="Relatórios"
          description="Acesse diferentes relatórios para análise de dados."
          iconName="file-chart"
          onPress={() => navigation.navigate('Dashboard')}
        />
      </ScrollView>
    </View>
  );
};

const Card = ({ title, description, onPress, iconName }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Icon name={iconName} size={30} color="#388e3c" />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <Text style={styles.cardDescription}>{description}</Text>
    <TouchableOpacity style={styles.cardButton} onPress={onPress}>
      <Text style={styles.cardButtonText}>Ir para {title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#e6f2e6',
  },
  header: {
    width: '100%',
    backgroundColor: '#388e3c',
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  userIcon: {
    marginLeft: 'auto',
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
    alignItems: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#388e3c',
    marginLeft: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
    textAlign: 'center',
  },
  cardButton: {
    backgroundColor: '#388e3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default TelaPrincipal;
