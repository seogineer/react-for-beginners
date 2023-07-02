import PropTypes from "prop-types";

function MovieDetail({
  coverImg,
  description,
  title,
  year,
  rating,
  runtime,
  genres,
}) {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <th>포스터</th>
          </td>
          <td>
            <img src={coverImg} />
          </td>
        </tr>
        <tr>
          <td>
            <th>제목</th>
          </td>
          <td>
            <p>{title}</p>
          </td>
        </tr>
        <tr>
          <td>
            <th>출시연도</th>
          </td>
          <td>
            <p>{year}</p>
          </td>
        </tr>
        <tr>
          <td>
            <th>줄거리</th>
          </td>
          <td>
            <p>{description}</p>
          </td>
        </tr>
        <tr>
          <td>
            <th>장르</th>
          </td>
          <td>
            {genres.map((g) => (
              <span key={g}>{g} </span>
            ))}
          </td>
        </tr>
        <tr>
          <td>
            <th>상영시간</th>
          </td>
          <td>{runtime} 분</td>
        </tr>
        <tr>
          <td>
            <th>평점</th>
          </td>
          <td>{rating}</td>
        </tr>
      </tbody>
    </table>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
