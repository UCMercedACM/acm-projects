<template>
  <router-link class="project-link" :to="{ name: 'project-show', params: { id: project.id } }">
    <div class="project-card -shadow">
      <span class="eyebrow">@{{ project.time }} on {{ project.date }}</span>
      <h4 class="title">{{ project.title }}</h4>
      <BaseIcon name="users">{{ project.attendees.length }} attending</BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>

<style scoped>
.project-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.project-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.project-card > .title {
  margin: 0;
}
.project-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>