<script>
    import Player from "./Player.svelte";
    import { playerList } from "./stores";
</script>

<div class="players">
    {#each $playerList as player}
        <div class="player">
            <Player 
                bind:selected={player.selected} 
                name={player.name} 
                elo={player.elo} 
                avatar={player.avatar}
            />
        </div>
    {/each}
</div>

<style>
    .players {
        display: flex;
        justify-content: center;

    }

    .player {
        margin-left: -2%;
    }
</style>
