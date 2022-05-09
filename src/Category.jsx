import React from "react";

class Category extends React.Component {
  state = {
    allGenre: [],
    currGenre: "",
  };

  //ComponentDidMount() sirf ek baar call hoga, jab UI pe visible hojayega sab,
  //fir yeh call hoga, fir sab render hoga nd then yeh chal pdega, but uske baad kbhi nhi chlega, bcz it's once in a lifetime

  //Jab new call krenge nd new genre add krenge, fir hum direct fetch krdenge
  componentDidMount() {
    fetch("/genre")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({ allGenre: json });
      });
  }

  render() {
    return (
      <ul class="list-group">
        <li
          class="list-group-item"
          key="allgenre"
          onClick={() => {
            this.props.receiveCurrGenre("All Genre");
          }}
        >
          All Genres
        </li>

        {this.state.allGenre.map((el) => {
          return (
            <li
              class="list-group-item"
              key={el._id}
              onClick={() => {
                this.props.receiveCurrGenre(el.name);
              }}
            >
              {el.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Category;
