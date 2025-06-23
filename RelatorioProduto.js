import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const RelatorioProduto = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Exemplo de dados fictícios para relatório de produtos
  const productsData = [
    { name: 'Produto A', category: 'Categoria 1' },
    { name: 'Produto B', category: 'Categoria 2' },
    { name: 'Produto C', category: 'Categoria 1' },
    { name: 'Produto D', category: 'Categoria 3' },
    { name: 'Produto E', category: 'Categoria 2' },
    { name: 'Produto F', category: 'Categoria 1' },
  ];

  // Contagem de produtos por categoria
  const productCategoryCount = {
    'Categoria 1': productsData.filter((product) => product.category === 'Categoria 1').length,
    'Categoria 2': productsData.filter((product) => product.category === 'Categoria 2').length,
    'Categoria 3': productsData.filter((product) => product.category === 'Categoria 3').length,
  };

  // Dados do gráfico
  const pieChartData = [
    {
      name: 'Categoria 1',
      population: productCategoryCount['Categoria 1'],
      color: '#388e3c',
      legendFontColor: '#fff',
      legendFontSize: 14,
    },
    {
      name: 'Categoria 2',
      population: productCategoryCount['Categoria 2'],
      color: '#f9a825',
      legendFontColor: '#fff',
      legendFontSize: 14,
    },
    {
      name: 'Categoria 3',
      population: productCategoryCount['Categoria 3'],
      color: '#0277bd',
      legendFontColor: '#fff',
      legendFontSize: 14,
    },
  ];

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
            Relatório de Produtos
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
          <Icon name="package" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.cardContainer}>
        {/* Gráfico de Pizza */}
        <Text style={[styles.subtitle, { color: textColor }]}>
          Distribuição por Categoria de Produto
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

        {/* Lista de Produtos */}
        {productsData.map((product, index) => (
          <View
            key={index}
            style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}
          >
            <Text style={[styles.userName, { color: textColor }]}>{product.name}</Text>
            <Text style={[styles.userStatus, { color: textColor }]}>
              Categoria: {product.category}
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

export default RelatorioProduto;
