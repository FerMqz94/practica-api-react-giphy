import React, { Component } from 'react'
import Card from './Card'

export class ContainerCard extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container my-4">
        <div className="row gap-2">

          {
            this.props.items.map(item => {
              return <Card {...item}/>
            })
          }
        

        </div>        
      </div>
    )
  }
}

export default ContainerCard
