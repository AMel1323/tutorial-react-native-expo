import {View, Text, StyleSheet} from 'react-native'

function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.ftext}>@ Melissa Alves</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000000ff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  ftext:{
    color: "#FFF"
  }
}) 

export default Footer