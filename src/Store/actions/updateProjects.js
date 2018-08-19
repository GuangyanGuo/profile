export const UPDATE_PROJECTS = Symbol('UPDATE_PROJECTS');

export default (projects) =>  ({
  type: UPDATE_PROJECTS,
  data: projects,
});

