import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './search';

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "biC5WfOcRVwgK3LR6d1Fhk55GTrARJeR",
          q: search,
          limit: 10,
        },
      })
      .then((res) => {
        let s = res.data.data;
        setData(s);
        setToggle(false);
      });
  }, [search])

  return (
    <div>
      <Search search={search} setSearch={setSearch}/>

      <div>
        {data &&
        data.map((el) => {
          return <img src={el.images.original.url} />;
        })}
       </div>
    </div>
    
  );
}

export default App;
