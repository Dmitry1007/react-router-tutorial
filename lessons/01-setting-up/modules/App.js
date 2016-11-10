import   React   from 'react'
import { Link, IndexLink }  from  'react-router'
import   NavLink from './NavLink'
import   Home    from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h3>React Router Tutorial</h3>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
