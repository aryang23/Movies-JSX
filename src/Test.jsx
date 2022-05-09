import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
    };

    console.log("Constructor was called");
  }

  componentDidMount() {
    //It was to do one time task

    //this ill be inored
    console.log("Component did mount");

    //Jab pehli baar render hoga UI pe, fir uske baad yeh chlega n just one time
  }

  componentDidUpdate() {
    //multiple times: - after every re-render
    //to do something after every re-render

    //it will nto work first time ki render ke baad chal pade
    //hmesha re-render bnne ke baad chlega
    console.log("Component did update was called");
  }

  componentWillMount(){
      //One time
      //When Componet is about to be removed from screen
      //db close that connection
  }
  render() {
    console.log("Render was called");
    return (
      <div>
        <p className="abc"></p>
        <button
          onClick={() => {
            this.setState({ a: 2 });
          }}
        >
            Change State
        </button>
      </div>
    );
  }
}

export default Test;