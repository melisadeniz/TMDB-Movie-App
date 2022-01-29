import styled from "styled-components";

export const DetailModal = styled.div`
  .bg-modal {
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    width: 700px;
    height: 400px;
    border-radius: 10px;
    padding: 20px 20px;
  }

  .modal-content::-webkit-scrollbar {
    display: none;
  }

  .content_landscape {
    object-fit: contain;
    border-radius: 10px;
  }

  .content-portrait {
    display: none;
    object-fit: contain;
    border-radius: 10px;
  }

  .tagline {
    padding-bottom: 10px;
    align-self: center;
  }

  .content-about {
    padding: 10px;
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    justify-content: space-evenly;
    font-weight: 300;
  }

  .content-description {
    display: flex;
    height: 40%;
    overflow-y: scroll;
    padding: 15px;
    border-radius: 20px;
    scrollbar-width: thin; /* Firefox */
    box-shadow: inset 0 0 5px #000000;
    text-align: justify;
  }

  .content-description::-webkit-scrollbar {
    display: none;
  }

  .close {
    position: absolute;
    top: 0;
    right: 14px;
    font-size: 35px;
    transform: rotate(45deg);
  }
  @media (min-width: 835px) {
    .modal-content {
      flex-direction: row;
      justify-content: space-around;
      padding: 10px 0;
    }

    .content_landscape {
      display: none;
    }

    .content_portrait {
      display: flex;
      width: 38%;
    }

    .content_about {
      width: 58%;
      padding: 0;
      height: 100%;
    }
    .content-title {
      font-size: 3.5vw;
    }
    .content-description {
      font-size: 22px;
    }
  }
`;
