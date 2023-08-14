import { createGlobalStyle } from 'styled-components';
import { normalize } from 'modern-normalize'


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  @import 'swiper/swiper-bundle.min.css';

  @import 'swiper/components/navigation/navigation.min.css';
  @import 'swiper/components/pagination/pagination.min.css';

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    color: #333;
  }

`;

export default GlobalStyle;