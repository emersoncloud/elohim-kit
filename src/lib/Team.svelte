<script>
    import { createEventDispatcher } from 'svelte';
    import Player from "./Player.svelte";
    import randomAdjNoun from "./randomAdjNoun";


    export let team = [];

    const teamName = randomAdjNoun();
    const dispatch = createEventDispatcher();

    let totalElo = 0;
    let averageElo = 0;

    const addToTeam = () => dispatch('addToTeam');

    $: {
        totalElo = team.reduce((a, b) => a += b.elo, 0);
        averageElo = Math.floor(totalElo / team.length);
    }
</script>

<div class='team-name' on:click={addToTeam}>
    <div class="team-heading"> 
        {teamName}
        <div class='elo'>
            {totalElo ? `${totalElo}` : "0"}
        </div>
    </div>
</div>
    
<div class='player-container'>
    {#each team as {selected, name,elo,avatar}}
        <div class="player">
            <Player bind:selected = {selected} {name} {elo} {avatar}/>
        </div>
    {/each}

</div>

<style>
    .team-heading {
        font-size: 1.5em;
        font-weight: bold;
        padding: 10px;
        border-radius: 10px;
        border: solid;
    }

    .team-heading:hover {
        cursor: pointer;
    }

    .player-container {
        display: flex;
        flex-wrap: wrap;
        gap: 5%;
        justify-content: center;
    }

    .player {
        width: 100px;
    }

    .elo {
        overflow: hidden;
        color: lightgray;
    }

    .team-name {
        max-height: 160px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 20px;
    }

    @media (max-width: 640px) {
        .team-heading {
            font-size: 1.25em;
            padding-bottom: 3%;
        }

        .elo {
            font-size: 1.25em;
        }
    }
</style>
