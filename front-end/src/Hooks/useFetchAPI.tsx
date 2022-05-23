import { useEffect, useState } from 'react';

function useFetchAPI<T>(url: string, options: object) {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url, options]);
  return [data];
}

export default useFetchAPI;
