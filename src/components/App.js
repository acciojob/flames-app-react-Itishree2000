import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: '',
      name2: '',
      relationshipStatus: '',
    };
  }

  calculateRelationship = () => {
    const { name1, name2 } = this.state;
    const name1Arr = name1.split('');
    const name2Arr = name2.split('');

    const uniqueName1 = name1Arr.filter((char) => !name2Arr.includes(char)).join('');
    const uniqueName2 = name2Arr.filter((char) => !name1Arr.includes(char)).join('');

    const totalLength = uniqueName1.length + uniqueName2.length;
    const statusIndex = totalLength % 6;

    switch (statusIndex) {
      case 1:
        this.setState({ relationshipStatus: 'Friends' });
        break;
      case 2:
        this.setState({ relationshipStatus: 'Love' });
        break;
      case 3:
        this.setState({ relationshipStatus: 'Affection' });
        break;
      case 4:
        this.setState({ relationshipStatus: 'Marriage' });
        break;
      case 5:
        this.setState({ relationshipStatus: 'Enemy' });
        break;
      case 0:
        this.setState({ relationshipStatus: 'Siblings' });
        break;
      default:
        this.setState({ relationshipStatus: 'Please Enter valid input' });
        break;
    }
  };

  clearInputs = () => {
    this.setState({
      name1: '',
      name2: '',
      relationshipStatus: '',
    });
  };

  render() {
    const { name1, name2, relationshipStatus } = this.state;

    return (
      <div id="main">
        {/* Input fields */}
        <input
          type="text"
          placeholder="Enter First Name"
          value={name1}
          onChange={(e) => this.setState({ name1: e.target.value })}
          data-testid="input1"
        />
        <input
          type="text"
          placeholder="Enter Second Name"
          value={name2}
          onChange={(e) => this.setState({ name2: e.target.value })}
          data-testid="input2"
        />
        {/* Buttons */}
        <button onClick={this.calculateRelationship} data-testid="calculate_relationship">
          Calculate Relationship Future
        </button>
        <button onClick={this.clearInputs} data-testid="clear">
          Clear
        </button>
        {/* Display result */}
        <h3 data-testid="relationship_status">{relationshipStatus}</h3>
      </div>
    );
  }
}

export default App;
