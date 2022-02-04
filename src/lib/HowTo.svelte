<script>
    let rules = false;
</script>
<div id='tutorial'>
    {#if rules}
        <div id='rules' on:click={()=> {rules = !rules}}>
            <span id='welcome'>Welcome to Elohim! </span>
            <p> First enter your name and ELO. <br> ---------------------------------- <br>
                Once you've added players, you can move them to teams by selecting the player and
                the team you want to move them to respectively. <br> ---------------------------------- <br> At any time you can
                click the shuffle button to randomize, or the scales to balance by ELO.</p>

        </div>
    {:else}
        <div id="test">
            <p id='how-to' on:click={()=> {rules = !rules}}>?</p>
        </div>
    {/if}
</div>

<style>
    #tutorial {
        display: flex;
        height: 1em;
        justify-content: center;
    }

    #welcome {
        font-size: 2rem;
        color: gold;
    }

    #test {
        margin-left: auto;
    }

    #how-to {
        color: gold;
        /*width: 30px;*/
        font-size: 2em;
        border: 3px solid;
        border-radius: 30px;
        padding-left: 10px;
        padding-right: 10px;
    }

    #rules {
        position: absolute;
        font-size: 1.1rem;
        padding: 40px;
        width: 470px;
        height: 220px;
        border-radius: 20px;
        color: white;
        background: black;
        z-index: 5;
    }

    @media (max-width: 640px) {
        #rules{
            width: 380px;
            height: 220px;
        }
    }
</style>
