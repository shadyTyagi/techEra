import {Link} from 'react-router-dom'
import './index.css'

const Courses = props => {
  const {coursesList} = props
  const {name, logoUrl, id} = coursesList
  return (
    <Link to={`/courses/${id}`}>
      <li className="course-items">
        <img className="course-img" src={logoUrl} alt={name} />
        <h1 className="course-name">{name}</h1>
      </li>
    </Link>
  )
}

export default Courses
