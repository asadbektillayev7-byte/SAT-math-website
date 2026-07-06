import type { Metadata } from "next";
import CoursesContent from "./courses-content";
import { getTranslation, getRawMessage } from "@/lib/translations";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: getTranslation(locale, "courses.title"),
    description: getTranslation(locale, "courses.description"),
  };
}

export default async function CoursesPage({ params }: Props) {
  const { locale } = await params;
  const t = (key: string) => getTranslation(locale, key);
  const raw = (key: string) => getRawMessage(locale, key);

  const messages = {
    subnavCourses: t("courses.subnavCourses"),
    subnavFaq: t("courses.subnavFaq"),
    subnavContact: t("courses.subnavContact"),
    introHeading: t("courses.introHeading"),
    forStudentsHeading: t("courses.forStudentsHeading"),
    forStudentsBody: raw("courses.forStudentsBody") as string,
    forStudentsUrl: t("courses.forStudentsUrl"),
    forTeachersHeading: t("courses.forTeachersHeading"),
    forTeachersBody: raw("courses.forTeachersBody") as string,
    forTeachersUrl: t("courses.forTeachersUrl"),
    audienceStudents: t("courses.audienceStudents"),
    audienceTeachers: t("courses.audienceTeachers"),
    pricingHeading: t("courses.pricingHeading"),
    pricingBody: t("courses.pricingBody"),
    pricingNote: t("courses.pricingNote"),
    coursesHeading: t("courses.coursesHeading"),
    satAdvancedTitle: t("courses.satAdvanced.title"),
    satAdvancedDesc: t("courses.satAdvanced.description"),
    satAdvancedDuration: t("courses.satAdvanced.duration"),
    preSatTitle: t("courses.preSat.title"),
    preSatDesc: t("courses.preSat.description"),
    preSatDuration: t("courses.preSat.duration"),
    individualEnglishTitle: t("courses.individualEnglish.title"),
    individualEnglishDesc: t("courses.individualEnglish.description"),
    individualEnglishDuration: t("courses.individualEnglish.duration"),
    teachersMathTitle: t("courses.teachersMath.title"),
    teachersMathDesc: t("courses.teachersMath.description"),
    teachersMathDuration: t("courses.teachersMath.duration"),
    faqHeading: t("courses.faqHeading"),
    contactHeading: t("courses.contactHeading"),
    contactTelegram: t("courses.contactTelegram"),
    locationConfirmNote: t("courses.locationConfirmNote"),
    openInMaps: t("courses.openInMaps"),
  };

  return <CoursesContent locale={locale} messages={messages} />;
}
