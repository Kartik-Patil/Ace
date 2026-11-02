import { describe, expect, it } from "vitest";
import { achieverGroups, contact } from "@/data/ace";
import { enquirySchema } from "@/lib/enquiry";

const valid = { studentName: "Asha", parentName: "Ravi", phone: "98765 43210", studentClass: "Class IX", board: "CBSE", program: "Foundation" };

describe("enquiry form rules", () => {
  it("accepts a complete enquiry with a 10-digit mobile", () => {
    expect(enquirySchema.safeParse(valid).success).toBe(true);
  });
  it("accepts +91 prefixed numbers", () => {
    expect(enquirySchema.safeParse({ ...valid, phone: "+91 9148486661" }).success).toBe(true);
  });
  it("rejects short phone numbers", () => {
    expect(enquirySchema.safeParse({ ...valid, phone: "12345" }).success).toBe(false);
  });
  it("allows classes VII to X", () => {
    expect(enquirySchema.safeParse({ ...valid, studentClass: "Class VII" }).success).toBe(true);
    expect(enquirySchema.safeParse({ ...valid, studentClass: "Class XI" }).success).toBe(false);
  });
});

describe("flyer content", () => {
  it("lists 11 achievers grouped as on the flyer", () => {
    expect(achieverGroups.map((g) => g.students.length)).toEqual([4, 4, 2, 1]);
  });
  it("keeps scores exactly as printed", () => {
    const all = achieverGroups.flatMap((g) => g.students);
    expect(all.find((s) => s.name === "Tejas Onimani")?.score).toBe("97%");
    expect(all.find((s) => s.name === "Mohammad Ayaan")?.score).toBe("98.03");
    expect(all.find((s) => s.name === "Niranjan K")?.institution).toBe("IIT Mumbai");
  });
  it("uses the flyer phone number", () => {
    expect(contact.phoneHref).toBe("tel:+919148486661");
  });
});
