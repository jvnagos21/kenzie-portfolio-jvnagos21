// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/kenzie-portfolio-jvnagos21`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá! eu sou o {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              SEMPER{" "}
              <Text as="span" type="heading1" color="brand1">
                EVOLVING
              </Text>{" "}
            </Text>
            <Text type="body1" color="grey2">
              confira aqui nesse website, criado com carinho pra você, todos os
              meus projetos e tecnologias
              {/* Discover here in this environment, created especially for you, all
              my projects and technologies */}
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                confira meus projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                veja o código-fonte do portfolio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus Projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos{" "}
                <Text as="span" color="brand5">
                  meus projetos desenvolvidos na kenzie e também pessoais
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
