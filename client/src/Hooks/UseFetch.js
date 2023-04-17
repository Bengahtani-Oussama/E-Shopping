import axios from "axios";
import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fatchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);

        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fatchData();
  }, [url]);
  return { data, loading, error };
};

export default UseFetch;
