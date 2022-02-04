<script>
    import {team1, team2, playerList} from './stores.ts';

    let inputMatchLabel = "";
    let savedMatchLabel = "";

    function loadMatch() {
        fetch("https://elobackend.emersoncloud.net/" + inputMatchLabel)
            .then(response => response.json())
            .then(data => {
                $playerList = data.players;
                $team1 = data.team_1;
                $team2 = data.team_2;
                console.log(data);
            }).catch(error => {
            console.log(error);
        });
    }

    function saveMatch() {
        let pList = $playerList;
        let t1 = $team1;
        let t2 = $team2;

        fetch("https://elobackend.emersoncloud.net/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                players: pList,
                team_1: t1,
                team_2: t2
            })
        })
            .then(response => response.json())
            .then(data => {
                savedMatchLabel = data.label;
                console.log(savedMatchLabel);
            }).catch(error => {
            console.log(error);
        });
    }
</script>

<div class="state">
    <div class="load-match">
        <input class="match-code-input" placeholder="match code" bind:value={inputMatchLabel}/>
        <button on:click={loadMatch}>
            load match
        </button>
    </div>

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

    .match-code-input {
        width: 100px;
    }

    .saved-match-label {
        color: white;
    }
</style>
