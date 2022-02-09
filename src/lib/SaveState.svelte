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
        <input class="save" type="image" src="save.png" alt="delete" on:click={saveMatch}/>
        {#if savedMatchLabel}
            <a class="link" target="_blank" rel="noopener noreferrer" href="https://elo.emersoncloud.net/{savedMatchLabel}">
                elo.emersoncloud.net/{savedMatchLabel}
            </a>
        {/if}
    </div>
</div>

<style>
    .state {
        display: flex;
        justify-content: space-around;
    }

    .link {
        color: white;
        text-decoration: underline;
        font-size: 1.1em;
    }

    .save-match {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .save {
        border: none;
        height: 50px;
    }
</style>
