import fs from "fs";

const titles = [
  "Senior React Developer",
  "Front-End Engineer (React & Redux)",
  "React.js Developer",
  "React Front-End Developer",
  "Full Stack React Developer",
  "React Native Developer",
];

const locations = [
  "Boston, MA",
  "Miami, FL",
  "Brooklyn, NY",
  "Phoenix, AZ",
  "Atlanta, GA",
  "Portland, OR",
  "Seattle, WA",
  "Austin, TX",
  "Chicago, IL",
  "San Francisco, CA",
];

const companies = [
  "NewTek Solutions",
  "Veneer Solutions",
  "Dolor Cloud",
  "Alpha Elite",
  "Browning Technologies",
  "Port Solutions INC",
  "NextGen Labs",
  "Skyline Digital",
  "InnovateX",
  "BrightWave Tech",
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const job_list = [];

for (let i = 1; i <= 600; i++) {
  job_list.push({
    id: i.toString(),
    title: `${getRandom(titles)} - ${i}`,
    type: getRandom(["Full-Time", "Part-Time"]),
    location: getRandom(locations),
    description: "We are looking for a passionate developer to join our team.",
    salary: getRandom([
      "$60K - $70K",
      "$70K - $80K",
      "$90K - $100K",
      "$100K - $110K",
    ]),
    company: {
      name: getRandom(companies),
      description: "A leading company specializing in digital solutions.",
      contactEmail: "contact@example.com",
      contactPhone: "555-555-5555",
    },
  });
}

fs.writeFileSync("./src/db.json", JSON.stringify({ jobs: job_list }, null, 2));
