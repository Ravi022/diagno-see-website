import { test } from "node:test";
import assert from "node:assert/strict";
import {
  records,
  defaults,
  filterRecords,
  metrics,
} from "../data/dashboard.js";
test("presentation sample values are preserved", () => {
  assert.equal(records.length, 12460);
  const m = metrics(filterRecords(defaults));
  assert.deepEqual(
    [
      m.reported,
      m.referred,
      m.followup,
      m.critical,
      m.pending,
      m.due,
      m.delayed,
    ],
    [11890, 2480, 530, 300, 400, 100, 200],
  );
});
test("facility and district filters compose correctly", () => {
  const f = { ...defaults, facility: "PHC C" };
  assert.equal(filterRecords(f).length, 980);
  assert.equal(filterRecords({ ...f, district: "District A" }).length, 0);
  assert.equal(filterRecords({ ...f, district: "District B" }).length, 980);
});
test("inclusive date boundaries and combined programme filters", () => {
  const f = {
    ...defaults,
    facility: "District Hospital A",
    programme: "TB",
    from: "2026-01-01",
    to: "2026-01-01",
  };
  const r = filterRecords(f);
  assert(r.length > 0);
  assert(
    r.every(
      (row) =>
        row.date === f.from &&
        row.facility === f.facility &&
        row.programme === "TB",
    ),
  );
  assert.equal(filterRecords({ ...defaults, from: "2027-01-01" }).length, 0);
});
