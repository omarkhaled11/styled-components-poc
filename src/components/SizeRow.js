import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import Button from './Button'

export default class SizeRow extends React.Component {
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
margin-top: ${props => props.theme.metrics.M1}
margin-bottom: ${props => props.theme.metrics.M1}
width: 100%;
padding-vertical: ${props => props.theme.metrics.M1};
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
padding-right: ${props => props.theme.metrics.M2};
padding-top: ${props => props.theme.metrics.M1};
${props => props.theme.fonts.medium}
`
const Price = styled.Text`
${props => props.theme.fonts.xLarge}
color: ${props => props.theme.colors.text};
`
