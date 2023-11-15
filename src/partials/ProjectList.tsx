import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from "astro-boilerplate-components";

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Ivan the Inspector"
        description="Ecommerce site for a youtube channel and brand."
        link="https://www.ivantheinspector.com"
        img={{
          src: "/assets/images/ivanlogo.png",
          alt: "Ivan the Inspector",
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.LIME}>Javascript</Tags>
            <Tags color={ColorTags.SKY}>Material UI</Tags>
            <Tags color={ColorTags.ROSE}>CommerceJS</Tags>
          </>
        }
      />
      <Project
        name="Alpenglow Artistry"
        description="Portfolio website and ecommerce site for artist Rachel Westman."
        link="www.alpenglow-art.com"
        img={{ src: "/assets/images/alpenglow.png", alt: "Alpenglow Artistry" }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React</Tags>
            <Tags color={ColorTags.EMERALD}>Typescript</Tags>
            <Tags color={ColorTags.YELLOW}>CommerceJS</Tags>
          </>
        }
      />
      <Project
        name="Disc Golf Simulation League"
        description="Create a player and watch how they perform in the league"
        link="https://github.com/garrettkrohn/dgsim"
        img={{
          src: "/assets/images/discgolf.png",
          alt: "Disc Golf Simulation League",
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React</Tags>
            <Tags color={ColorTags.EMERALD}>Typescript</Tags>
            <Tags color={ColorTags.YELLOW}>PHP</Tags>
            <Tags color={ColorTags.INDIGO}>MySQL</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
