<script>
    import { playerList, team1, team2 } from "./stores.ts";
    import { post_match } from "$lib/api.js";

    let savedMatchLabel = "";

    function saveMatch() {
        post_match($playerList, $team1, $team2).then(data => {
            savedMatchLabel = data.label;
            console.log(savedMatchLabel);
        }).catch(error => {
            console.log(error);});
    }
</script>

<div class="state">
    <div class="save-match">
        {#if savedMatchLabel}
            <span class="saved-match-label">{savedMatchLabel}</span>
        {/if}
        <button on:click={saveMatch}>
            save match
        </button>
    </div>
</div>

<style>
    .state {
        display: flex;
        justify-content: space-around;
    }

    .saved-match-label {
        color: white;
    }
</style>
