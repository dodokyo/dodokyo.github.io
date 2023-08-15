/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "category",
      label: "취업 상담소",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "fe-employment",
        },
      ],
    },
    {
      type: "category",
      label: "취업 자료실",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "em-datas",
        },
      ],
    },
  ],
  DevOps: [
    {
      type: "autogenerated",
      dirName: "g-devops",
    },
  ],
  softSkills: [
    {
      type: "autogenerated",
      dirName: "group-sotf-skills",
    },
  ],
  dockerHandbook: [
    {
      type: "autogenerated",
      dirName: "g-docker-guide",
    },
  ],
  // But you can create a sidebar manually
};

module.exports = sidebars;