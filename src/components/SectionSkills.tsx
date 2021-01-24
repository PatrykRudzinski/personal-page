import React from "react";
import styled from "styled-components";
import { H2 } from "./common/tags";
import { Section } from "./Section";

const SkillContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const SkillHeader = styled.h4`
  font-size: 3vh;
  @media (max-width: 768px) {
    margin: 12px;
  }
`;

const Skill = styled.span`
  margin: 12px;
  font-size: 2.5vh;
  display: inline-block;
  @media (max-width: 768px) {
    margin: 4px;
  }
`;

export default () => {
  return (
    <Section>
      <H2>Skills and tools</H2>
      <SkillContainer>
        <SkillHeader>Backend and system administration</SkillHeader>
        <Skill>Python</Skill>
        <Skill>Django</Skill>
        <Skill>django-rest-framework</Skill>
        <Skill>graphene-django</Skill>
        <Skill>Flask</Skill>
        <Skill>PostgreSQL</Skill>
        <Skill>mySQL</Skill>
        <Skill>Linux</Skill>
        <Skill>Celery</Skill>
        <Skill>Redis</Skill>
        <Skill>AWS (EC2, RDS, S3, Lambda, etc.)</Skill>
        <Skill>nginX</Skill>
        <Skill>docker</Skill>
        <Skill>docker-compose</Skill>
        <Skill>pytest</Skill>
        <Skill>flake8</Skill>
        <Skill>black</Skill>
        <Skill>invoke</Skill>
      </SkillContainer>
      <SkillContainer>
        <SkillHeader>Frontend</SkillHeader>
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>React</Skill>
        <Skill>Redux+Saga</Skill>
        <Skill>Relay</Skill>
        <Skill>jQuery</Skill>
        <Skill>HTML5</Skill>
        <Skill>jest</Skill>
        <Skill>Cypress</Skill>
        <Skill>yarn</Skill>
        <Skill>webpack</Skill>
      </SkillContainer>
      <SkillContainer>
        <SkillHeader>Others</SkillHeader>
        <Skill>Git</Skill>
        <Skill>Github</Skill>
        <Skill>Gitlab</Skill>
        <Skill>Slack</Skill>
        <Skill>Github Actions</Skill>
        <Skill>Jira</Skill>
        <Skill>Pivotal Tracker</Skill>
        <Skill>SCRUM</Skill>
        <Skill>Agile Development</Skill>
      </SkillContainer>
    </Section>
  );
};