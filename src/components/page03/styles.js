import styled from "styled-components";
import star1 from "../../assets/star1.png"

export const Page03Container = styled.div`
  height: 100vh;
  background-image: url(${star1});
  color: ${(props) => props.theme['white']};

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .sliderWrapper {
    position: relative;
    max-width: 52rem;
    margin: 0 auto;
  }
  .slider {
    display: flex;
    aspect-ratio: 16/9;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
    border-radius: 0.5rem;
  }
  .slider::-webkit-scrollbar {
    display: none;
  }
  .slider img {
    flex: 1 0 100%;
    scroll-snap-align: start;
    object-fit: cover;
  }
  .sliderNav {
    display: flex;
    column-gap: 1rem;
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  .sliderNav a {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme['white']};
    opacity: 0.75;
    transition: opacity ease 250ms;
  }
  .sliderNav a:hover {
    opacity: 1;
  }
`
