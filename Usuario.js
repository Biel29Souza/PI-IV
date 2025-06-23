import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

const Usuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [idBusca, setIdBusca] = useState('');
  const [proximoId, setProximoId] = useState(1);

  const adicionarUsuario = () => {
    if (!nome.trim()) return;
    const novoUsuario = { id: proximoId, nome };
    setUsuarios([...usuarios, novoUsuario]);
    setProximoId(proximoId + 1);
    setNome('');
  };

  const buscarUsuario = () => {
    const usuario = usuarios.find((u) => u.id == idBusca);
    Alert.alert('Busca', usuario ? `Nome: ${usuario.nome}` : 'Usuário não encontrado');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TouchableOpacity style={styles.button} onPress={adicionarUsuario}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Buscar por ID"
        value={idBusca}
        onChangeText={setIdBusca}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={buscarUsuario}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.userItem}>
            ID: {item.id} - Nome: {item.nome}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#388e3c',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  userItem: { fontSize: 16, marginBottom: 4 },
});

export default Usuario;
