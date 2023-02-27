import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {

    function handleParticipantAdd(){
        if(participants.includes("Emelly")) {
            return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.")
        }
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover", `Tem certeza que deseja remover participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () =>Alert.alert("Deletado!")
            },
            {
                text: 'Não',
                style: 'cancel'
            },
        ])
    }

    const participants = [ 'Emelly', 'Matheus', 'Pedro', 'Jose', 'Maria', 'Ana', 'Mariana', 'João', 'Antonio', 'Danieli', 'Silvio', 'Vera', 'Wanderley' ]

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
                onRemove={() => handleParticipantRemove("Emelly Palutz")}/>
            ))
        }

        <Participant name="Emelly Palutz" onRemove={() => handleParticipantRemove("Emelly Palutz")}/>
        <Participant name="Matheus Iubel"  onRemove={() => handleParticipantRemove("Matheus Iubel")}/>
      </ScrollView>

    </View>
  );
}