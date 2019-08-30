import {useState, useEffect} from "react";

import testData from "./formattedResponse.json";

export function useFetch(url) {
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // async function fetchUrl() {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   setData(json);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchUrl();
  // }, []);

  // setLoading(false);

  return [testData, loading];
}
