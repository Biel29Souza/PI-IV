import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const RelatorioEstoque = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Exemplo de dados fictícios para relatório de estoque
  const stockData = [
    { name: 'Produto A', quantity: 100 },
    { name: 'Produto B', quantity: 50 },
    { name: 'Produto C', quantity: 200 },
    { name: 'Produto D', quantity: 75 },
    { name: 'Produto E', quantity: 30 },
    { name: 'Produto F', quantity: 150 },
  ];

  // Dados do gráfico
  const pieChartData = stockData.map((item) => ({
    name: item.name,
    population: item.quantity,
    color: '#388e3c',
    legendFontColor: '#fff',
    legendFontSize: 14,
  }));

  const backgroundColor = darkMode ? '#121212' : '#e6f2e6';
  const textColor = darkMode ? '#eee' : '#333';
  const cardBackground = darkMode ? '#1c1c1c' : '#fff';
  const cardBorder = darkMode ? '#888' : '#ccc';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Icon name="arrow-left" size={28} color="#fff" />
          </TouchableOpacity>

          <Text style={[styles.headerTitle, { color: '#fff' }]}>
            Relatório de Estoque
          </Text>
        </View>

        <TouchableOpacity style={styles.iconButton} onPress={toggleDarkMode}>
          <Icon
            name={darkMode ? 'white-balance-sunny' : 'moon-waning-crescent'}
            size={30}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="warehouse" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.cardContainer}>
        {/* Gráfico de Pizza */}
        <Text style={[styles.subtitle, { color: textColor }]}>
          Distribuição de Quantidade de Produtos em Estoque
        </Text>
        <PieChart
          data={pieChartData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor,
            backgroundGradientFrom: backgroundColor,
            backgroundGradientTo: backgroundColor,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: () => textColor,
            style: {
              borderRadius: 16,
            },
            propsForBackgroundLines: {
              stroke: darkMode ? '#333' : '#ccc',
            },
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          style={{ marginTop: 16, borderRadius: 16 }}
        />

        {/* Lista de Produtos em Estoque */}
        {stockData.map((item, index) => (
          <View
            key={index}
            style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}
          >
            <Text style={[styles.userName, { color: textColor }]}>{item.name}</Text>
            <Text style={[styles.userStatus, { color: textColor }]}>
              Quantidade: {item.quantity}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#388e3c',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 8,
  },
  cardContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
    alignItems: 'center',
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    maxWidth: 380,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
  },
  userStatus: {
    fontSize: 14,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 16,
  },
});

export default RelatorioEstoque;
