import React from 'react'
import PropTypes from 'prop-types'
import { Text, FlatList } from 'react-native'
import styled from 'styled-components/native'
import ProductOptionRow from './ProductOptionRow'

export default class ProductRow extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
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
          <Description ellipsizeMode={'tail'} numberOfLines={2}>
            {this.props.description}
          </Description>
          <FlatList
            data={this.props.options}
            renderItem={({ item }) => <ProductOptionRow {...item} />}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={() => <ListSeparator />}
          />
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
height: 20px;
`
const NumberText = styled.Text`
font-weight: bold;
`
const MainContainer = styled.View`
width: 90%;
`
const Title = styled.Text`
font-size: 14;
font-weight: bold;
height: 30px;
justify-content: center;
background-color: white;
`
const Description = styled.Text`
font-size: 10;
height: 30px;
justify-content: center;
background-color: white;
`
const ListSeparator = styled.View`
border-top-width: 1px;
border-top-color: #CCC;
/* border-style: dotted;  I am getting 'dotted is unsupported' */
`
