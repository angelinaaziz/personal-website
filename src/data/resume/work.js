/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Anaplan',
    position: 'Senior Platform Engineer',
    url: 'https://www.legalandgeneral.com/',
    startDate: '2023-10-25',
    summary: 'Legal & General is a British multinational financial services company. I work on the platform team with Azure, moving lGRI into a more modern cloud environment.',
    highlights: [
    ],
  },
  {
    name: 'Anaplan',
    position: 'Platform Engineer (Associate Software Engineer)',
    url: 'https://anaplan.com',
    startDate: '2022-10-01',
    endDate: '2023-09-29',
    summary: 'Anaplan is an enterprise SaaS platform for business planning. I work on team Hermes which is responsible for making Anaplan cloud-native.',
    highlights: [
      'Developed and maintained a sophisticated CI/CD pipeline using Jenkins, accelerating project deployment and increasing code base stability.',
      'Migrated the existing data from company-owned DCs to cloud spokes in AWS and GCP, ensuring data integrity and accessibility, and reducing operational costs.',
      'Configured, deployed, and managed containerized applications on demand, achieving zero downtime during core software upgrades.',
      'Enhanced system monitoring and error detection capabilities by utilising Splunk and metrics and monitoring within the codebase.',
    ],
  },
  {
    name: 'Anaplan',
    position: 'Graduate Software Engineer',
    url: 'https://anaplan.com',
    startDate: '2021-10-01',
    endDate: '2022-10-01',
    highlights: [
      'Worked as part of a cross-functional team focused on improving company efficency in cloud infrastructure, paving the way for my current DevOps-focused role.',
      'Gained hands-on experience with Kubernetes, Docker and Rust in various environments, including company data centres and cloud environments (AWS and GCP).',
      'Actively participates in systems design and architectural decisions, advocating for best practices in systems engineering.',
    ],
  },
  {
    name: 'Bank of New York Mellon',
    position: 'Apprentice Software Engineer',
    url: 'https://www.bnymellon.com',
    startDate: '2020-02-01',
    endDate: '2021-10-01',
    summary: 'BNY Mellon is a global investments company dedicated to helping its clients manage and service their financial assets throughout the investment lifecycle.',
    highlights: [
      'Automated the testing process for a large AST project by developing UI regression tests utilizing Selenium, Cucumber, and Jenkins, improving code quality and reducing bugs in production.',
      'Managed and monitored the deployment of services across multiple regions, gaining experience in troubleshooting and resolving deployment issues.',
      'Increased visibility into production environments by implementing robust logging systems using tools like Splunk and Kibana.',
    ],
  },
];

export default work;
