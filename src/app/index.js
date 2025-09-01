import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Card1 from '../components/Card1'
import Footer from '../components/Footer'
import { Link } from 'expo-router'

export default function Home() {
  return (
    <View style={styles.container}>

      <Header />

      <view style={styles.buttons}>
        <Link href="contact" style={styles.contact}> <Text >Contato</Text></Link>

        <Link href="about" style={styles.about}> <Text >Sobre</Text></Link>
      </view>

      <View style={styles.content}>
        <Card1 titulo="House of Dragons"
          desc="Guerra pelo trono dos Dragões"
          img="https://jpimg.com.br/uploads/2024/07/5-personagens-de-house-of-the-dragon-para-conhecer-melhor.jpg" />
        <Card1 titulo="Lord of the Rings"
          desc="Batalha contra Sauron na Terra Média"
          img="https://m.media-amazon.com/images/M/MV5BNmVmZGQ2ZTctYzE4NC00YzkxLThhNjYtNGIyZjJmZGEwMjUzXkEyXkFqcGc@._V1_.jpg" />
        <Card1 titulo="Dexter"
          desc="O serial killer de serial killer"
          img="https://br.web.img2.acsta.net/pictures/210/032/21003280_20130504002100017.jpg" />






        <View style={styles.vermais}>
          <Text>Ver mais..</Text>
        </View>
      </View>

      <Footer />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: " #3daff1",
    justifyContent: "center",
    alignItems: "center"

  },


  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "rgb(89, 196, 229)",

  },


  vermais: {
    backgroundColor: "#rgb(233, 154, 51)",
    width: 90,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto"


  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#3daff1",
    paddingHorizontal: 10,


  },
  contact: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  about: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  }
})