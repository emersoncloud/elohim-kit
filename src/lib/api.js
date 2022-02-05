export async function get_match(matchId) {
  return fetch("https://elobackend.emersoncloud.net/" + matchId)
    .then(response => response.json());
}

export async function post_match(players, team1, team2) {
  return fetch("https://elobackend.emersoncloud.net/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      players: players,
      team_1: team1,
      team_2: team2
    })
  })
    .then(response => response.json());
}
