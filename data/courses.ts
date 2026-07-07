export type Audience = "students" | "teachers";
export type Subject = "math" | "ebrw" | "both";

export interface Course {
  id: string;
  audience: Audience;
  subject: Subject;
  titleKey: string;
  descriptionKey: string;
  duration: string;
  schedule?: string;
  sessionLength?: string;
  groupSize?: string;
  price?: string;
  format?: string;
}

export const courses: Course[] = [
  {
    id: "sat-advanced",
    audience: "students",
    subject: "math",
    titleKey: "courses.satAdvanced.title",
    descriptionKey: "courses.satAdvanced.description",
    duration: "courses.satAdvanced.duration",
    sessionLength: "2–2.5 hours",
    groupSize: "15",
  },
  {
    id: "pre-sat",
    audience: "students",
    subject: "math",
    titleKey: "courses.preSat.title",
    descriptionKey: "courses.preSat.description",
    duration: "courses.preSat.duration",
    sessionLength: "2–2.5 hours",
    groupSize: "15",
  },
  {
    id: "individual-english",
    audience: "students",
    subject: "ebrw",
    titleKey: "courses.individualEnglish.title",
    descriptionKey: "courses.individualEnglish.description",
    duration: "courses.individualEnglish.duration",
    format: "individual",
    groupSize: "1",
  },
  {
    id: "teachers-math",
    audience: "teachers",
    subject: "math",
    titleKey: "courses.teachersMath.title",
    descriptionKey: "courses.teachersMath.description",
    duration: "courses.teachersMath.duration",
    schedule: "Mon–Sat regular lessons + Sunday mock tests",
    sessionLength: "2–2.5 hours",
    groupSize: "10",
    price: "350,000 UZS / month",
  },
];
