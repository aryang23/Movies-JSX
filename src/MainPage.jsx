import React from "react";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  state = { userData: [] };

  componentDidMount() {
    fetch("./user.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          userData: json,
        });
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.userData.map((el) => (
            <li key={el.id}>
                <Link to={`/user/${el.id}`} >{el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MainPage;
