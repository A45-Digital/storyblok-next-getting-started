import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "M4jwXbjmr9OZxrHyOJ5sqwtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default Storyblok;
