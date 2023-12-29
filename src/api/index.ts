export const fetchContent = async (title: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_BASEURL}/contents/${title}`
  );
  const content = await res.json();
  console.log("fetchContent:", content);
  return content;
};

export const fetchNav = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASEURL}/nav`);
  const nav = await res.json();
  console.log("fetchNav:", nav);
  return nav;
};

export const fetchExperience = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASEURL}/experiences`);
  const experiences = await res.json();
  console.log("fetchExperience:", experiences);
  return experiences;
};

export const fetchProject = async (type: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_BASEURL}/projects/${type}`
  );
  const projects = await res.json();
  console.log("fetchProject", projects);
  return projects;
};
