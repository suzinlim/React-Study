import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../routes/Home.module.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Nav from "../components/Nav";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(response.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  const settings = {
    arrows: false,  // 화살표 표시
    infinite: true,  // 무한 반복
    slidesToShow: 5,  // 슬라이드에 보여지는 아이템 개수
    slidesToScroll: 1,  // 슬라이드 넘기는 아이템 개수
    autoplay: true,  // 자동 재생
    autoplaySpeed: 2000,  // 자동 재생 속도 (밀리초 단위)
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '10px',
  };

  return (
    <div>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <Nav />
          <div className={styles.slider}>
            <Slider {...settings}>
              {movies.map(movie => (
                <div className={styles["slider-item"]} key={movie.id}>
                  <Movie
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                    className={styles["movie-item"]}
                  />
                </div>
              ))}
            </Slider>

          </div>
        </div>
      )}
    </div>
  );
}

export default Home;