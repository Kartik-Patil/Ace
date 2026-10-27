import aadhya from "@/assets/achievers/aadhya-hiremath.webp.asset.json";
import amogh from "@/assets/achievers/amogh-mantur.webp.asset.json";
import khalid from "@/assets/achievers/khalid-mirji.webp.asset.json";
import ayaan from "@/assets/achievers/mohammad-ayaan.webp.asset.json";
import niranjan from "@/assets/achievers/niranjan-k.webp.asset.json";
import prasanna from "@/assets/achievers/prasanna-totad.webp.asset.json";
import rajat from "@/assets/achievers/rajat-kulkarni.webp.asset.json";
import sanjana from "@/assets/achievers/sanjana-benakatti.webp.asset.json";
import shalini from "@/assets/achievers/shalini-shettar.webp.asset.json";
import sharan from "@/assets/achievers/sharan-tugalad.webp.asset.json";
import tejas from "@/assets/achievers/tejas-onimani.webp.asset.json";

// All content below is transcribed from the client's flyer. Do not embellish.
export const contact = {
  brand: "ACE – Education Redefined",
  tagline: "From Concepts to Confidence",
  phoneDisplay: "+91 91484 86661",
  phoneHref: "tel:+919148486661",
  whatsappHref: "https://wa.me/919148486661",
  website: "www.aceEduHub.com",
  websiteHref: "https://www.aceEduHub.com",
  instagram: "ace_edu_hubballi",
  instagramHref: "https://www.instagram.com/ace_edu_hubballi/",
  facebook: "ACE - Education Redefined",
  addressLines: ["Lakeside Commercial Complex, 2nd Floor,", "Opp. Tolankere, Lakshmi Nagar,", "Hubballi – 580030"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Lakeside+Commercial+Complex+Lakshmi+Nagar+Hubballi+580030",
  admissionYear: "2027–28",
  achieversYear: "2025–26",
};

export const classes = ["Class VIII", "Class IX", "Class X"] as const;
export const boards = ["ICSE", "CBSE", "State Board"] as const;

export type Program = { id: string; name: string; summary: string; detail?: string; highlight?: string };
export const programs: Program[] = [
  { id: "bridge", name: "Bridge Course", summary: "Enhance knowledge, skill & curriculum gaps to strengthen concepts." },
  { id: "foundation", name: "Foundation", summary: "School learning to higher competitive excellence.", highlight: "PCMB & Reasoning" },
  { id: "board", name: "Board Support", summary: "Comprehensive NCERT-aligned board preparation.", highlight: "ICSE · CBSE · State" },
  { id: "tests", name: "Curated Test Series", summary: "Structured assessment with results & remedial support." },
  { id: "math", name: "Math Mastery", summary: "An approach to build deep, long-term conceptual learning.", highlight: "Morning classes" },
  { id: "language", name: "Language Support", summary: "Dedicated support for Kannada & Hindi.", highlight: "ಕ  ·  ह" },
];

export type Achiever = { name: string; score: string; scoreSub?: string; tag?: string; institution?: string; photo: string };
export type AchieverGroup = { id: string; title: string; students: Achiever[] };

export const achieverGroups: AchieverGroup[] = [
  {
    id: "neet-jee",
    title: "NEET / IIT JEE",
    students: [
      { name: "Sanjana Benakatti", score: "525", scoreSub: "/720", institution: "SNMC, Bagalkot", photo: sanjana.url },
      { name: "Khalid Mirji", score: "488", scoreSub: "/720", institution: "SNMC, Bagalkot", photo: khalid.url },
      { name: "Niranjan K", score: "AIR* 1153", institution: "IIT Mumbai", photo: niranjan.url },
      { name: "Mohammad Ayaan", score: "98.03", scoreSub: "%ile", institution: "MSRIT, Bangalore", photo: ayaan.url },
    ],
  },
  {
    id: "class-x",
    title: "Class X",
    students: [
      { name: "Aadhya Hiremath", score: "95.2%", tag: "ICSE", photo: aadhya.url },
      { name: "Tejas Onimani", score: "97%", tag: "STATE", photo: tejas.url },
      { name: "Rajat kulkarni", score: "91.8%", tag: "CBSE", photo: rajat.url },
      { name: "Prasanna Totad", score: "91.2%", tag: "CBSE", photo: prasanna.url },
    ],
  },
  {
    id: "class-ix",
    title: "Class IX",
    students: [
      { name: "Sharan Tugalad", score: "96%", tag: "CBSE", photo: sharan.url },
      { name: "Shalini Shettar", score: "82%", tag: "CBSE", photo: shalini.url },
    ],
  },
  {
    id: "class-viii",
    title: "Class VIII",
    students: [{ name: "Amogh Mantur", score: "85%", tag: "CBSE", photo: amogh.url }],
  },
];

export const faqs = [
  { q: "Which classes does ACE teach?", a: "ACE runs programs for students of Classes VIII, IX and X." },
  { q: "Which boards do you support?", a: "We support students from ICSE, CBSE and State Board schools." },
  { q: "Are admissions open?", a: "Yes — admissions are open for Academic Year 2027–28. Send an enquiry or call +91 91484 86661 to know more." },
  { q: "What programs are offered?", a: "Bridge Course, Foundation (PCMB & Reasoning), Board Support, Curated Test Series, Math Mastery and Language Support (Kannada & Hindi)." },
  { q: "Do you prepare students for competitive exams?", a: "Our Foundation program takes students from school learning to higher competitive excellence, covering Physics, Chemistry, Maths, Biology and Reasoning." },
  { q: "When are Math Mastery classes held?", a: "Math Mastery runs as morning classes. Please call us for the current batch timings." },
  { q: "Where is ACE located?", a: "Lakeside Commercial Complex, 2nd Floor, Opp. Tolankere, Lakshmi Nagar, Hubballi – 580030." },
];
