import React from "react";
import ReactDOM from "react-dom";
import Displayprofile from "./displayProfile/displayprofile.jsx"
import Combatstart from "./combatstart/combatstart.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    // default state
    this.state = {
      // The team will need a product review rating to render on multiple components
      party : {
        Lia: {player_id: 1},
        Midir: {player_id: 2},
        Perg: {player_id: 3},
        Po: {player_id: 4},
        Cassian: {player_id: 5},
      }
    } 
  }
  render () {
    return (
      <div>
        {/* <Combatstart party={this.state.party}/> */}
        <Displayprofile/>
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));

