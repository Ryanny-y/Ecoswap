export let user = {};

export async function getUserData() {
  
  const response = await fetch('https://ecocycle-backend.onrender.com/userData', {
    method: 'GET',
    credentials: "include"
  });

  const data = await response.json();
  user = data.user;
}