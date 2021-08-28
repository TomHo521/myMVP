import React from 'react';
import ReactDOM from 'react-dom';


//damage_dealt
//healing_dealt
//damage_received
//healing_received

class Currentplayerturn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: {
        Name: '',
        HP: 0,
        MP: [],
        main_action: false,
        bonus_action: false,
        reaction: false,
        movement: false,
      },
      main_action_options: {},
      bonus_action_options: {},
      reaction_options: {},
      movement_options: {},
    }
  }




  render () {


    return (

      <table className="main-stat" border="1px" width="100%">
        <th>{this.props.currentplayer.name}</th>
      <tr>
       {this.state.currentPlayer.main_action ? <td>Main Action</td> : <td className="bolded">Main Action</td> }
      </tr>
      <tr>
        <td>Bonus Action </td>
      </tr>
      <tr>
        <td>Movement </td>
      </tr>
      <tr>
        <td>Reaction </td>
      </tr>
     </table>

      

    );
  }
}


class Combatstart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party: {},
      partyInitiative: [],
      currentTurn: 0,
      currentTurnObjects: {
        main_action: false,
        bonus_action: false,
        movement: false,
        reaction: false,
      }
    }
  }

  

  takeTurn() {

    while (!this.state.currentTurnObjects.main_action &&
           !this.state.currentTurnObjects.bonus_action &&  
           !this.state.currentTurnObjects.movement) {
    // engage the current player's active turn
    }
    
    this.setState({currentTurn: ++this.state.currentTurn});
  }

  componentDidMount() {
    //sort by initiative.
    var partyFormation = [];

    for (var x in this.props.party) {
      var initiativeRoll = Math.floor(Math.random() * 20);
      var playerInitiative = {};
      playerInitiative.name = x;
      playerInitiative.initiative = initiativeRoll;
      partyFormation.push(playerInitiative);
      
    }

    let sortedInitiative = partyFormation.sort((a,b) => b.initiative - a.initiative);
    this.setState({partyInitiative : sortedInitiative });
  }

  render() {

    let party_initString = this.state.partyInitiative.map(element => <Currentplayerturn currentplayer={element}/>);

    return (
      <div>
        <h3>Order of Combat</h3>
        <table border="1px" width="30%">
          <th></th>
          {party_initString}
        </table>
      </div>      
    );
  }
}

export default Combatstart;