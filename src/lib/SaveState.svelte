<script>
    import { playerList, team1, team2 } from "./stores.ts";
    import { post_match } from "$lib/api.js";

    let savedMatchLabel = "test";

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
        <button on:click={saveMatch}>
            Save Match
        </button>
        {#if savedMatchLabel}
            <span class="saved-match-label">
                <a class="link" href="https://elo.emersoncloud.net/{savedMatchLabel}">elo.emersoncloud.net/{savedMatchLabel}
                </a>
            </span>
        {/if}
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

    .link {
        color: white;
        text-decoration: underline;
    }
</style>
