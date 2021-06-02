// <block:setup:1>
const labels = ["January", "February", "March", "April", "May", "June"];
const data1 = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const data2 = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const data3 = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
// </block:setup>

// <block:config:0>
const config1 = {
  type: "line",
  data: data1,
  options: {},
};
const config2 = {
  type: "line",
  data: data2,
  options: {},
};
const config3 = {
  type: "line",
  data: data3,
  options: {},
};
// </block:config>

var myTechnicalChart = new Chart(document.getElementById("technical"), config1);

var myRolesChart = new Chart(document.getElementById("roles"), config2);

var myCompaniesChart = new Chart(document.getElementById("companies"), config3);
