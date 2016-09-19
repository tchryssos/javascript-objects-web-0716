var playlist={
  Aerosmith: "Cryin'",
  Deerhoof: "Exit Only",
  "Smash Mouth": "Walkin' On the Sun"
};

function updatePlaylist (playlist, artistName, songName){
  playlist[`${artistName}`]=`${songName}`;
  return playlist;
};

function removeFromPlaylist(playlist, artistName){
  delete playlist[`${artistName}`];
  return playlist;
}
