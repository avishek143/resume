const techData = {
  labels: [
    "HTML",
    "CSS",
    "Sass",
    "Javascript",
    "Typescript",
    "Node.js",
    "Express",
    "Websocket",
    "React",
    "Bootstrap",
    "Redis",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Gulp",
    "Webpack",
    "Git",
    "AWS",
    "Java & J2EE",
    "PHP",
    "Wordpress",
  ],
  datasets: [
    {
      label: "Years of Experience",
      data: [
        17, 17, 8, 17, 4, 8, 7, 5, 7, 6, 5, 4, 3, 5, 3, 7, 3, 8, 8, 5, 2, 2,
      ],
      backgroundColor: [
        "#DD4B25",
        "#254BDD",
        "#CF649A",
        "#EFD81D",
        "#2F74C0",
        "#3F873E",
        "#000000",
        "#EFD81D",
        "#61DAFB",
        "#7952B3",
        "#D72B21",
        "#12924F",
        "#336791",
        "#2391E6",
        "#3069DE",
        "#D34446",
        "#75AFCC",
        "#F64D27",
        "#EC912D",
        "#01607E",
        "#8892BF",
        "#0073AA",
      ],
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
  }
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

Chart.defaults.font.size = 14;
Chart.defaults.font.weight = "bold";
var myTechnologyChart = new Chart(
  document.getElementById("tech-graph"),
  techConfig
);

//var myRolesChart = new Chart(document.getElementById("roles"), rolesConfig);
