import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel: +91 8979594537">+91 8979594537</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Mail</LinkTitle>
      <LinkItem href="mailto: akashkaintura@yahoo.com">akashkaintura@yahoo.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Do one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
