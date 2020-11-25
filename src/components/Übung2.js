import React, { Component } from 'react';
class Übung2 extends Component {
    state = { 
        zahl: 0
     }
     myFunctionResultPlus = () => {
     this.setState({ zahl:this.state.zahl + 1  });
     }
     myFunctionResultMin = () => {
        this.setState({ zahl:this.state.zahl - 1  });
     }
     myFunctionResultReset = (event) => {
        //  console.log(event);
        this.setState({zahl:this.state.zahl * 0});
     }
    render() { 
        return ( 
            <main id="main_2">
            <div id="div_2">
             <div id="function">
                 <button  onClick={this.myFunctionResultMin}>-</button>
                 <h1 id="result_2">{this.state.zahl}</h1>
                 <button onClick={this.myFunctionResultPlus}>+</button>
             </div>
             <div id="reset">
                 <button onClick={this.myFunctionResultReset}>RESET</button>
             </div>


            </div>
            </main>
         );
    }
}
 
export default Übung2;