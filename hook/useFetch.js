import { useState, useEffect } from "react";
import axios from "axios";

const rapidApiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "298e49defamshfe2514acacc8aebp1213b7jsnaa274353ca34",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const refetch = () => {
    fetch();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
