import { useState, useEffect } from "react";

export default function App() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  fetch(`https://eldenring.fanapis.com/api/creatures`)
   .then((response) => console.log(response));
 }, []);

 return <div className="App">App</div>;
}