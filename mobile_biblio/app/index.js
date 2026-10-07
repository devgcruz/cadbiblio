import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';


import { cadastrarPessoa } from '../services/pessoas';

export default function Index() {

  const router = useRouter();

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');

  const handleEnviar = async () => {

    if (!nome || !cpf || !endereco || !numero) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return
    }

    try {

      await cadastrarPessoa({ nome, cpf, endereco, numero });
      Alert.alert("Sucesso !", "Pessoa cadastrada com sucesso !");

    } catch (e) {
      Alert.alert("Erro", e.message || "Não foi possivel conectar ao servidor");
      console.log(e);
    }

  }

  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

        {/* Placeholder do Avatar (Círculo Cinza) */}
        <View style={styles.avatarPlaceholder} />

        {/* Inputs */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome..."
          placeholderTextColor="#A9A9A9"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF..."
          placeholderTextColor="#A9A9A9"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />

        {/* Linha com Endereço e Número */}
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.enderecoInput]}
            placeholder="Digite seu Endereço..."
            placeholderTextColor="#A9A9A9"
            value={endereco}
            onChangeText={setEndereco}
          />
          <TextInput
            style={[styles.input, styles.numeroInput]}
            placeholder="nº"
            placeholderTextColor="#A9A9A9"
            value={numero}
            onChangeText={setNumero}
            keyboardType="numeric"
          />
        </View>

        {/* Botão de Enviar */}
        <TouchableOpacity style={styles.button} onPress={handleEnviar} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>



     </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formulario: {
    justifyContent: 'center',
    alignItems:' center'
  },
  avatarPlaceholder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#D9D9D9',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#333333',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  enderecoInput: {
    flex: 1,
    marginRight: 10,
  },
  numeroInput: {
    width: 70,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#5DE282',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  listButtonText: {
    color: '#888888',
    fontSize: 15,
    textDecorationLine: 'underline',
  }
});
