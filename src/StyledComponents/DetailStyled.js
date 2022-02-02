import styled from "styled-components";

export const DetailModal = styled.div`

  .detail-background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0px
  }


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
    width: 760px;
    height: 460px;
    border-radius: 20px;
    padding: 20px 20px;
  }

  .modal-content::-webkit-scrollbar {
    display: none;
  }

  .content-landscape {
    object-fit: contain;
    border-radius: 10px;
    margin: 5px 120px;
  }

  .content-portrait {
    display: none;
    object-fit: contain;
    border-radius: 10px;
  }

  .tagline {
    padding-bottom: 0px;
    align-self: center;
  }

  .content-about {
    padding: 0px 20px;
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    justify-content: space-evenly;
    font-weight: 100;
  }

  .content-description {
    display: flex;
    height: 30%;
    overflow-y: scroll;
    padding: 20px 20px 40px 20px ;
    border-radius: 20px;
    scrollbar-width: thin; 
    box-shadow: inset 0 0 5px #000000;

    p { 
     font-size: small;
  }

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
    .content-crew {
      list-style: none;
      float: right;
    }
    .crew-text {
      b {
        font-weight: bold;
      }
      font-size: 13px;
    }
  }

  .carousel {
    display: flex;
    overflow-x: scroll;
    padding: 10px;
    flex-direction: row;
    width: 750px;
    height: 300px;
    border-radius: 10px;
    &::-webkit-scrollbar {
        height: 13px;
    }
    &::-webkit-scrollbar-thumb {
        background: gray; 
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 3px black; 
        border-radius: 10px;
    }
  }

    .carouselItem {  
      object-fit: contain;
      padding: 10px;
    }
    .carouselItem__img {
      border-radius: 10px;
      margin-bottom: 10px;
      box-shadow: 0px 0px 5px black;
    }
`;
