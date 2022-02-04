<script>
    export let name;
    export let elo;
    export let selected;
    export let avatar;
</script>


    <div class = 'card-grid' on:click={()=> {selected = !selected}}
        id="{selected ? 'selected' : ''}">
        <div class='img-box'>
            <img src={avatar}  alt="avatar"/>
        </div>
        <div class='text-box'>
            <div>{name}</div>
        </div>
        <div class='elo-box'>
            <div>{elo}</div>
        </div> 
    </div>

    

<style>
    #selected{
        border: 4px solid limegreen;
    }

    .card-grid {
        display: grid;
        margin: 5px auto;
        grid-template-rows: 10px 20px 20px 20px 20px 10px;
        grid-template-columns: 20px 1fr 1fr 20px;
        width: 100px;
        height: 100px;
        border-radius: 20px;
        box-shadow: 0px 0px 20px 2px darkgoldenrod;
        cursor: pointer;
        border: 4px solid white
    }

    .img-box{
        grid-row: 1/5;
        grid-column: 1/5;
        height: inherit;
        border-radius: 25px;
    }

    .img-box img{
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }

    .text-box{
        background-color: black;
        border-radius: 10px;
        color: white;
        grid-row: 2;
        grid-column: 2/4;
        overflow: hidden;
    }
    .elo-box{
        background-color: black;
        border-radius: 10px;
        color: white;
        grid-row: 5;
        grid-column: 2/4;
        overflow: hidden;
    }
</style>
