<template>
  <div>
    <div class="project-header">
      <span class="eyebrow">@{{ project.time }} on {{ project.date }}</span>
      <h1 class="title">{{ project.title }}</h1>
      <h5>Organized by {{ project.organizer }}</h5>
      <h5>Category: {{ project.category }}</h5>
    </div>
    <BaseIcon name="map">
      <h2>Location</h2>
    </BaseIcon>
    <address>{{ project.location }}</address>
    <h2>Project details</h2>
    <p>{{ project.description }}</p>
    <h2>Attendees
      <span class="badge -fill-gradient">{{ project.attendees ? project.attendees.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(attendee, index) in project.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
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
