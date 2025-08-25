import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'

function Header() {
  return (
    <View style={styles.header}>

      <Image
        style={styles.image}
        source={require('../../assets/img/001-video.png')}
      />

      <View style={styles.menu}>

        <Image
          style={styles.image}
          source={require('../../assets/img/002-menu.png')}
        />
      </View>

    </View>


  )
}



const styles = StyleSheet.create({


  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgb(233, 154, 51)",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
  },

  image: {
    width: 40,
    height: 40,

  },


  menu: {
    width: 40,
    height: 40,

  },

})

export default Header