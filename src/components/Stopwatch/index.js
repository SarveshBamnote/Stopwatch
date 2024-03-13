import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0, isTimerRunning: false}

  componentWillUnmount() {
    this.clearTimer()
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false, timer: 0})
  }

  clearTimer = () => {
    clearInterval(this.intervalId)
  }

  onStop = () => {
    this.setState({isTimerRunning: false})
    this.clearTimer()
  }

  onStart = () => {
    this.setState({isTimerRunning: true})
    this.intervalId = setInterval(this.increaseSeconds, 1000)
  }

  increaseSeconds = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      this.setState(prevState => ({timer: prevState.timer + 1}))
    }
  }

  displayTimer = () => {
    const {timer} = this.state

    const minutes = Math.floor(timer / 60)
    const seconds = Math.floor(timer % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="main-container">
        <div className="stopwatch-container">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-heading">
              <img
                className="timer-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="timer">{this.displayTimer()}</h1>
            <div className="buttons-container">
              <button
                className="start button"
                onClick={this.onStart}
                type="button"
              >
                Start
              </button>
              <button
                className="stop button"
                onClick={this.onStop}
                type="button"
              >
                Stop
              </button>
              <button
                className="reset button"
                onClick={this.onReset}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
