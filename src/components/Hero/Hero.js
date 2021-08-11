import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        I am Akash Kaintura
      </SectionTitle>
      <SectionText>
        I am Web Developer  
      </SectionText>
      <Button onclick={() => window.location= 'https://www.akashkaintura.netlify.app'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;