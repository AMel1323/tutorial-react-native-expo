import { View, Text, StyleSheet, Pressable} from 'react-native'
import { Image } from 'expo-image'
import FontAwesome from '@expo/vector-icons/FontAwesome';

function CardUser({id, name, email, avatar,users, setUser }) {

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3333/profile/${id}`,{
      method: 'DELETE'
    });
      if(response.ok){
        alert("Usuário deletado com sucesso")
      const updatedUsers = users.filter(user => user.id !== id);//cria um novo array sem o id que foi deletado
      setUser(updatedUsers);
      }else {
        alert("Erro ao deletar usuário")
      }
    
  }

  return (   

    <View style={styles.card}>
      <Image
        style={styles.image}
        source={avatar}
      />
      <View style={styles.info}>
        <Text style={styles.h1}>{name}</Text>
        <Text>{email}</Text>
      </View>
      <View>
        <Pressable onPress={handleEdit}>
        <FontAwesome name="trash" size={24} color="black" />
        </Pressable>
        <Pressable onPress={handleDelete}>
        <FontAwesome name="trash" size={24} color="black" />
        </Pressable>
      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  card: {
    width: '70%',
    padding: 10,
    flexDirection: 'row',
    gap: 15,
    backgroundColor: "rgb(233, 154, 51)",
    borderRadius: 10,
    marginBottom: 15
  },
  image: {
    width: 50,
    height: 60,
    backgroundColor: "#000"
  },
  info: {
    flex: 1,
    flexDirection: 'column',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default CardUser