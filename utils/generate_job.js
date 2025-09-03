import { companies } from "../src/constants/companies.js";
import { locations } from "../src/constants/locations.js";
import { titles } from "../src/constants/titles.js";
import fs from "fs";

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const jobs = [];

for (let i = 1; i <= 600; i++) {
  const location = getRandom(locations);
  const { city, stateCode, country } = location;

  job_list.push({
    id: i.toString(),
    title: `${getRandom(titles)} - ${i}`,
    type: getRandom(["Full-Time", "Part-Time"]),
    location: {
      city,
      stateCode,
      country,
    },
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

fs.writeFileSync("./src/jobs.json", JSON.stringify(jobs, null, 2));
