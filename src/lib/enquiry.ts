import { z } from "zod";

export const enquirySchema = z.object({
  studentName: z.string().trim().min(2, "Please enter the student's name").max(80, "Name is too long"),
  parentName: z.string().trim().min(2, "Please enter the parent's name").max(80, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").optional(),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s-]/g, "").replace(/^(\+91|0)/, ""))
    .refine((v) => /^[6-9]\d{9}$/.test(v), "Enter a valid 10-digit Indian mobile number"),
  studentClass: z.enum(
    [
      "Class VII",
      "Class VIII",
      "Class IX",
      "Class X",
      "Class VII (7th)",
      "Class VIII (8th)",
      "Class IX (9th)",
      "Class X (10th)",
      "7th",
      "8th",
      "9th",
      "10th",
    ],
    { errorMap: () => ({ message: "Choose a class" }) }
  ),
  board: z.enum(["ICSE", "CBSE", "State Board"], { errorMap: () => ({ message: "Choose a board" }) }),
  program: z.string().min(1, "Choose a program"),
  notes: z.string().optional(),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
