const dashboardData = [
  {
    id: 1,
    name: "CSPM Executive Dashboard",
    widgets: [
      {
        id: 1,
        title: "Cloud Accounts",
        description: "2 Total",
        graphType: "doughnut",
      },
      {
        id: 2,
        title: "Cloud Account Risk Assessment",
        description: "9659 Total",
        graphType: "pie",
      },
    ],
  },
  {
    id: 2,
    name: "CWPP Dashboard",
    widgets: [
      {
        id: 3,
        title: "Top 5 Namespace Specific Alerts",
        description: "No Graph data available!",
        graphType: "none",
      },
      {
        id: 4,
        title: "Workload Alerts",
        description: "No Graph data available!",
        graphType: "none",
      },
    ],
  },
  {
    id: 3,
    name: "Registry Scan",
    widgets: [
      {
        id: 5,
        title: "Image Risk Assessment",
        description: "1470 Total Vulnerabilities",
        graphType: "bar",
      },
      {
        id: 6,
        title: "Image Security Issues",
        description: "2 Total Images",
        graphType: "bar",
      },
    ],
  },
];

export default dashboardData;
