"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, MapPin } from "lucide-react";
import AudienceToggle from "@/components/audience-toggle";
import ResultsGridClient from "@/components/results-grid-client";
import FaqSection from "@/components/faq-section";
import { contacts } from "@/data/contacts";
import type { StudentResult } from "@/lib/sheets";

type Props = {
  locale: string;
  messages: Record<string, string>;
  results: StudentResult[];
};

export default function CoursesContent({ locale, messages, results }: Props) {
  const [audience, setAudience] = useState<"students" | "teachers">("students");

  return (
    <>
      {/* Sticky subnav */}
      <div className="sticky-subnav bg-bg/90 border-b border-ink/5">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-6 overflow-x-auto">
          {[
            { id: "courses-intro", label: messages.subnavCourses },
            { id: "results", label: messages.subnavResults },
            { id: "faq", label: messages.subnavFaq },
            { id: "contact", label: messages.subnavContact },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-[11px] tracking-widest uppercase text-ink/50 hover:text-gold whitespace-nowrap transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Intro / Why SAT */}
      <section id="courses-intro" className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-8">
          {messages.introHeading}
        </h1>

        <AudienceToggle
          active={audience}
          onChange={setAudience}
          studentLabel={messages.audienceStudents}
          teacherLabel={messages.audienceTeachers}
        />

        <div className="mt-10 max-w-3xl">
          {audience === "students" ? (
            <div>
              <h2 className="font-heading text-2xl font-semibold text-ink mb-4">
                {messages.forStudentsHeading}
              </h2>
              <p
                className="font-body text-base text-ink/60 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: messages.forStudentsBody.replace(
                    /<link>(.*?)<\/link>/,
                    `<a href="${messages.forStudentsUrl}" target="_blank" rel="noopener noreferrer" class="text-gold underline underline-offset-4 hover:text-rust transition-colors">$1</a>`,
                  ),
                }}
              />
            </div>
          ) : (
            <div>
              <h2 className="font-heading text-2xl font-semibold text-ink mb-4">
                {messages.forTeachersHeading}
              </h2>
              <p
                className="font-body text-base text-ink/60 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: messages.forTeachersBody.replace(
                    /<link>(.*?)<\/link>/,
                    `<a href="${messages.forTeachersUrl}" target="_blank" rel="noopener noreferrer" class="text-gold underline underline-offset-4 hover:text-rust transition-colors">$1</a>`,
                  ),
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Torn divider */}
      <div className="torn-divider" />

      {/* Course cards */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-heading text-2xl font-semibold text-ink mb-8">
          {messages.coursesHeading}
        </h2>

        {audience === "students" ? (
          <>
            <div className="grid gap-6 md:grid-cols-3 mb-10">
              <div
                id="sat-advanced"
                className="bg-surface rounded-xl border border-ink/5 p-6"
              >
                <p className="font-mono text-[10px] tracking-widest uppercase text-rust mb-2">
                  MATH
                </p>
                <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                  {messages.satAdvancedTitle}
                </h3>
                <p className="font-body text-sm text-ink/50 mb-4">
                  {messages.satAdvancedDesc}
                </p>
                <div className="space-y-1.5 font-mono text-xs text-ink/40">
                  <p>Duration: {messages.satAdvancedDuration}</p>
                  <p>Group size: [[NEEDS INPUT: group size]]</p>
                  <p>Mon–Fri + Sat mock tests</p>
                </div>
              </div>

              <div
                id="pre-sat"
                className="bg-surface rounded-xl border border-ink/5 p-6"
              >
                <p className="font-mono text-[10px] tracking-widest uppercase text-rust mb-2">
                  MATH
                </p>
                <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                  {messages.preSatTitle}
                </h3>
                <p className="font-body text-sm text-ink/50 mb-4">
                  {messages.preSatDesc}
                </p>
                <div className="space-y-1.5 font-mono text-xs text-ink/40">
                  <p>Duration: {messages.preSatDuration}</p>
                  <p>Group size: [[NEEDS INPUT: group size]]</p>
                  <p>Mon–Fri + Sat mock tests</p>
                </div>
              </div>

              <div
                id="individual-english"
                className="bg-surface rounded-xl border border-ink/5 p-6"
              >
                <p className="font-mono text-[10px] tracking-widest uppercase text-rust mb-2">
                  EBRW
                </p>
                <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                  {messages.individualEnglishTitle}
                </h3>
                <p className="font-body text-sm text-ink/50 mb-4">
                  {messages.individualEnglishDesc}
                </p>
                <div className="space-y-1.5 font-mono text-xs text-ink/40">
                  <p>Duration: {messages.individualEnglishDuration}</p>
                  <p>Format: individual/personalized</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gold/5 rounded-xl border border-gold/20 p-6 max-w-xl">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                {messages.pricingHeading}
              </h3>
              <p className="font-body text-base text-ink/70 mb-2">
                {messages.pricingBody}
              </p>
              <p className="font-mono text-xs text-ink/40">
                {messages.pricingNote}
              </p>
            </div>
          </>
        ) : (
          <div
            id="teachers-math"
            className="max-w-lg bg-surface rounded-xl border border-ink/5 p-6"
          >
            <p className="font-mono text-[10px] tracking-widest uppercase text-rust mb-2">
              MATH
            </p>
            <h3 className="font-heading text-xl font-semibold text-ink mb-2">
              {messages.teachersMathTitle}
            </h3>
            <p className="font-body text-sm text-ink/50 mb-4">
              {messages.teachersMathDesc}
            </p>
            <div className="space-y-1.5 font-mono text-xs text-ink/40">
              <p>Duration: {messages.teachersMathDuration}</p>
              <p>Mon–Fri regular lessons + Saturday mock-test practice, 6 days/week</p>
              <p>Session: 2–2.5 hours</p>
              <p>Group size: [[NEEDS INPUT: group size]]</p>
              <p className="text-gold font-semibold">350,000 UZS / month</p>
            </div>
          </div>
        )}
      </section>

      {/* Torn divider */}
      <div className="torn-divider" />

      {/* Student Results */}
      <section id="results" className="py-20 relative">
        <div className="absolute inset-0 bg-grid" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="font-heading text-2xl font-semibold text-ink mb-8">
            {messages.resultsHeadline}
          </h2>
          {results.length === 0 ? (
            <p className="font-body text-sm text-ink/40 italic">
              {messages.resultsEmpty}
            </p>
          ) : (
            <ResultsGridClient results={results} />
          )}
        </div>
      </section>

      {/* Torn divider */}
      <div className="torn-divider" />

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-heading text-2xl font-semibold text-ink mb-8">
          {messages.faqHeading}
        </h2>
        <div className="max-w-2xl">
          <FaqSection />
        </div>
      </section>

      {/* Torn divider */}
      <div className="torn-divider" />

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-heading text-2xl font-semibold text-ink mb-8">
          {messages.contactHeading}
        </h2>
        <ContactSectionContent messages={messages} />
      </section>
    </>
  );
}

function ContactSectionContent({ messages }: { messages: Record<string, string> }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6">
        <div className="bg-surface rounded-xl border border-ink/5 p-6">
          <h3 className="font-heading text-lg font-semibold text-ink mb-1">
            {contacts.davronbek.name}
          </h3>
          <p className="font-body text-sm text-ink/50 mb-4">
            {contacts.davronbek.title}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={contacts.davronbek.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg bg-gold text-ink hover:bg-gold/80 transition-colors"
            >
              <Send size={14} />
              {messages.contactTelegram}
            </a>
            <a
              href={`tel:${contacts.davronbek.phone}`}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg border border-ink/20 text-ink hover:border-gold/50 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {contacts.davronbek.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="bg-surface rounded-xl border border-ink/5 p-6">
          <h3 className="font-heading text-lg font-semibold text-ink mb-1">
            {contacts.ebrwTeacher.name}
          </h3>
          <p className="font-body text-sm text-ink/50 mb-4">
            {contacts.ebrwTeacher.title}
          </p>
          <a
            href={contacts.ebrwTeacher.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg bg-gold text-ink hover:bg-gold/80 transition-colors"
          >
            <Send size={14} />
            {messages.contactTelegram}
          </a>
        </div>
      </div>

      <div className="bg-surface rounded-xl border border-ink/5 p-6">
        <h3 className="font-heading text-lg font-semibold text-ink mb-1">
          {contacts.location.name}
        </h3>
        <p className="font-body text-sm text-ink/50 mb-1">
          {contacts.location.address}
        </p>
        <p className="font-mono text-[10px] tracking-wider text-rust mb-4">
          {messages.locationConfirmNote}
        </p>
        <div className="aspect-[4/3] rounded-lg bg-ink/5 overflow-hidden mb-4">
          <a
            href={contacts.location.yandexMap}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            <div className="text-center p-6">
              <MapPin size={32} className="mx-auto text-gold mb-2" />
              <p className="font-mono text-xs tracking-wider uppercase text-ink/40">
                {messages.openInMaps}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
