import React from 'react'
class ConceptRow extends React.Component {
    render() {
      return (
        <tr>
            <th scope="row">{ this.props.name }</th>
            
                {
                    this.props.status === 'Completed' && (
                        <td>
                            Completed <i className="fas fa-check green"></i>
                        </td>
                    )
                }
                {
                    this.props.status !== 'Completed' && (
                        <td>
                            Not Complete <i className="fas fa-times red"></i>
                        </td>
                    )
                }                
            
        </tr> 
      );
    }
  }

  export default ConceptRow;