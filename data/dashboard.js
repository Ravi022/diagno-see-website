// Deterministic synthetic demonstration data, not patient records.
export const programmeNames = [
  "TB",
  "Maternal health",
  "NCD",
  "Cancer",
  "Emergency care",
  "Others",
];
const programmeLimits = [4100, 6950, 9200, 10800, 11850, 12460];
export const facilityNames = [
  "District Hospital A",
  "Community Health Centre B",
  "PHC C",
  "Medical College D",
  "Other facilities",
];
const facilityLimits = [2480, 4340, 5320, 5960, 12460];
export const programmeColors = [
  "#0877ee",
  "#9665f0",
  "#17ac92",
  "#ff9b43",
  "#f16c70",
  "#91a6be",
];
export const records = Array.from({ length: 12460 }, (_, i) => {
  const order = (i * 7919) % 12460,
    distribution = (i * 37) % 12460;
  const day = (i * 31) % 181,
    date = new Date(Date.UTC(2026, 0, 1 + day)).toISOString().slice(0, 10);
  return {
    id: "DS-" + String(i + 1).padStart(6, "0"),
    patient: "SAMPLE-" + String(i + 1).padStart(6, "0"),
    date,
    programme:
      programmeNames[programmeLimits.findIndex((n) => distribution < n)],
    facility: facilityNames[facilityLimits.findIndex((n) => i < n)],
    district:
      i < 4340 ? "District A" : i < 5960 ? "District B" : "Other districts",
    reported: order < 11890,
    referred: order < 2480,
    followup: order >= 410 && order < 940,
    completed: order < 410,
    critical: (i * 13) % 12460 < 300,
    pending: order >= 940 && order < 1340,
    delayed: order >= 1340 && order < 1540,
    due: order >= 410 && order < 510,
    delayedReport: order >= 11890 && order < 11985,
    status:
      order < 410
        ? "Completed"
        : order < 940
          ? "Follow-up"
          : order < 2480
            ? "Referred"
            : order < 11890
              ? "Reported"
              : "Awaiting report",
  };
});

export const sum = (rows, key) =>
  rows.reduce((n, r) => n + (r[key] ? 1 : 0), 0);
export const metrics = (rows) => ({
  screened: rows.length,
  reported: sum(rows, "reported"),
  referred: sum(rows, "referred"),
  followup: sum(rows, "followup"),
  completed: sum(rows, "completed"),
  critical: sum(rows, "critical"),
  pending: sum(rows, "pending"),
  delayed: sum(rows, "delayed"),
  due: sum(rows, "due"),
  delayedReport: sum(rows, "delayedReport"),
});
export const defaults = {
  programme: "all",
  district: "all",
  facility: "all",
  from: "2026-01-01",
  to: "2026-06-30",
};
export function filterRecords(filters) {
  return records.filter(
    (r) =>
      (filters.programme === "all" || r.programme === filters.programme) &&
      (filters.district === "all" || r.district === filters.district) &&
      (filters.facility === "all" || r.facility === filters.facility) &&
      (!filters.from || r.date >= filters.from) &&
      (!filters.to || r.date <= filters.to),
  );
}
