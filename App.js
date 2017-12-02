import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import ProductRow from './src/components/ProductRow'
import Theme from './Theme'

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
      <ThemeProvider theme={Theme}>
        <View style={styles.container}>
          <ProductRow
            number={1}
            title={'tandori grilladur mango kjuklingur'}
            options={[
              'grilladur mango kjuklingur',
              'grilladur mango kjuklingur',
              'grilladur mango kjuklingur'
            ]}
            sizes={product1Options}
          />
          <ProductRow
            number={2}
            title={'rettur hjolarans'}
            options={[
              'grilladur mango kjuklingur',
              'grilladur mango kjuklingur',
              'grilladur mango kjuklingur',
              'grilladur mango kjuklingur',
              'grilladur mango kjuklingur',
              'grilladur mango kjuklingur'
            ]}
            sizes={product2Options}
          />
        </View>
      </ThemeProvider>
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
