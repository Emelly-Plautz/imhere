import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1F1E25',
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
      height: 42,
      color:'#A1A1A1',
      padding: 3,
      borderRadius: 6,
      marginBottom: 8,
    },

    name: {
        color: '#fff',
        flex: 1,
        fontSize: 16,  
        textAlign: "center",
        marginLeft: 20,
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
        backgroundColor: '#E23c44',
        alignItems: 'center',
        justifyContent: 'center',
    },
})