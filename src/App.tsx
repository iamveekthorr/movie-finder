/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from 'react';

import useGetAllMovies from './plugins/react-query/query/useGetMovies';
import { useDebounce } from './hooks/useDebounce.hook';

import './App.css';

import styles from './shared/utils.module.css';

import Movies from './components/Movies/movies.component';

function App() {
  const [query, setQuery] = useState<string>('');

  const [res, setResult] = useState<Array<Record<string, any>>>([]);

  const delay = 300; // Adjust the delay as needed (e.g., 300 milliseconds)

  const search = useDebounce(query, delay);

  const { data } = useGetAllMovies(search);

  useEffect(() => {
    setResult(data);
  }, [search, data]);

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.currentTarget?.value);
  };

  return (
    <>
      <div className="app_main_container ">
        <h1 className="app_text_heading"> search movies and TV shows</h1>

        <div className="app_input">
          <input
            type="search"
            placeholder="enter movie name"
            name="search"
            value={query}
            onChange={onInputChange}
            className={`${styles.u_full_width}`}
          />
        </div>

        {query && (
          <div className="app_sub_text">
            <p> showing search results for "{query}"</p>
          </div>
        )}

        <Movies data={res} />
      </div>
    </>
  );
}

export default App;
