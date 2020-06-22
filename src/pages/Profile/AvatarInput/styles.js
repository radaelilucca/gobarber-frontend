import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      transform: scale(1.3);
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
      transition: 0.2s;

      &:hover {
        transform: scale(1.3);
      }
    }

    input {
      display: none;
    }
  }
`;
