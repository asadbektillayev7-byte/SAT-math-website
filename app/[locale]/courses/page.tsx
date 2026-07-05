import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CoursesContent from "./courses-content";
import { fetchStudentResults } from "@/lib/sheets";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "courses" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CoursesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "courses" });

  const results = await fetchStudentResults();

  const messages = {
    subnavCourses: t("subnavCourses"),
    subnavResults: t("subnavResults"),
    subnavFaq: t("subnavFaq"),
    subnavContact: t("subnavContact"),
    introHeading: t("introHeading"),
    forStudentsHeading: t("forStudentsHeading"),
    forStudentsBody: t.raw("forStudentsBody") as string,
    forStudentsUrl: t("forStudentsUrl"),
    forTeachersHeading: t("forTeachersHeading"),
    forTeachersBody: t.raw("forTeachersBody") as string,
    forTeachersUrl: t("forTeachersUrl"),
    audienceStudents: t("audienceStudents"),
    audienceTeachers: t("audienceTeachers"),
    pricingHeading: t("pricingHeading"),
    pricingBody: t("pricingBody"),
    pricingNote: t("pricingNote"),
    coursesHeading: t("coursesHeading"),
    satAdvancedTitle: t("satAdvanced.title"),
    satAdvancedDesc: t("satAdvanced.description"),
    satAdvancedDuration: t("satAdvanced.duration"),
    preSatTitle: t("preSat.title"),
    preSatDesc: t("preSat.description"),
    preSatDuration: t("preSat.duration"),
    individualEnglishTitle: t("individualEnglish.title"),
    individualEnglishDesc: t("individualEnglish.description"),
    individualEnglishDuration: t("individualEnglish.duration"),
    teachersMathTitle: t("teachersMath.title"),
    teachersMathDesc: t("teachersMath.description"),
    teachersMathDuration: t("teachersMath.duration"),
    resultsHeadline: t("resultsHeadline"),
    resultsEmpty: t("resultsEmpty"),
    resultsFilterMath: t("resultsFilterMath"),
    resultsFilterBoth: t("resultsFilterBoth"),
    faqHeading: t("faqHeading"),
    contactHeading: t("contactHeading"),
    contactTelegram: t("contactTelegram"),
    locationConfirmNote: t("locationConfirmNote"),
    openInMaps: t("openInMaps"),
    faq: JSON.stringify(t.raw("faq")),
  };

  return (
    <CoursesContent
      locale={locale}
      messages={messages}
      results={results}
    />
  );
}
