import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Flowpoint, Flowspace } from 'flowpoints';

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
        
          selected_point: null,
          
          flowpoints: {
            "a": {
              position: { x:50, y:50 },
              outputs: {
                "b": {
                  output:"right",
                  input:"left",
                  outputColor:"blue",
                  inputColor:"white",
                  width:3
                //   onClick={(key_a, key_b) => { ... }}
                }
              }
            }
          }
        }
      }

      render() {
        return (
          <Flowspace
            theme="indigo"
            variant="outlined"
            background="black"
            style={{ height:"100vh", width:"100vw" }}
            onClick={e => {
              this.setState({ selected_point:null })
            }}
            selected={this.state.selected_point}>
            {
              Object.keys(this.state.flowpoints).map(key => {
                const point = this.state.flowpoints[key]
                return (
                  <Flowpoint
                        key={key}
                        snap={ x:10, y:10 }
                        startPosition={point.pos}
                        onClick={() => {
                        var selected_point = this.state.selected_point
                        if (selected_point === key) {
                            selected_point = null
                        } else {
                            selected_point = key
                        }
                        this.setState({selected_point})
                        }}
                        onDrag={position => {
                        var flowpoints = this.state.flowpoints
                        flowpoints[key].position = position
                        this.setState({flowpoints})
                        }}> {"Hello from " + key}
                    </Flowpoint>
                )
              })
            }
          </Flowspace>
        )
      }
    }
     
    ReactDOM.render(<App />, document.getElementById('root'))