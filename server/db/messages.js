const Joi = require('joi');
const db = require('./connection');

const userSchema = Joi.object().keys({
  name: Joi.string().regex(/^[a-zA-Z]{3,45}$/).required(),
  email: Joi.string().regex(/^[a-zA-Z0-9]{3,100}$/).email({ minDomainAtoms: 2 }).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9!@#$%&]{3,30}$/).required(),
  major: Joi.string().regex(/^[a-zA-Z]{2,100}$/).required(),
  year: Joi.string().regex(/^[a-zA-Z]{5,20}$/).required(),
  github: Joi.string().regex(/^[a-zA-Z0-9]{15,100}$/).required(),
  member: Joi.boolean().required(),
});

const projectSchema = Joi.object().keys({
  name: Joi.string().regex(/^[a-zA-Z]{3,45}$/).required(),
  type: Joi.array().required(),
  description: Joi.string().regex(/^[a-zA-Z0-9!@#$%&]{3,255}$/).required(),
  difficulty: Joi.string().regex(/^[a-zA-Z]{3,45}$/).require(),
  teams: Joi.object().required(),
});

const teamSchema = Joi.object().keys({
  name: Joi.string().regex(/^[a-zA-Z]{3,45}$/).required(),
  members: Joi.array().required(),
});

const users = db.get('users');
const projects = db.get('projects');
const teams = db.get('teams');

function getAllUsers() {
  return users.find();
}

function getAllProjects() {
  return projects.find();
}

function getAllTeams() {
  return teams.find();
}

function createUser(user) {
  if (!user.username) user.username = 'Anonymous';

  const result = Joi.validate(user, userSchema);
  if (result.error == null) {
    user.created = new Date();
    return users.insert(user);
  } else {
    return Promise.reject(result.error);
  }
}

function createProject(project) {
  if (!project.username) project.username = 'Anonymous';

  const result = Joi.validate(project, projectSchema);
  if (result.error == null) {
    project.created = new Date();
    return projects.insert(project);
  } else {
    return Promise.reject(result.error);
  }
}

function createTeam(team) {
  if (!team.username) team.username = 'Anonymous';

  const result = Joi.validate(team, teamSchema);
  if (result.error == null) {
    team.created = new Date();
    return teams.insert(team);
  } else {
    return Promise.reject(result.error);
  }
}

module.exports = {
  createUser, 
  createProject,
  createTeam,
  getAllUsers,
  getAllProjects,
  getAllTeams,
};