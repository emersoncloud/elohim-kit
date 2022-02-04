<script lang="ts">
    import Header from '$lib/Header.svelte';
    import SaveState from "$lib/SaveState.svelte";
    import Players from '$lib/Players.svelte';
    import CreatePlayer from "$lib/CreatePlayer.svelte";
    import Teams from '$lib/Teams.svelte'
    import HowTo from "$lib/HowTo.svelte";
</script>

<main>
    <Header/>
    <div class='motherload'>
        <div class='daughterload'>
            <SaveState />
            <HowTo />
            <CreatePlayer />
            <Players />
            <Teams />
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-family: Georgia, 'Times New Roman', Times, serif;
        width: 100%;
        background: linear-gradient(black 10%, #212121 50%, black 100%);
    }

    .motherload {
        display: flex;
        padding: 20px;
        justify-content: center;
    }

    .daughterload {
        max-width: 1100px;
        width: 100%;
    }


    :global(body) {
        padding: 0;
        background-color: black;
        transition: background-color 0.3s;
    }
</style>