import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    fetch(url, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setState({
          data,
          loading: false,
        });
      });
  }, [url]);
  return state;
};
