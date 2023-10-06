<template>
  <MenuVue :links="links">> Harsh<span class="prim">Lad</span></MenuVue>
  <HeroSection id="hero" pic="my_header.png">
    <template v-slot:welcome>Welcome!</template>
    My name is <b>Harsh Lad</b> and I'm a
    <hi-word>Team Leader and Web Developer</hi-word>. My passion is building
    <hi-word>web applications</hi-word> and
    <hi-word>designing websites</hi-word> using modern frameworks.
    <hi-word>I have 7 year`s of experience</hi-word>.
    <hi-word>Also I have working on VueJs, ReactJs</hi-word>.
    <template v-slot:buttons>
      <simple-button
        class="btn-primary text-white"
        url="https://www.linkedin.com/in/harsh-lad-aa36a316b/"
        icon="fab linkedin-in"
        >Hire me!</simple-button
      >
      <simple-button
        class="btn-outline-secondary"
        url="mailto:hardieslad@gmail.com"
        icon="fa-regular fa-file-lines"
        >Contact me</simple-button
      >
    </template>
  </HeroSection>
  <SkillsGrid id="skills" :skills="skills" />
  <ExperienceTable id="edu-exp" :experience="experience" />
  <EductionTable id="ed-ex" :eduction="eduction" />
  <AwardsGrid id="award" :awards="awards" />
  <ProjectsGrid id="projects" :projects="projects" />
  <FooterVue :links="socials" :copyright="copyright" />
</template>
<script>
import MenuVue from "@/components/shared/AppMenu.vue";
import AwardsGrid from "@/components/awards/AwardsGrid.vue";
import FooterVue from "@/components/shared/AppFooter.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SkillsGrid from "@/components/skills/SkillsGrid.vue";
import ExperienceTable from "@/components/experience/ExperienceTable.vue";
import EductionTable from "@/components/eduction/EductionTable.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

import skills from "@/data/skills";
import experience from "@/data/experience";
import eduction from "@/data/eduction";
import awards from "@/data/awards";
import projects from "@/data/projects";
import SimpleButton from "@/components/reusable/SimpleButton.vue";
import HiWord from "@/components/reusable/HighlightIt.vue";

export default {
  name: "HomeView",
  data: () => {
    return {
      delay: 100,
      links: [
        {
          name: "Home",
          url: "#hero",
        },
        {
          name: "Skills",
          url: "#skills",
        },
        {
          name: "Experience",
          url: "#edu-exp",
        },
        {
          name: "Education",
          url: "#ed-ex",
        },
        {
          name: "Awards",
          url: "#award",
        },
        {
          name: "Projects",
          url: "#projects",
        },
      ],
      skills,
      experience,
      eduction,
      awards,
      projects,
      socials: [
        {
          id: 1,
          icon: "fab linkedin-in",
          url: "https://www.linkedin.com/in/harsh-lad-aa36a316b/",
        },
        {
          id: 2,
          icon: "fab github",
          url: "https://github.com/HarshLad2720",
        },
      ],
      copyright: "2023 Harsh Lad",
    };
  },
  components: {
    MenuVue,
    FooterVue,
    HeroSection,
    SkillsGrid,
    ExperienceTable,
    EductionTable,
    ProjectsGrid,
    SimpleButton,
    HiWord,
    AwardsGrid,
  },
};
</script>
<style lang="scss" scoped>
.prim {
  color: $primary;
}
</style>
