import { FC } from 'react';
import { MovieProps } from '../../types/movie-props';
import { parseHTML } from '../../utilities/parseHTML';

import styles from './movie.module.css';
import utils from '../../shared/utils.module.css';

const Movie: FC<MovieProps> = (props) => (
  <div className={styles.movie_container}>
    <div className={`${styles.movie_banner_container}`}>
      <img src={props.image?.medium} alt={props.name} />
    </div>

    <div
      className={`${utils.u_flex} ${utils.u_flex_col} ${utils.u_gap_1} ${utils.u_align_flex_start}`}
    >
      <p className={styles.movie_title_heading}>{props.name}</p>

      <div
        className={`${utils.u_flex} ${utils.u_flex_col} ${utils.u_gap_sm} ${utils.u_align_flex_start}`}
      >
        <div className={`${utils.u_flex} ${utils.u_gap_1}`}>
          <p className={`${utils.u_text_transform_capitalize}`}>type</p>
          <p>{props.type}</p>
        </div>

        <div
          className={`${utils.u_flex} ${utils.u_flex_col} ${utils.u_gap_sm}`}
        >
          <p className={`${utils.u_text_transform_capitalize}`}>genres</p>
          <div
            className={`${utils.u_flex} ${utils.u_align_items_center} ${utils.u_gap_1}`}
          >
            {props.genres.length ? (
              props.genres.map((el) => (
                <p key={el} className={`${styles.movie_genre}`}>
                  {el}
                </p>
              ))
            ) : (
              <p>N/A</p>
            )}
          </div>
        </div>

        <p
          className={`${utils.u_text_transform_capitalize} ${utils.u_font_size_12px}`}
        >
          rating : {props.rating.average ? props.rating.average : 'n/a'}
        </p>

        {parseHTML(props.summary, { className: `${styles.movie_summary}` }).map(
          (el) => el
        )}

        <a
          href={props.url}
          target="_blank"
          className={`${styles.movie_visit_site_btn}`}
        >
          visit site
        </a>
      </div>
    </div>
  </div>
);

export default Movie;
