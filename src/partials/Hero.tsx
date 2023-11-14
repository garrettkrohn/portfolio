import {
  GradientText,
  HeroAvatar,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Garrett Krohn</GradientText>
        </>
      }
      description={
        <>
          Welcome to my blog! I am a full stack{" "}
          <GradientText>Software Engineer</GradientText> who was a professional
          musician in his previous life. I am passionate about web development,
          my custom workflow, and always learning!
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/headshot.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={<></>}
    />
  </Section>
);

export { Hero };
