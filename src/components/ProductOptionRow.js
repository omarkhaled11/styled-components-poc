import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import Button from './Button'

export default class ProductRow extends React.Component {
  static propTypes = {
    price: PropTypes.number,
    optionName: PropTypes.string
  }

  static defaultProps = {
    price: 0
  }

  render () {
    return (
      <Container>
        <PriceAndOption>
          {this.props.optionName &&
            <OptionName>
              {this.props.optionName}
            </OptionName>}
          <Price>
            {this.props.price} kr.
          </Price>
        </PriceAndOption>
        <Button label={'panta'} />
      </Container>
    )
  }
}

const Container = styled.View`
height: 40px;
width: 100%;
padding-vertical: 2px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const PriceAndOption = styled.View`
flex-direction: row;
justify-content: flex-start;
align-items: center;
`
const OptionName = styled.Text`
padding-right: 5px;
padding-top: 8px;
font-size: 10;
font-weight: bold;
`
const Price = styled.Text`
font-size: 16;
font-weight: bold;
`
