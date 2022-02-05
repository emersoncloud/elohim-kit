<script>
  import {team1, team2, playerList} from '$lib/stores.ts';
  import { page } from "$app/stores";
  import { get_match} from "$lib/api.js";
  import App from "../lib/App.svelte";

  get_match($page.params.match).then(
    data => {
           $playerList = data.players;
           $team1 = data.team_1;
           $team2 = data.team_2;
    }
  );
</script>

<App/>