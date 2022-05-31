import { useEffect, useState } from "react";

function Profile({ userData }) {
  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.location}</p>
      <img src={userData.avatar_url} alt={userData.login} width={160} />
    </div>
  );
}

function App({ username }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    setTimeout(() => {
      fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(setUserData)
        .then(setLoading(false))
        .catch(setError);
    }, 3000)
  }, [username]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (!userData) return null;

  if (userData)
    return <Profile userData={userData} />;

  return <div>No data found for {username}</div>;
}

export default App;