import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Courses from '../Courses'
import './index.css'

class Home extends Component {
  state = {
    techEraData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTechData()
  }

  getTechData = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    const data = await response.json()
    // console.log(data)
    const updatedData = data.courses.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      logoUrl: eachItem.logo_url,
    }))
    this.setState({techEraData: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div className="item">
      <Loader type="bubble-scale" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {techEraData, isLoading} = this.state
    return (
      <div className="main-container">
        {isLoading ? (
          this.renderLoader()
        ) : (
          <>
            <h1 className="heading">Courses</h1>
            <ul className="courses-container">
              {techEraData.map(course => (
                <Courses coursesList={course} key={course.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
