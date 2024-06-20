import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

// Data
import { bookCover } from "../_mock/bookData";

// images
import likeIcon from "../images/likeIcon.svg";
import flikeIcon from "../images/fLikeIcon.svg";

const Book = ({ book }) => {
  const navigate = useNavigate();

  const handleLikeBook = () => {
    // 문제 ) 로컬 스토리지에서 token 값을 받아와 token 변수에 할당해주세요.
    const token = ""; // 이 코드를 수정하시면 됩니다.

    // 문제 ) 토큰이 존재하면 axios를 사용하여 좋아요 여부 변경 API를 호출하고,
    // 그게 아니면 navigate를 사용하여 로그인 페이지로 이동하게 해주세요.
    if (token) {
      axios({
        method: "", // 이 코드를 수정하시면 됩니다.
        url: "", // 이 코드를 수정하시면 됩니다.
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
          throw new Error(error);
        });
    } else {
      // navigate를 사용하여 로그인 페이지로 이동하는 코드 작성
      navigate("/login");
    }
  };

  return (
    <Wrapper>
      <BookCover data={bookCover[book.id - 1]} />
      <TitleWrapper>
        {book.name}
        {book.isLiked ? (
          <img src={flikeIcon} alt="flikeIcon" onClick={handleLikeBook} />
        ) : (
          <img src={likeIcon} alt="likeIcon" onClick={handleLikeBook} />
        )}
      </TitleWrapper>
    </Wrapper>
  );
};

export default Book;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #6b6c6d;
  font-weight: 600;
`;

const BookCover = styled.div`
  width: 150px;
  height: 220px;
  background-image: url(${(props) => props.data});
  background-size: contain;
  background-repeat: no-repeat;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;

  img {
    width: 30px;
    height: 30px;
  }
`;
