import React, { Component } from 'react'
import ButtonRaise from './components/ButtonRaise'
import WebCam from './components/WebCam'

class App extends Component {
    render() {
        return (
            <div style = { styles.wrapper }>
              <ButtonRaise />
              <WebCam />
            </div>
          )
    }
}

const styles = {
    'wrapper': {
        display:  'flex',
    }
}

export default App