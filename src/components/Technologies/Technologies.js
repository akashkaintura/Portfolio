import React from 'react';
import { DiAtlassian, DiDatabase, DiFirebase, DiJqueryLogo, DiJsBadge, DiLaravel, DiMaterializecss, DiMysql, DiPhotoshop, DiPhp, DiReact, DiUbuntu, DiUikit, DiWordpress, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I worked with range of Technologies in web development world. 
      From Back-End to Design.
    </SectionText>
    <List>
      <ListItem>
        <div>
          <DiReact size="3rem" />
          <DiJsBadge size="3rem"  />
          <DiJqueryLogo size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, JavaScript, jQuery
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiPhp size="3rem" />
          <DiLaravel size="3rem" />
          <DiMysql size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            PHP, Laravel and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiUikit size="3rem" />
          <DiPhotoshop size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>UX and UI </ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma and Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <div>
          <DiAtlassian size="3rem" />
          <DiMaterializecss size="3rem" />
        </div> */}
        {/* <ListContainer>
          <ListTitle>PMS and UI</ListTitle>
          <ListParagraph>
            Experience with <br />
            Project Management Tools and CSS
          </ListParagraph>
        </ListContainer> */}
        {/* <ListContainer>
          <ListTitle>PMS and UI</ListTitle>
          <ListParagraph>
            Experience with <br />
            Project Management Tools and CSS
          </ListParagraph>
        </ListContainer> */}
      {/* </ListItem> */}
    </List>
  </Section>
)

export default Technologies;
