import React from "react";
import "./App.css";
import { CartList } from "./components/cart-list";
import SearchBox from "./components/search-box";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  // cần tìm hiểu hàm này
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    // const { monsters, searchField } = this.state;
    // const filteredMonsters = monsters.filter((monters) =>
    //   monters.name.toLowerCase().includes(searchField.toLowerCase),
    // );
    const { monsters, searchField } = this.state;

    // phương thức he include () xác định xem một mảng có bao gồm một giá trị nhất định trong số các mục nhập của nó hay không, trả về true hoặc false nếu thích hợp.
    const monstersFiltered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      <div className="App">
        <h1 className="title">Monster List</h1>
        <SearchBox
          placeholder="Search"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />

        <CartList monsters={monstersFiltered} />
      </div>
    );
  }
}

export default App;
