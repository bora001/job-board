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
  { name: "Boston", code: "MA" },
  { name: "Miami", code: "FL" },
  { name: "Brooklyn", code: "NY" },
  { name: "Phoenix", code: "AZ" },
  { name: "Atlanta", code: "GA" },
  { name: "Portland", code: "OR" },
  { name: "Seattle", code: "WA" },
  { name: "Austin", code: "TX" },
  { name: "Chicago", code: "IL" },
  { name: "San Francisco", code: "CA" },
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
const location_list = [];

for (let i = 1; i <= 600; i++) {
  const location = getRandom(locations);
  job_list.push({
    id: i.toString(),
    title: `${getRandom(titles)} - ${i}`,
    type: getRandom(["Full-Time", "Part-Time"]),
    location: location.name,
    code: location.code,
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
for (let i = 0; i < locations.length; i++) {
  location_list.push({
    id: i.toString(),
    code: locations[i].code,
    location: locations[i].name,
  });
}

fs.writeFileSync(
  "./src/db.json",
  JSON.stringify({ jobs: job_list, locations: location_list }, null, 2)
);
