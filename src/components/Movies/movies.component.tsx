import Movie from '../Movie/movie.component';

import styles from './movies.module.css';

const Movies: React.FC<{ data: Array<Record<string, any>> }> = ({ data }) => (
  <div className={styles.movies_container}>
    {data?.map((r) => (
      <Movie
        key={r?.show?.id}
        country={r?.show?.country}
        id={r?.show?.id}
        image={r?.show?.image}
        languages={r?.show?.language}
        name={r?.show?.name}
        rating={r?.show?.rating}
        summary={r?.show?.summary}
        url={r?.show?.url}
        genres={r?.show?.genres}
        type={r?.show?.type}
      />
    ))}
  </div>
);

export default Movies;
