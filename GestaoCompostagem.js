import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CompostCard = ({ batch, darkMode }) => {
  const statusClasses = {
    Pendente: styles.statusPending,
    Ativo: styles.statusActive,
    Concluído: styles.statusCompleted,
  };

  const daysLeft = Math.max(
    0,
    Math.ceil((new Date(batch.estimatedFinish) - new Date()) / (1000 * 60 * 60 * 24))
  );

  const progressPercent = Math.min(100, Math.max(0, batch.progress));

  const cardStyle = [
    styles.card,
    darkMode ? styles.cardDark : styles.cardLight,
  ];

  const textColor = { color: darkMode ? '#eee' : '#333' };

  return (
    <View style={cardStyle}>
      <View style={styles.cardHeader}>
        <Text style={[styles.cardTitle, textColor]}>Lote {batch.id}</Text>
        <Text style={[styles.cardStatus, statusClasses[batch.status]]}>
          {batch.status}
        </Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={textColor}>
          Início: {new Date(batch.startDate).toLocaleDateString()}
        </Text>
        <Text style={textColor}>
          Previsão de Término: {new Date(batch.estimatedFinish).toLocaleDateString()}
        </Text>
        <Text style={textColor}>Dias restantes: {daysLeft}</Text>

        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${progressPercent}%` },
            ]}
          />
        </View>
        <Text style={textColor}>Progresso: {progressPercent}%</Text>
      </View>
    </View>
  );
};

export default function CompostManagement({ navigation }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const [batches] = useState([
    {
      id: '001',
      status: 'Ativo',
      startDate: '2024-05-01',
      estimatedFinish: '2024-06-15',
      progress: 45,
    },
    {
      id: '002',
      status: 'Pendente',
      startDate: '2024-06-05',
      estimatedFinish: '2024-07-20',
      progress: 0,
    },
    {
      id: '003',
      status: 'Concluído',
      startDate: '2024-03-10',
      estimatedFinish: '2024-04-25',
      progress: 100,
    },
    {
      id: '004',
      status: 'Ativo',
      startDate: '2024-05-10',
      estimatedFinish: '2024-06-30',
      progress: 60,
    },
    {
      id: '005',
      status: 'Pendente',
      startDate: '2024-07-01',
      estimatedFinish: '2024-08-15',
      progress: 0,
    },
  ]);

  const backgroundColor = darkMode ? '#121212' : '#e6f2e6';

  // Função para alertar o botão de atualização
  const handleUpdate = () => {
    Alert.alert("Atualizando...", "Os dados estão sendo atualizados.");
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Header */}
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
            Gestão de Compostagem
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
          <Icon name="account-circle" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* ScrollView com Cards */}
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {batches.map((batch) => (
          <CompostCard batch={batch} key={batch.id} darkMode={darkMode} />
        ))}
        
        {/* Botão de Atualizar no final dos cards */}
        <TouchableOpacity
          style={styles.updateButton}
          onPress={handleUpdate} // Chama a função de atualização
        >
          <Icon name="refresh" size={24} color="#fff" />
          <Text style={styles.updateButtonText}>Atualizar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

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
  cardLight: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardDark: {
    backgroundColor: '#1c1c1c',
    borderWidth: 2,
    borderColor: '#888',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  cardStatus: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    color: '#fff',
  },
  statusPending: {
    backgroundColor: '#f9a825',
  },
  statusActive: {
    backgroundColor: '#388e3c',
  },
  statusCompleted: {
    backgroundColor: '#0277bd',
  },
  cardContent: {
    marginTop: 8,
  },
  progressBarBackground: {
    width: '100%',
    height: 14,
    backgroundColor: '#c8e6c9',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 8,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#388e3c',
    borderRadius: 8,
  },
  updateButton: {
    backgroundColor: '#388e3c',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});
