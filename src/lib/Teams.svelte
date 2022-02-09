<script>
  import Team from './Team.svelte';
  import {team1, team2, playerList} from './stores.ts';
  import elohim from './elohim';
  import SaveState from "$lib/SaveState.svelte";

  let newPlayerList = [];

  function auto() {
    if ($team1.length > 0 || $team2.length > 0){
      newPlayerList = [...$playerList,...$team1,...$team2];
      [$team1, $team2] = elohim(newPlayerList);
      $playerList = [];
    } else {
      [$team1, $team2] = elohim($playerList);
      $playerList = [];
    }
  }

  function randomize() {
    let array = $playerList.concat($team1).concat($team2);
    $playerList = [];
    $team1 = [];
    $team2 = [];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    $team1 = [...$team1, ...array.slice(0, array.length/2)];
    $team2 = [...$team2, ...array.slice(array.length/2)];
  }

  function addTeamOne(){
    const unselectedPlayers = [];
    for (let i = 0; i<$playerList.length; i++ ){
      if ($playerList[i].selected === true){
        $team1 = [...$team1, $playerList[i]];
        $playerList[i].selected = false;
      } else {
        unselectedPlayers.push($playerList[i]);
      }
    }

    $team2.forEach(obj => {
      if (obj.selected) {
        $team1.push(obj)
      }
    })
    $team2 = $team2.filter(obj => !obj.selected)
    $team1 = $team1.map(obj => {
      if (obj.selected) {
        obj.selected = false
      }
      return obj;
    });

    $playerList = unselectedPlayers;
  }

  function addTeamTwo(){
    const unselectedPlayers = [];
    for (let i = 0; i<$playerList.length; i++ ){
      if ($playerList[i].selected === true){
        $team2 = [...$team2, $playerList[i]];
        $playerList[i].selected = false;
      } else {
        unselectedPlayers.push($playerList[i]);
      }
    }
    $team1.forEach(obj => {
      if (obj.selected) {
        $team2.push(obj)
      }
    })
    $team1 = $team1.filter(obj => !obj.selected)
    $team2 = $team2.map(obj => {
      if (obj.selected) {
        obj.selected = false
      }
      return obj;
    });

    $playerList = unselectedPlayers;
  }

  function deleteSelectedPlayers() {
    $playerList = $playerList.filter(player => !player.selected);
    team1.update(team1 => team1.filter(player => !player.selected));
    team2.update(team2 => team2.filter(player => !player.selected));
  }

</script>

<div class="button-container-container">
  <input class="delete" type="image" src="clear.png" alt="delete" on:click={deleteSelectedPlayers}/>

  <SaveState/>
  <div class="button-container">
    <input class="randomize" type="image" src="Randomize.png" alt='randomize' on:click={randomize}/>
    <input class="scale" type="image" src="Balance.png" alt='auto-balance' on:click={auto}/>
  </div>
</div>

<div class="teams-container">
  <div class="team team-1">
    <Team bind:team={$team1} on:addToTeam={addTeamOne}/>
  </div>
  <hr class="line"/>
  <div class="team team-2">
    <Team bind:team={$team2} on:addToTeam={addTeamTwo}/>
  </div>
</div>

<style>

  .button-container-container {
    display: flex;
    justify-content: space-between;
  }

  .button-container{
    display:flex;
    justify-content: flex-end;
    padding-bottom: 20px;
  }

  .scale{
    display: flex;
    border: none;
    height: 70px;
  }

  .randomize {
    display:flex;
    border: none;
    height: 50px;
    margin-top: 15px;
    margin-right: 15px;
  }

  .delete {
    border: none;
    height: 50px;
    margin-top: 15px;
    padding-left: 10px;
  }

  .line {
    border: 2px solid;
    color: rgb(54, 54, 54);
    z-index: 1;
  }


  .team {
    width: 48%;
  }

  .team-1 {
    color: yellowgreen;
    padding-right: 0.65%;
  }

  .team-2 {
    color: tomato;
  }


  .teams-container{
	display: flex;
    max-width: none;
    padding: 1em;
	align-self: flex-end;
	justify-content: space-around;
    border: solid rgb(54, 54, 54);
    border-radius: 10px;
  }
</style>
