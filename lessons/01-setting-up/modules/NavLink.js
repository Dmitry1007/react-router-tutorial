import   React  from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    // we're passing along all of our props to Link with the {...spread} syntax
    return( <Link {...this.props} activeClassName="active"/> )
  }
})
