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
      label: "Years of Experience",
      data: [8, 8, 17, 17, 6, 8, 8, 8],
    },
  ],
};

const techConfig = {
  type: "bar",
  data: techData,
  options: {
    indexAxis: "y",
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: { text: "Years of Experience", display: true },
      },
    },
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

var myTechnologyChart = new Chart(
  document.getElementById("tech-graph"),
  techConfig
);

//var myRolesChart = new Chart(document.getElementById("roles"), rolesConfig);
