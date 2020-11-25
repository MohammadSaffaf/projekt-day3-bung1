import React, { Component } from 'react';

class Übung1 extends Component {
    state = { 
        inVisible: true,
        inVisible2: true
     }
     handleIsVisible = () => {
        this.setState({ isVisible: !this.state.isVisible  });
        
    }
    handleIsVisibleDiv = () =>{
        this.setState({ isVisible2: !this.state.isVisible2  });
    }
    render() { 
        return ( 
            <main style={{backgroundColor:"lightgray",height:"80vh",paddingTop:"10%",fontSize:"30px",color:"#fff"}}>
            <div style={{backgroundColor:"gray",textAlign:"center",width:"70%",marginLeft:"15%",paddingTop:"2.5%",paddingBottom:"2.5%",border:"4px solid #fff"}}>
                <div >
                <label style={{marginRight:"60%"}} > Why is React great?</label>
                <input type="button" value="+" onClick={this.handleIsVisible}/>
                </div>
                <div style={{display: this.state.isVisible ? "block" : "none",marginTop:"2%"}}>
                    <p>_____________________________________________________________________________</p>
                <label style={{marginRight:"60.5%"}}> Fast learning Curve</label>
                <input type="button" value="+" onClick={this.handleIsVisibleDiv}/>
                </div>
                <div style={{display: this.state.isVisible2 ? "block" : "none" , textAlign:"left",width:"90%", marginLeft:"10%",marginTop:"5%"}}>React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.
</div>
            </div>
            </main>
         );
    }
}
 
export default Übung1;