const techData = {
  labels: [
    "Node.js",
    "Full Stack",
    "Javascript",
    "HTML & CSS",
    "Java",
    "Cloud",
    "AWS",
    "MongoDB",
  ],
  datasets: [
    {
      label: "something",
      data: [8, 8, 17, 17, 6, 8, 8, 8],
    },
  ],
};

const techConfig = {
  type: "bar",
  data: techData,
  options: {
    indexAxis: "y",
  },
};

const rolesData = {
  labels: [
    "Coding",
    "Software Architecture",
    "Team Management",
    "Scrum Mastery",
    "Product Management",
  ],
  datasets: [
    {
      label: "roles something",
      data: [17, 9, 5, 8, 2],
    },
  ],
};

const rolesConfig = {
  type: "bar",
  data: rolesData,
  options: {},
};

const companiesData = {
  labels: ["Wipro", "Pegasystems", "TailTrails"],
  datasets: [
    {
      label: "something company",
      data: [5, 10, 2],
    },
  ],
};

const companiesConfig = {
  type: "pie",
  data: companiesData,
  options: {},
};

var myTechnologyChart = new Chart(
  document.getElementById("technical"),
  techConfig
);

var myRolesChart = new Chart(document.getElementById("roles"), rolesConfig);

var myCompaniesChart = new Chart(
  document.getElementById("companies"),
  companiesConfig
);
