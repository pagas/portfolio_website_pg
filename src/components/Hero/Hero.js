import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
        <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
        </SectionTitle>

        <SectionText>
            styled-components is the result of wondering how we could enhance CSS for styling React component systems.
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
