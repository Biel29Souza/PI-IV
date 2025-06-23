import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Dashboard = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);
  const [showSalesChart, setShowSalesChart] = useState(false);

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const goToGestao1 = () => {
    navigation.navigate('GestaoCompostagem');
  };

  const goToRelatorioFinanceiro = () => {
    navigation.navigate('RelatorioFinanceiro');
  };

  const goToRelatorioUsuario = () => {
    navigation.navigate('RelatorioUsuario');
  };

  const goToRelatorioProduto = () => {
    navigation.navigate('RelatorioProduto');
  };

  const goToRelatorioEstoque = () => {
    navigation.navigate('RelatorioEstoque');
  };

  const goToTelaPrincipal = () => {
    navigation.navigate('TelaPrincipal');
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleSalesChart = () => {
    setShowSalesChart((prev) => !prev);
  };

  const primaryGreen = '#388e3c';

  const backgroundColor = darkMode ? '#121212' : '#e6f2e6';
  const headerBackground = primaryGreen;
  const textColor = darkMode ? '#eee' : '#222';
  const cardBackground = darkMode ? '#1c1c1c' : '#fff';
  const cardBorder = darkMode ? '#888' : '#ccc';
  const buttonBackground = primaryGreen;

  const salesData = [1, 1, 3.5, 4.5, 3.5, 2];
  const salesLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 160 }}>
        <View style={[styles.header, { backgroundColor: headerBackground }]}>
          <TouchableOpacity onPress={goToHome} style={styles.iconButton}>
            <Icon name="arrow-left" size={26} color="#fff" />
          </TouchableOpacity>

          <Text style={[styles.headerTitle, { color: '#fff', flex: 1, marginLeft: 8 }]}>
            Dashboard
          </Text>

          <TouchableOpacity onPress={toggleDarkMode} style={styles.iconButton}>
            <Icon
              name={darkMode ? 'white-balance-sunny' : 'moon-waning-crescent'}
              size={28}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Icon name="account-circle" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}
            onPress={goToGestao1}
          >
            <Icon name="recycle" size={20} color={primaryGreen} />
            <Text style={[styles.cardText, { color: textColor }]}>Gestão Compostagem</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}
          >
            <Text style={[styles.cardText, { color: textColor }]}>Relatório Gestão 2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}
          >
            <Text style={[styles.cardText, { color: textColor }]}>Relatório de Doação</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}
            onPress={goToRelatorioFinanceiro}
          >
            <Icon name="chart-line" size={20} color={primaryGreen} />
            <Text style={[styles.cardText, { color: textColor }]}>Relatório Financeiro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}
            onPress={goToRelatorioUsuario}
          >
            <Icon name="account" size={20} color={primaryGreen} />
            <Text style={[styles.cardText, { color: textColor }]}>Relatório de Usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}
            onPress={goToRelatorioProduto}
          >
            <Icon name="package" size={20} color={primaryGreen} />
            <Text style={[styles.cardText, { color: textColor }]}>Relatório de Produto</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}
            onPress={goToRelatorioEstoque}
          >
            <Icon name="warehouse" size={20} color={primaryGreen} />
            <Text style={[styles.cardText, { color: textColor }]}>Relatório de Estoque</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.card,
              {
                backgroundColor: cardBackground,
                borderColor: cardBorder,
                justifyContent: 'space-between',
              },
            ]}
            onPress={toggleSalesChart}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="chart-bar" size={20} color={primaryGreen} />
              <Text style={[styles.cardText, { color: textColor, marginLeft: 12 }]}>
                Relatório de Vendas
              </Text>
            </View>

            <Icon
              name={showSalesChart ? 'chevron-up' : 'chevron-down'}
              size={24}
              color={primaryGreen}
            />
          </TouchableOpacity>

          {showSalesChart && (
            <>
              <Text style={[styles.subtitle, { color: textColor, marginTop: 24 }]}>
                Relatório de Vendas
              </Text>

              <BarChart
                data={{
                  labels: salesLabels,
                  datasets: [{ data: salesData }],
                }}
                width={screenWidth - 40}
                height={220}
                fromZero
                yAxisLabel=""
                showValuesOnTopOfBars
                chartConfig={{
                  backgroundColor,
                  backgroundGradientFrom: backgroundColor,
                  backgroundGradientTo: backgroundColor,
                  decimalPlaces: 1,
                  color: () => primaryGreen,
                  labelColor: () => textColor,
                  style: {
                    borderRadius: 16,
                  },
                  propsForBackgroundLines: {
                    stroke: darkMode ? '#333' : '#ccc',
                  },
                }}
                verticalLabelRotation={0}
                style={{ marginTop: 8, borderRadius: 16 }}
              />
              <TouchableOpacity style={[styles.button, { backgroundColor: buttonBackground }]}>
                <Icon name="refresh" size={16} color="#fff" />
                <Text style={styles.buttonText}> ATUALIZAR</Text>
              </TouchableOpacity>
            </>
          )}

          <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonBackground, marginTop: 24 }]}
            onPress={goToTelaPrincipal}
          >
            <Icon name="home" size={16} color="#fff" />
            <Text style={styles.buttonText}>Tela Principal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* FOOTER ESTILIZADO */}
      <View style={styles.footerContainer}>
        <View style={styles.footerBar}>
          <TouchableOpacity style={styles.footerIcon}>
            <Icon name="cart" size={28} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerIcon}>
            <Icon name="clipboard-list" size={28} color="#fff" />
          </TouchableOpacity>         

          <TouchableOpacity style={styles.footerIcon}>
            <Icon name="calendar" size={28} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerIcon}>
            <Icon name="gift" size={28} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.floatingButton}>
            <Icon name="file-chart" size={30} color="#fff" />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  iconButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    maxWidth: 380,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    elevation: 2,
    gap: 12,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontWeight: '700',
    fontSize: 16,
  },
  button: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 8,
  },

  // Footer estilizado
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  footerBar: {
    flexDirection: 'row',
    backgroundColor: 'darkgreen',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  footerIcon: {
    padding: 10,
  },
  floatingButton: {
    backgroundColor: '#388e3c',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});

export default Dashboard;
