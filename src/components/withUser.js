import React from 'react'

const withUser = (Component) => {

  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        name: 'Robert',
        lastName: 'Howington',
        age: 32
      }
    }

      render() {
        return <Component {...this.state} />
      }
    }
  }

  export default withUser