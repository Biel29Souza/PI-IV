import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PieChart } from 'react-native-chart-kit';
import api from './api';

const screenWidth = Dimensions.get('window').width;

const RelatorioUsuario = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [id, setId] = useState('');
  const [dados, setDados] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const limpar = () => {
    setId('');
    setDados(null);
  };

  const buscar = async () => {
    if (id === '') {
      alert('Digite um ID válido');
      return;
    }
    try {
      const response = await api.get(`/${id}`);
      setDados(response.data);
    } catch (error) {
      console.log('ERROR: ' + error);
    }
  };

  const usersData = [
    { name: 'João', status: 'Ativo' },
    { name: 'Maria', status: 'Inativo' },
    { name: 'Carlos', status: 'Bloqueado' },
    { name: 'Ana', status: 'Ativo' },
    { name: 'Pedro', status: 'Inativo' },
    { name: 'Lucas', status: 'Ativo' },
    { name: 'Paula', status: 'Ativo' },
  ];

  const userStatusCount = {
    Ativo: usersData.filter((user) => user.status === 'Ativo').length,
    Inativo: usersData.filter((user) => user.status === 'Inativo').length,
    Bloqueado: usersData.filter((user) => user.status === 'Bloqueado').length,
  };

  const pieChartData = [
    {
      name: 'Ativo',
      population: userStatusCount.Ativo,
      color: '#388e3c',
      legendFontColor: '#000',
      legendFontSize: 14,
    },
    {
      name: 'Inativo',
      population: userStatusCount.Inativo,
      color: '#f9a825',
      legendFontColor: '#000',
      legendFontSize: 14,
    },
    {
      name: 'Bloqueado',
      population: userStatusCount.Bloqueado,
      color: '#0277bd',
      legendFontColor: '#000',
      legendFontSize: 14,
    },
  ];

  const lastActiveUsers = usersData.filter(u => u.status === 'Ativo').slice(-3);

  const backgroundColor = darkMode ? '#121212' : '#e6f2e6';
  const textColor = darkMode ? '#eee' : '#333';
  const cardBackground = darkMode ? '#1c1c1c' : '#fff';
  const cardBorder = darkMode ? '#888' : '#ccc';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Relatório de Usuários</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.iconButton} onPress={toggleDarkMode}>
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
        </View>

        {/* Gráfico em Card */}
        <Text style={[styles.subtitle, { color: textColor }]}>Distribuição de Status dos Usuários</Text>
        <View style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}>
          <PieChart
            data={pieChartData}
            width={screenWidth - 64}
            height={220}
            chartConfig={{
              backgroundColor: cardBackground,
              backgroundGradientFrom: cardBackground,
              backgroundGradientTo: cardBackground,
              decimalPlaces: 0,
              color: () => textColor,
              labelColor: () => textColor,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            style={{ borderRadius: 12 }}
          />
        </View>

        {/* Busca por ID */}
        <View style={styles.resultado}>
          <Text style={[styles.text, { color: textColor }]}>Buscar Usuário por ID</Text>
          <View style={styles.areaBtn}>
            <Text style={[styles.itemText, { color: textColor }]}>ID:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o código do usuário"
              value={id}
              onChangeText={(idLido) => setId(idLido)}
            />
          </View>

          <View style={styles.areaBtn}>
            <TouchableOpacity style={[styles.botao, { backgroundColor: '#1D75CD' }]} onPress={buscar}>
              <Text style={styles.botaoText}>Buscar o ID</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, { backgroundColor: '#FF0000' }]} onPress={limpar}>
              <Text style={styles.botaoText}>Limpar</Text>
            </TouchableOpacity>
          </View>

          {/* Exibição dos dados e CRUD */}
          {dados && (
            <View style={{ marginTop: 20 }}>
              <Text style={[styles.itemText, { color: textColor }]}>Nome:</Text>
              <TextInput style={styles.inputText} value={dados.nome} />

              <Text style={[styles.itemText, { color: textColor }]}>E-mail:</Text>
              <TextInput style={styles.inputText} value={dados.email} />

              <Text style={[styles.itemText, { color: textColor }]}>CPF:</Text>
              <TextInput style={styles.inputText} value={dados.identificacao} />

              <Text style={[styles.itemText, { color: textColor }]}>CEP:</Text>
              <TextInput style={styles.inputText} value={dados.codigoPostal} />

              <Text style={[styles.itemText, { color: textColor }]}>Estado:</Text>
              <TextInput style={styles.inputText} value={dados.nacionalidade} />

              <View style={styles.crudContainer}>
                <TouchableOpacity style={[styles.botaoCrud, { backgroundColor: '#4CAF50' }]}>
                  <Text style={styles.botaoText}>Criar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botaoCrud, { backgroundColor: '#2196F3' }]}>
                  <Text style={styles.botaoText}>Atualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botaoCrud, { backgroundColor: '#f44336' }]}>
                  <Text style={styles.botaoText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        {/* Últimos usuários ativos */}
        <Text style={[styles.subtitle, { color: textColor }]}>Últimos Usuários Ativos</Text>
        {lastActiveUsers.map((user, index) => (
          <View
            key={index}
            style={[styles.card, { backgroundColor: cardBackground, borderColor: cardBorder }]}
          >
            <Text style={[styles.userName, { color: textColor }]}>{user.name}</Text>
            <Text style={[styles.userStatus, { color: textColor }]}>Status: {user.status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  header: {
    height: 60,
    backgroundColor: '#388e3c',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  iconButton: { padding: 8 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#fff' },
  subtitle: { fontSize: 18, fontWeight: '700', marginVertical: 16 },
  resultado: { marginTop: 16, marginBottom: 24 },
  areaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 8,
  },
  input: {
    backgroundColor: '#C4C4C4',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  inputText: {
    backgroundColor: '#C4C4C4',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
  },
  text: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  botao: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoText: { fontSize: 16, color: '#fff', fontWeight: '600' },
  itemText: { fontSize: 16, fontWeight: '500', marginTop: 8 },
  crudContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  botaoCrud: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    width: '100%',
  },
  userName: { fontSize: 18, fontWeight: '700' },
  userStatus: { fontSize: 14, marginTop: 8 },
});

export default RelatorioUsuario;
