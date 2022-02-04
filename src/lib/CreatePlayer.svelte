<script>
    import { playerList } from './stores.ts';

    let numCheck;

    let name;
    let valid;
    let elo = null;
    let avatar = "/minimal/minimalistTriangles.png"
    let allAvatars = [];

    function generateAvatar() {
        allAvatars = [
            '/minimal/avocado.png','/minimal/bunnies.png','/minimal/cats.png','/minimal/hearts.png',
            '/minimal/lighthouse.png', '/minimal/minimalistTriangles.png', '/minimal/moon.png',
            '/minimal/mountain.png', '/minimal/saturn.png', '/minimal/streetsign.png', '/minimal/whale.png',
            '/minimal/asstronaunt.png', '/minimal/bakery.png', '/minimal/banana.png', '/minimal/bongocat.png',
            '/minimal/bubbletea.png', '/minimal/butterfly.png', '/minimal/campfire.png', '/minimal/city2.png',
            '/minimal/desert.png', '/minimal/dessert.png', '/minimal/fox.png', '/minimal/gmoney.png',
            '/minimal/hedgehog.png', '/minimal/lighthouse2.png', '/minimal/lighthouse3.png', '/minimal/pineapples.png',
            '/minimal/pizza.png', '/minimal/river.png', '/minimal/river2.png', '/minimal/rocket.png', '/minimal/shrimp.png',
            '/minimal/skyline.png', '/minimal/teahouse.png', '/minimal/watermelon.png', '/minimal/waves.png',
            '/minimal/winterhouse.png', '/minimal/books.png','/minimal/bus.png','/minimal/chairChad.png',
            '/minimal/chemistry.png', '/minimal/earth.png', '/minimal/ferris.png', '/minimal/map.png', '/minimal/runChad.png',
            '/minimal/controller.png', '/minimal/factory.png', '/minimal/phonebeard.png', '/minimal/poolhouse.png',
            '/minimal/stadium.png'
        ]
        
        let randomAv = Math.floor(Math.random() * allAvatars.length);
        avatar = allAvatars[randomAv];
        console.log(randomAv, allAvatars.length)
    }

    function submit(event) {
        if (event.key === 'Enter') {
            savePlayer();
        }
    }


    function savePlayer() {
        numCheck = /\D/.test(elo) //if not numbers return true
        if (numCheck){
            console.log('elo must only contain numbers')
        } else {
            playerList.update(players => {
                return [
                    ...players,
                    {
                        selected: false,
                        name: name,
                        elo: elo,
                        avatar: avatar
                    }
                ]
            });
            name = "";
            elo = null;
            avatar = avatar;
            generateAvatar();
        }
    }

    $: {
        valid = name && !name.empty && !/\D/.test(elo) && !elo.empty;
    }
</script>

<div class = 'template-container'>
    <div class = 'card-grid'>
        <div class='img-box' on:click={generateAvatar}>
            <img src={avatar} alt="avatar"/>
        </div>

       <input placeholder="Enter Name" id='input-name' type="text" bind:value={name}/>

       <input
            placeholder="Enter Elo"
            id='input-elo'
            class:elo-error={/\D/.test(elo)}
            class:elo={!/\D/.test(elo)}
            type="number" bind:value={elo}
            on:keydown={submit}>
       />
    </div>

    <div class='save-player'>
        <input id = "save" type="image" src="arrows-right.png" alt='randomize' disabled = {!valid} on:click={savePlayer}/>
    </div>
</div>

<style>
    .template-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
    }
    
    .card-grid {
        grid-column: 2;
        display: grid;
        margin: 30px auto;
        grid-template-rows: 50px 50px 50px 50px;
        grid-template-columns: 20px 80px 80px 20px;
        width: 200px;
        height: 200px;
        border-radius: 44px;
        box-shadow: 0px 0px 20px 2px darkgoldenrod;
        cursor: pointer;
        border: 6px solid gold;
    }
    
    .save-player{
        grid-column: 3;
        display: flex;
        align-self: center;
        height: 100px;
    }
    
    #save{
        height: 200px;
        border: none;
    }

    .img-box{
        grid-row: 1/5;
        grid-column: 1/5;
        height: inherit;
        border-radius: 40px;
    }

    .img-box img{
        width: 100%;
        height: 100%;
        border-radius: 35px;
    }

    input{
        border-radius: 10px;
    }

    #input-name{
        display: flex;
        align-self: flex-end;
        grid-row: 1;
        grid-column: 2/4;
        width: 160px;
        z-index: 2;
    }

    #input-elo{
        display: flex;
        align-self: flex-end;
        grid-row: 4;
        grid-column: 2/4;
        width: 160px;
        z-index: 2;
    }

    .elo-error{
        color: red;
    }

</style>
