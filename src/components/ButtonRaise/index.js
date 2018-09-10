import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeState } from '../../actions'

class ButtonRaise extends Component {

  clickFunction() {
    let self = this
    self.props.changeState('primary')
  }

  render() {
    console.log('props', this.props);
    return (
      <div style={styles.child}>
        <Button onClick={this.clickFunction.bind(this)} variant="contained" color={this.props.val}>
          {this.props.val}
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapstate: ', state);
  return {
    val: state.val
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeState }, dispatch)
}

const styles = {
  'child': {
    flex: 1
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonRaise)