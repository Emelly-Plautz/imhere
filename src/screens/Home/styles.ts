import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      alignItems: 'center',
      gap: 5,
      paddingTop: 54,
      padding: 8,
    },
  
    title: {
      color: '#fff',
      fontSize: 24,  

  
    },
  
    desciption: {
        color:'#A1A1A1',
    },

    input: {
        backgroundColor: '#1F1E25',
        borderRadius: 6,
        height: 42,
        color:'#A1A1A1',
        padding: 3,
        alignItems: 'center',   
        textAlign: 'center', 
        fontSize: 16,  
        flex: 1,
    },

    buttonText: {
        color:'#fff',
        padding: 3,  
        fontSize: 24,  
    },

    button: {
        width: 42,
        height: 42,
        borderRadius: 6,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4, 
        marginBottom: 42,
    },

    divScroll: {
        width: '100%',
    }
  })