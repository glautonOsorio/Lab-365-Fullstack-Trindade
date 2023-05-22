async function searchProfile() {
  const profilePickle = await fetch(
    "https://rickandmortyapi.com/api/character/265"
  );
  let data = await profilePickle.json();
  document.getElementById("name").innerHTML = data?.name;
  document.getElementById(
    "bio"
  ).innerHTML = `Status:${data?.status} | Species:${data?.species} | Type:${data?.type} | Gender:${data?.gender}`;
}
searchProfile();
