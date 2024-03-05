import {Component} from 'react'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseDetail extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getDetailData()
  }

  getDetailData = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    console.log(id)
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    console.log(response)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return <div>Hello</div>
  }
}

export default CourseDetail
