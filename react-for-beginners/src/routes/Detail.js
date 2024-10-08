import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../routes/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const response = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(response);
    setMovie(response.data.movie);
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${movie?.medium_cover_image})` }} // 포스터 이미지를 배경으로 설정
          ></div>
          <div className={styles.info}>
            <img src={movie.medium_cover_image} alt={movie.title} className={styles["movie-img"]} />
            <div className={styles.text}>
              <h1 className={styles["movie-title"]}>{movie.title}</h1>
              <p className={styles["movie-summary"]}>{movie.summary}</p>
              <p className={styles["movie-release"]}>
                {movie.year} / {movie.runtime}분
              </p>
              <ul className={styles.genre}>
                {movie.genres.map((genre) => (
                  <li key={genre} className={styles["genre-item"]}>{genre}</li>
                ))}
              </ul>
              <p>
                {movie.description_full}
              </p>
            </div>
          </div>
        </>
      )
      }
    </div >
  )
}

export default Detail;