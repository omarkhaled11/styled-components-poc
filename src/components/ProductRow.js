import React from 'react'
import PropTypes from 'prop-types'
import { Text, FlatList, View } from 'react-native'
import styled from 'styled-components/native'
import SizeRow from './SizeRow'

export default class ProductRow extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        price: PropTypes.number,
        optionName: PropTypes.string
      })
    )
  }

  static defaultProps = {}
  render () {
    return (
      <Container>
        <IconContainer>
          <IconView>
            <NumberText>{this.props.number}</NumberText>
          </IconView>
        </IconContainer>
        <MainContainer>
          <Title ellipsizeMode={'tail'} numberOfLines={1}>
            {this.props.title && this.props.title.toUpperCase()}
          </Title>
          <Description>
            {this.props.options.join(', ')}
          </Description>
          {this.props.sizes.map((item, index) => (
            <View key={index}>
              {index !== 0 && <ListSeparator />}
              <SizeRow {...item} />
            </View>
          ))}
        </MainContainer>
      </Container>
    )
  }
}

const Container = styled.View`
background-color: white;
width: 100%;
padding-horizontal: 5%;
padding-vertical: 5%;
display: flex;
flex-direction: row;
`
const IconContainer = styled.View`
width: 10%;
align-items: flex-start;
`
const IconView = styled.View`
border-width: 2px;
border-color: #46321a;
display: flex;
justify-content: center;
align-items: center;
width: 20px;
margin-vertical: ${props => props.theme.metrics.M2};
`
const NumberText = styled.Text`
font-weight: bold;
color: ${props => props.theme.colors.text};
`
const MainContainer = styled.View`
width: 90%;
`
const Title = styled.Text`
${props => props.theme.fonts.xLarge}
padding-vertical: ${props => props.theme.metrics.M2};
justify-content: center;
color: ${props => props.theme.colors.text};
`
const Description = styled.Text`
${props => props.theme.fonts.small}
padding-vertical: ${props => props.theme.metrics.M3};
justify-content: center;
color: ${props => props.theme.colors.text};
`
const ListSeparator = styled.View`
border-top-width: 1px;
border-top-color: #CCC;
/* border-style: dotted;  I am getting 'dotted is unsupported' */
`
