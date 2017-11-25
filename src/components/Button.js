import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Button extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    iconName: PropTypes.string,
    iconPosition: PropTypes.oneOf('left', 'right')
  }

  static defaultProps = {
    onPress: () => alert('Button Press'),
    iconPosition: 'right',
    label: 'Button',
    iconName: 'add'
  }

  render () {
    return (
      <TouchableStyled
        onPress={this.props.onPress}
        disabled={this.props.disabled}
      >
        <IconStyled
          name={this.props.iconName}
          position={this.props.iconPosition}
        />
        <LabelText>
          {this.props.label && this.props.label.toUpperCase()}
        </LabelText>
      </TouchableStyled>
    )
  }
}

const LabelText = styled.Text`
color: white;
font-weight: bold;
font-size: 11;
`

const IconStyled = styled(Icon)`
color: white;
position: absolute;
top: 30%;
${props => (props.position === 'right' ? 'right: 10%' : null)};
${props => (props.position === 'left' ? 'left: 10%' : null)};
`

const TouchableStyled = styled.TouchableOpacity`
background-color: ${props => (props.disabled ? '#CCC' : '#d57564')};
height: 25px;
width: 90px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
