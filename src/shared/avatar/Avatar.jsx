import * as React from 'react';
import './avatar.css';

class Avatar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log();
  //   this.state = {name: 'Jim'};
  // }  
  render() {
    const show = this.props.userName === '' ? 'hidden' : '';

    return (
      <div className={'avatar ' + show} >
        Hi {this.props.userName}, welcome!
      </div>
    );
  }
}

export default Avatar;