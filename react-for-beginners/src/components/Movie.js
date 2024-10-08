import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../components/Movie.module.css";

function Movie({ id, coverImg, title }) {
  return (
    <div className={styles.container}>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`movie/${id}`} className={styles["movie-title"]}>{title}</Link>
      </h2>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;