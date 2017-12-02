import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Touchable from 'react-native-platform-touchable'

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
      <Touchable onPress={this.props.onPress} disabled={this.props.disabled}>
        <TouchableView>
          <IconStyled
            name={this.props.iconName}
            position={this.props.iconPosition}
          />
          <LabelText>
            {this.props.label && this.props.label.toUpperCase()}
          </LabelText>
        </TouchableView>
      </Touchable>
    )
  }
}

const LabelText = styled.Text`
color: ${props => props.theme.colors.buttonText};
${props => props.theme.fonts.large}
`

const IconStyled = styled(Icon)`
color: white;
position: absolute;
top: 30%;
${props => (props.position === 'right' ? 'right: 10%' : null)};
${props => (props.position === 'left' ? 'left: 10%' : null)};
`

const TouchableView = styled.View`
background-color: ${props => (props.disabled ? '#CCC' : props.theme.colors.buttonBackground)};
border-radius: ${props => props.theme.metrics.buttonBorderRadius};
height: ${props => props.theme.metrics.buttonHeight};
width: ${props => props.theme.metrics.buttonWidth};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
