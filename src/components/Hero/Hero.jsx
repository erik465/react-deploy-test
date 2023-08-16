import React from 'react';
import { StyledHero } from './Hero.styled';
import TypedText from '../Auxiliar/TypedText';
// Import Swiper styles

const welcomeText = "Welcome back again, let's see your progress on your tasks"

const Hero = () =>{
    
    return (
    <StyledHero>
       <TypedText string={welcomeText} maxWidth={750} minHeight={194}/>
    </StyledHero>
    )
}

export default Hero;