import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function About() {

    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text>Página de Sobre</Text>
            <Button
                title='Home'
                onPress={() => router.replace('/')}
            ></Button>

            <Button
                title='Contato'
                onPress={() => router.push('/contact')}>
            </Button>
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