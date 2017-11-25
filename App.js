import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import ProductRow from './src/components/ProductRow'

const product2Options = [
  {
    price: 1990,
    optionName: 'Small'
  },
  {
    price: 2335,
    optionName: 'Large'
  }
]
const product1Options = [
  {
    price: 1990
  }
]

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ProductRow
          number={1}
          title={'tandori grilladur mango kjuklingur'}
          description={
            'grilladur mango kjuklingur grilladur mango kjuklingur grilladur mango kjuklingur'
          }
          options={product1Options}
        />
        <ProductRow
          number={2}
          title={'rettur hjolarans'}
          description={
            'grilladur mango kjuklingur grilladur mango kjuklingur grilladur mango kjuklingur'
          }
          options={product2Options}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
