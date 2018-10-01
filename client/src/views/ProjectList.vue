<template>
  <div>
    <h1>Projects Listing</h1>
    <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectService from '@/services/ProjectService.js';
export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    };
  },
  created() {
    ProjectService.getProjects()
      .then(response => {
        this.projects = response.data;
      })
      .catch(error => {
        console.log('There was an error:', error.response);
      });
  }
};
</script>

<style scoped>
</style>
