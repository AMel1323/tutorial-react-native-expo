import { View, Text, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import Card1 from './src/components/Card1'
import Footer from './src/components/Footer'

export default function App() {
  return (
    <View style={styles.container}>

      <Header />



      <View style={styles.content}>
        <Card1 titulo="House of Dragons" 
        desc="Guerra pelo trono dos Dragões"  
        img="https://jpimg.com.br/uploads/2024/07/5-personagens-de-house-of-the-dragon-para-conhecer-melhor.jpg"/>
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

})