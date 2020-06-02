import { useEffect, useState } from "react";

export default function useFetch(): any[] {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?name=rick sanchez"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data);
        // console.log("fetching");
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  }, [url]);
  return [data, isLoading, setUrl];
}
