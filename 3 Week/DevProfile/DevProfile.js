async function searchProfile() {
  const profileGit = await fetch("https://api.github.com/users/glautonOsorio");
  let profileData = await profileGit.json();
  document.getElementById("name").innerHTML = profileData?.name;
  document.getElementById("bio").innerHTML = profileData?.bio;
  document.getElementById(
    "locat"
  ).innerHTML = `Localização:${profileData?.location}`;
  document.getElementById(
    "rff"
  ).innerHTML = `Repositórios:${profileData?.public_repos} Seguidores:${profileData?.followers} Seguindo:${profileData?.following}`;
}
searchProfile();
