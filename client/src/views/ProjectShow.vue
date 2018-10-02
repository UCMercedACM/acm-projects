<template>
  <div>
    <div class="project-header">
      <h1 class="title">{{ project.title }}</h1>
      <h5>Organized by {{ project.organizer }}</h5>
      <ul class="list-group">
        <li v-for="(cat, index) in project.category" :key="index" class="list-item">
          <b>{{ cat.name }}</b>
        </li>
      </ul>
    </div>
    <h2>Project details</h2>
    <p>{{ project.description }}</p>
    <h2>Teams
      <span class="badge -fill-gradient">{{ project.teams ? project.teams.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(team, index) in project.teams" :key="index" class="list-item">
        <b>{{ team.name }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import ProjectService from '@/services/ProjectService.js';

export default {
  props: ['id'],
  data() {
    return {
      project: {}
    };
  },
  created() {
    ProjectService.getProject(this.id)
      .then(response => {
        this.project = response.data;
      })
      .catch(error => {
        console.log('There was an error:', error.response);
      });
  }
};
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.project-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
