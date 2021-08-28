import React from 'react';
import ReactDOM from 'react-dom';


function stat_modifier(stat_value) {
  if ((stat_value === 0) || (stat_value === 1))  
    return -5;
  if ((stat_value === 2) || (stat_value === 3))  
    return -4;
  if ((stat_value === 4) || (stat_value === 5))  
    return -3;
  if ((stat_value === 6) || (stat_value === 7))  
    return -2;
  if ((stat_value === 8) || (stat_value === 9))  
    return -1;
  if ((stat_value === 10) || (stat_value === 11))  
    return 0;

  if ((stat_value === 12) || (stat_value === 13))  
    return 1;
  if ((stat_value === 14) || (stat_value === 15))  
    return 2;
  if ((stat_value === 16) || (stat_value === 17))  
    return 3;
  if ((stat_value === 18) || (stat_value === 19))  
    return 4;
  if ((stat_value === 20) || (stat_value === 21))  
    return 5;

  if ((stat_value === 22) || (stat_value === 23))  
    return 6;
  if ((stat_value === 24) || (stat_value === 25))  
    return 7;
  if ((stat_value === 26) || (stat_value === 27))  
    return 8;
  if ((stat_value === 28) || (stat_value === 29))  
    return 9;
  if (stat_value >= 30)  
    return 10;

}


function Characterstats(props) {

  



  return (

  <td width="600px">

    <table class="main-stat" width="100%" border = "1px">
      <th colspan="9">

        <span className="left-shift">Level 19 Elf Fighter</span>
        <span className="right-shift">HP: 345/600</span>
        
      </th>
      <tr>
        <td colspan="3">
          Spell Slots
        </td>
        <td colspan="6">
          Cantrips: 
        </td>
   
      </tr>
      <tr>
        <td>
          Lvl 1: 
        </td>
        <td>
          Lvl 2:  
        </td>
        <td>
          L3: 3
        </td>
        <td>
          L4: 4
        </td>
        <td>
          L5: 5
        </td>
        <td>
          L6: 6
        </td>
        <td>
          L7: 7
        </td>
        <td>
          L8: 8
        </td>
        <td>
          L9: 9
        </td>
      </tr>
    </table>

    <table>
      <tr>
      <td>  </td>
      </tr>
    </table>



    <table className="main-stat" width="100%" border="1px">
      <tr>
        <td>
          <span className="left-shift">Strength (STR): </span>
          <span className="right-shift">{props.stats.STR}</span>
        </td>
        <td>
          <span className="left-shift">Dexterity (DEX):  </span>
          <span className="right-shift">{props.stats.DEX}</span>
        </td>
        <td>
          <span className="left-shift">Constitution (CON):   </span>
          <span className="right-shift">{props.stats.CON}</span>
        </td>
      </tr>

      <tr>
        <td>
          <span className="left-shift">Wisdom (WIS):   </span>
          <span className="right-shift">{props.stats.WIS}</span>
        </td>

        <td>
          <span className="left-shift">Charisma (CHA):   </span>
          <span className="right-shift">{props.stats.CHA}</span>
        </td>

        <td>
          <span className="left-shift">Intellect (INT):   </span>
          <span className="right-shift">{props.stats.INT}</span>
        </td>
      </tr>

    </table>

    <table className="spacer-table" width="100%">
      <th>
      </th>
      <tr>
        <td>
        </td>
      </tr>
    </table>

    <table className="main-stat" width="100%" border="1px">
      
    <tr>
      <td>
        <span className="left-shift">Proficiency:   </span>
        <span className="right-shift">{props.combat.proficiency}</span>
      </td>
      <td>
        <span className="left-shift">Armor Class:   </span>
        <span className="right-shift">{props.combat.ac}</span>
      </td>
      <td>
        <span className="left-shift">Spell Save:   </span>
        <span className="right-shift">{props.stats.WIS + 8 + props.combat.proficiency}</span>
      </td>
    </tr>

    <tr>

      <td>
        <span className="left-shift">Base Attack:   </span>
        <span className="right-shift">{props.combat.attack_dice}</span>
      </td>
      <td>

        Speed: 30ft
        
       
      </td>
      <td>
        <span className="left-shift">Spell Attack:   </span>
        <span className="right-shift">{props.stats.WIS + props.combat.proficiency}</span>
      </td>
    </tr>

    <tr>
      <td>
        <span className="left-shift">Weapon:   </span>
        <span className="right-shift">{props.combat.weapon_dice}</span>
      </td>
      <td>
        <span className="left-shift">Weapon Range:   </span>
        <span className="right-shift">{props.combat.weapon_range}</span>
       
      </td>
      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span>
      </td>
    </tr>

    <tr>
      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span>
      </td>

      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span>
      
      </td>
      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span>
      </td>
    </tr>

    <tr>
      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span>
      </td>
      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span>
      </td>
      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span>
      </td>
    </tr>

    <tr>
      <td>
        <span className="left-shift">Gold:   </span>
        <span className="right-shift">35</span>
      </td>
      <td>
        <span className="left-shift">Silver   </span>
        <span className="right-shift">88</span>
      </td>
      <td>
        <span className="left-shift"> Copper   </span>
        <span className="right-shift">88</span>
      </td>
    </tr>

    <tr>
      <td>
        <span className="left-shift">XP to next:   </span>
        <span className="right-shift">1333</span>
      </td>
      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span>
      </td>
      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span>
      </td>
    </tr>

    <tr>
      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span>
      </td>
      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span>
      </td>
      <td>
        <span className="left-shift">X:   </span>
        <span className="right-shift">yyy</span> 
      </td>
    </tr>

    </table>

    <table className="main-stat" border="1px" width="100%">
      <tr>
        <td>
           
        </td>

        <td>
       
        </td>
        

        <td>
      
        </td>
      </tr>

      <tr>
        <td>
        </td>

        <td>
        </td>

        <td>
        </td>
      </tr>

    </table>

  
  </td>
    
  );

}


class Displayprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Super Evil Dragon Guy",
      testStats: {
        STR: 12,
        DEX: 15,
        CON: 13,
        WIS: 13,
        CHA: 14,
        INT: 16,
      },
      currency: {
        gold: 55,
        silver: 55,
        copper: 90,
      },
      combatStats: {
        proficiency: 5,
        ac: 14,
        attack_dice: '3d8',
        spell_attack: 'prof + WIS',
        spell_save: '8 + prof + WIS',
        speed: '30ft',
        weapon_dice: '1d8',
        weapon_range: '10ft',
      }
    };
    
  }

  componentDidMount() {

  }

  render() {
    return (
    <table width="1000px" border="1px">
 
      <tr>
        
          <h1>{this.state.title}</h1>
        
      </tr>
      <tr>
        
        <td width="400px">
         profile pic here 
         </td>
        <Characterstats stats={this.state.testStats} combat={this.state.combatStats}/>
    
      </tr>
      <tr>
        Character description
      </tr>
    </table>
    );
  }
}

export default Displayprofile;