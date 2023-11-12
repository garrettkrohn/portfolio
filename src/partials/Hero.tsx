import {
  GradientText,
  HeroAvatar,
  HeroSocial,
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
          Welcome to my blog! I am a{" "}
          <a className="text-cyan-400 hover:underline" href="/">
            Software Engineer
          </a>{" "}
          who was a professional musician in his previous life. This blog is a
          place for me to write about all of the areas of the field that I am
          interested, especially Neovim and my terminal based workflow.
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
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
