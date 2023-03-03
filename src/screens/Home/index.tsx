import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';
import { useState } from 'react';


export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantsName, setParticipantsName] = useState<string>('')


    function handleParticipantAdd(){
        if(participants.includes(participantsName)) {
            return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.")
        }

        setParticipants(prevState => [...prevState, participantsName])
        setParticipantsName('')
    }
    

    function handleParticipantRemove(name: string){
        Alert.alert("Remover", `Tem certeza que deseja remover participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () =>setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            },
        ])
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nome do evento
      </Text>
      <Text style={styles.desciption}>
       Domingo, 26 de fevereiro de 2023
      </Text>
      
      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor='#fff'
        onChangeText={setParticipantsName}
        value={participantsName}
        />

        <TouchableOpacity 
        style={styles.button}
        onPress={handleParticipantAdd}
        >
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.divScroll}>
        {
            participants.map(participant => (
                <Participant 
                key={participant}
                name={participant} 
                onRemove={() => handleParticipantRemove(participant)}
                />
            ))
        }

    
      </ScrollView>

    </View>
  );
}