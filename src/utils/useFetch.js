import { useState, useEffect } from "react";

// a memory for if loading is in inProgress
// to avoid double fetching of each resource in strict mode
const inProgress = {};

export default function useFetch(...urls) {

  //  create a data array (empty items initialle)
  // will get the resault for each url eventually
  const [data, setData] = useState(new Array(urls.length));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if a key consisiting of all urls does not exist inProgress
    // then add fetch + unpack/deserialize fetched data as promises
    // for each url 
    inProgress[urls] =
      inProgress[urls] ||
      urls.map((url) => fetch(url).then((response) => response.json()));
    (async () => {
      // wait for all fetch+json promises to resolve then set data array
      setData(await Promise.all(inProgress[urls]));
      // set loading to false
      setLoading(false);
      // dellete the urls key inProgress
      delete inProgress[urls];
    })();
  }, []);
// return the data + the loading föag as an array 
  return [...data, loading];
}
