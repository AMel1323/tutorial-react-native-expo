import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { use, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useAuthStore} from '../stores/useAuthStore'

export default function Initializer() {

    const router = useRouter()
    const { login } = useAuthStore()

    useEffect(() => {
        const checkLogin = async () => {
            const userLoggedString = await AsyncStorage.getItem('userLogged')
            const userLogged = userLoggedString ? JSON.parse(userLoggedString) : null

            if(userLogged?.token){
                login(userLogged)
                router.replace('/home')
            } else {
                router.replace('/login')
            }
        }
        setTimeout(checkLogin, 2000) // Simula uma tela de carregamento por 2 segundos
    }, [])

    return (
        <View style={styles.container}>
            <Text>Meu Site</Text>
            <ActivityIndicator size="large" color="#1d1d55ff" />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})