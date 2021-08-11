import React from 'react';
import { DiAtlassian, DiDatabase, DiFirebase, DiJsBadge, DiLaravel, DiMaterializecss, DiMysql, DiReact, DiUbuntu, DiWordpress, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I worked with range of Technologies in web development world
    </SectionText>
    <List>
      <ListItem>
        <div>
          <DiReact size="3rem" />
          <DiJsBadge size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Gatsby, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiLaravel size="3rem" />
          <DiFirebase size="3rem" />
          <DiMysql size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Laravel and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiWordpress size="3rem" />
          <DiUbuntu size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>CMS and Network</ListTitle>
          <ListParagraph>
            Experience with <br />
            Wordpress and Networkings
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiAtlassian size="3rem" />
          <DiMaterializecss size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>PMS and UI</ListTitle>
          <ListParagraph>
            Experience with <br />
            Project Management Tools and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies;
