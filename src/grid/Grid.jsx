import React, { Component, PropTypes } from 'react';

const propTypes = {
  x: PropTypes.number,
  y: PropTypes.number
};

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.setVal = this.setVal.bind(this);
  }

  setVal() {
    this.setState({
      value: this.refs.primary.value
    });
  }

  render() {
    return (
      <form>
        <input ref="primary" type="text" onChange={this.setVal}/>
        <div style={{ float: 'left', whiteSpace: 'nowrap' }}>
          {Array(this.props.x).fill().map((v, x) => {
            return (
              <div key={x} className="row">
                {Array(this.props.y).fill().map((_, y) => {
                  return (
                    <input value={this.state.value * x * y} key={y} type="text" size="3"/>
                  );
                })}
              </div>
            );
          })}
        </div>
      </form>
    );
  }
}

Grid.propTypes = propTypes;

export default Grid;
