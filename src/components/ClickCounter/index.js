import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClicked = () => {
    this.setState(prevState => {
      console.log('clicked')

      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <p className="para">
          The Button has been clicked <span className="span"> {count} </span>
          times
        </p>
        <p className="para1">Click the button to increase the count!</p>
        <button onClick={this.onClicked} type="button" className="button">
          Click Me!
        </button>
      </div>
    )
  }
}

// class ClickCounter extends Component {
//   state = {count: 0}

//   render() {
//     const {count} = this.state
//     return (
//       <div className="bg-container">
//         <p className="para">
//           The Button has been clicked <span className="span">{count}</span>{' '}
//           times
//         </p>
//         <p className="para1">Click the button to increase the count!</p>
//         <button onClick={this.onClicked} type="button" className="button">
//           Click Me!
//         </button>
//       </div>
//     )
//   }
// }

export default ClickCounter
