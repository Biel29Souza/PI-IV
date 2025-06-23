import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { BarChart } from 'react-native-chart-kit';
import Footer from './Footer';

const screenWidth = Dimensions.get('window').width;

const Dashboard = ({ darkMode }) => {
  const navigation = useNavigation();
  const [showSalesChart, setShowSalesChart] = useState(false);

  // Navega para as telas desejadas
  const goToGestao1 = () => navigation.navigate('GestaoCompostagem');
  const goToRelatorioFinanceiro = () => navigation.navigate('RelatorioFinanceiro');
  const goToRelatorioUsuario = () => navigation.navigate('RelatorioUsuario');
  const goToRelatorioProduto = () => navigation.navigate('RelatorioProduto');
  const goToRelatorioEstoque = () => navigation.navigate('RelatorioEstoque');

  const toggleSalesChart = () => setShowSalesChart((prev) => !prev);

  const primaryGreen = '#388e3c';

  // Cores dependentes do modo dark
  const backgroundColor = darkMode ? '#121212' : '#e6f2e6';
  const textColor = darkMode ? '#eee' : '#222';
  const cardBackground = darkMode ? '#1c1c1c' : '#fff';
  const cardBorder = darkMode ? '#888' : '#ccc';
  const buttonBackground = primaryGreen;

  const salesData = [1, 1, 3.5, 4.5, 3.5, 2];
  const salesLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 90, paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Cartões */}
        <TouchableOpacity
          style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}
          onPress={goToGestao1}
        >
          <Icon name="recycle" size={20} color={primaryGreen} />
          <Text style={[styles.cardText, { color: textColor }]}>Gestão Compostagem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}>
          <Text style={[styles.cardText, { color: textColor }]}>Relatório Gestão 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}>
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

        {/* Cartão Relatório de Vendas com toggle */}
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
            <Text style={[styles.cardText, { color: textColor, marginLeft: 12 }]}>Últimas Vendas</Text>
          </View>
          <Icon
            name={showSalesChart ? 'chevron-up' : 'chevron-down'}
            size={24}
            color={primaryGreen}
          />
        </TouchableOpacity>

        {/* Gráfico e botão atualizar */}
        {showSalesChart && (
          <>
            <Text style={[styles.subtitle, { color: textColor, marginTop: 24 }]}>Relatório de Vendas</Text>

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
      </ScrollView>

      {/* Footer presente apenas aqui, fora do ScrollView */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },

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
});

export default Dashboard;
