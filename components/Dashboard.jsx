"use client";
import { useMemo, useState } from "react";
import {
  records,
  programmeNames,
  facilityNames,
  programmeColors,
  metrics,
  defaults,
  filterRecords,
} from "@/data/dashboard";
import { download } from "./download";
const fmt = (n) => n.toLocaleString("en-US");
const titles = {
  overview: "Programme overview",
  cases: "Case journey",
  patients: "Sample patient records",
  referrals: "Referral tracking",
  followups: "Follow-up progress",
  programmes: "Programme distribution",
  facilities: "Facility activity",
  reports: "Reporting overview",
};
const nav = {
  overview: "Dashboard",
  cases: "Cases",
  patients: "Patients",
  referrals: "Referrals",
  followups: "Follow-ups",
  programmes: "Programmes",
  facilities: "Facilities",
  reports: "Reports",
};
function Bar({ label, value, total, color = "#0877ee" }) {
  return (
    <div className="bar-item">
      <span>{label}</span>
      <div className="bar-track">
        <i
          style={{
            width: (total ? (value / total) * 100 : 0) + "%",
            "--bar": color,
          }}
        />
      </div>
      <b>{fmt(value)}</b>
    </div>
  );
}
function Table({ headers, rows }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Overview({ rows, m }) {
  const counts = programmeNames.map((name) => [
    name,
    rows.filter((r) => r.programme === name).length,
  ]);
  let start = 0;
  const stops = counts.map(([, v], i) => {
    const end = start + (v / rows.length) * 100;
    const stop = programmeColors[i] + " " + start + "% " + end + "%";
    start = end;
    return stop;
  });
  return (
    <div className="dashboard-charts">
      <section className="dashboard-panel">
        <h4>Case journey</h4>
        {[
          ["Screened", "screened", "#0877ee"],
          ["Reported", "reported", "#22b993"],
          ["Referred", "referred", "#ff9b43"],
          ["Follow-up", "followup", "#9566f0"],
          ["Completed", "completed", "#14a6ad"],
        ].map(([label, key, color]) => (
          <Bar
            key={key}
            label={label}
            value={m[key]}
            total={rows.length}
            color={color}
          />
        ))}
      </section>
      <section className="dashboard-panel">
        <h4>Programme distribution</h4>
        <div className="programme-donut">
          <div
            className="donut"
            style={{ background: "conic-gradient(" + stops.join(",") + ")" }}
            role="img"
            aria-label={
              "Programme distribution, " + rows.length + " illustrative cases"
            }
          >
            <div>
              <strong>{fmt(rows.length)}</strong>
              <small>Total cases</small>
            </div>
          </div>
          <div className="legend">
            {counts.map(([name, v], i) => (
              <div key={name}>
                <i style={{ "--color": programmeColors[i] }} />
                <span>{name}</span>
                <b>{fmt(v)}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="dashboard-panel">
        <h4>Facility activity</h4>
        {facilityNames.map((name) => (
          <Bar
            key={name}
            label={name}
            value={rows.filter((r) => r.facility === name).length}
            total={rows.length}
          />
        ))}
      </section>
      <section className="dashboard-panel">
        <h4>Attention needed</h4>
        {[
          ["Critical findings", "critical", "#ef6e72"],
          ["Pending referrals", "pending", "#f59c43"],
          ["Follow-ups due", "due", "#9169e9"],
          ["Delayed referrals", "delayed", "#0c91d6"],
        ].map(([name, key, color]) => (
          <div className="alert-row" key={key} style={{ "--alert": color }}>
            <span>{name}</span>
            <strong>{fmt(m[key])}</strong>
          </div>
        ))}
      </section>
    </div>
  );
}
export default function Dashboard() {
  const [filters, setFilters] = useState(defaults),
    [view, setView] = useState("overview"),
    [page, setPage] = useState(1);
  const invalid = filters.from && filters.to && filters.from > filters.to;
  const filtered = useMemo(
    () => (invalid ? [] : filterRecords(filters)),
    [filters, invalid],
  );
  const m = useMemo(() => metrics(filtered), [filtered]);
  const rows = useMemo(
    () =>
      view === "referrals"
        ? filtered.filter((r) => r.referred)
        : view === "followups"
          ? filtered.filter((r) => r.followup)
          : view === "reports"
            ? filtered.filter((r) => r.reported)
            : filtered,
    [filtered, view],
  );
  const pages = Math.max(1, Math.ceil(rows.length / 12));
  const current = Math.min(page, pages);
  const update = (key, value) => {
    setFilters((f) => ({ ...f, [key]: value }));
    setPage(1);
  };
  const groups = view === "programmes" ? programmeNames : facilityNames;
  const groupKey = view === "programmes" ? "programme" : "facility";
  function exportCSV() {
    let csv;
    if (view === "programmes" || view === "facilities") {
      csv = [
        ["Group", "Cases", "Reported", "Referred", "Follow-up"],
        ...groups.map((name) => {
          const v = metrics(filtered.filter((r) => r[groupKey] === name));
          return [name, v.screened, v.reported, v.referred, v.followup];
        }),
      ];
    } else {
      csv = [
        [
          "Sample case ID",
          "Sample patient ID",
          "Registered",
          "Programme",
          "Facility",
          "Status",
          "Critical",
          "Pending referral",
          "Delayed referral",
          "Follow-up due",
        ],
        ...rows.map((r) => [
          r.id,
          r.patient,
          r.date,
          r.programme,
          r.facility,
          r.status,
          r.critical,
          r.pending,
          r.delayed,
          r.due,
        ]),
      ];
    }
    download(
      "\uFEFF" +
        csv
          .map((row) =>
            row.map((v) => '"' + String(v).replace(/"/g, '""') + '"').join(","),
          )
          .join("\r\n"),
      "DiagnoSee-Illustrative-" + view + ".csv",
      "text/csv;charset=utf-8",
    );
  }
  function results() {
    if (invalid)
      return <div className="empty-state">Please correct the date range.</div>;
    if (!filtered.length)
      return (
        <div className="empty-state">
          <strong>No sample cases in this range.</strong>Choose dates within 1
          January–30 June 2026, or reset the filters.
        </div>
      );
    if (view === "overview") return <Overview rows={filtered} m={m} />;
    if (view === "programmes" || view === "facilities")
      return (
        <Table
          headers={[
            view === "programmes" ? "Programme" : "Facility",
            "Cases",
            "Reported",
            "Referred",
            "Follow-up",
          ]}
          rows={groups.map((name) => {
            const v = metrics(filtered.filter((r) => r[groupKey] === name));
            return [
              name,
              fmt(v.screened),
              fmt(v.reported),
              fmt(v.referred),
              fmt(v.followup),
            ];
          })}
        />
      );
    if (!rows.length)
      return (
        <div className="empty-state">
          <strong>No matching records.</strong>Try another programme or date
          range.
        </div>
      );
    return (
      <>
        <Table
          headers={
            view === "patients"
              ? [
                  "Sample patient ID",
                  "Case ID",
                  "Registered",
                  "Programme",
                  "Facility",
                ]
              : [
                  "Case ID",
                  "Registered",
                  "Programme",
                  "Facility",
                  view === "referrals"
                    ? "Referral status"
                    : view === "followups"
                      ? "Follow-up"
                      : "Status",
                ]
          }
          rows={rows.slice((current - 1) * 12, current * 12).map((r) =>
            view === "patients"
              ? [r.patient, r.id, r.date, r.programme, r.facility]
              : [
                  r.id,
                  r.date,
                  r.programme,
                  r.facility,
                  <span className="table-status" key={r.id}>
                    {view === "referrals"
                      ? r.pending
                        ? "Pending"
                        : r.delayed
                          ? "Delayed"
                          : r.completed
                            ? "Completed"
                            : "Referred"
                      : view === "followups"
                        ? r.due
                          ? "Due"
                          : r.completed
                            ? "Completed"
                            : "In progress"
                        : r.status}
                  </span>,
                ],
          )}
        />
        <div className="pagination">
          <span>
            Showing {fmt((current - 1) * 12 + 1)}–
            {fmt(Math.min(current * 12, rows.length))} of {fmt(rows.length)}{" "}
            sample records
          </span>
          <div>
            <button
              disabled={current === 1}
              onClick={() => setPage(current - 1)}
            >
              ← Previous
            </button>
            <button
              disabled={current === pages}
              onClick={() => setPage(current + 1)}
            >
              Next →
            </button>
          </div>
        </div>
        {view === "reports" && (
          <div className="dashboard-aux">
            <div>
              <span>Awaiting reports</span>
              <strong>{fmt(filtered.length - m.reported)}</strong>
            </div>
            <div>
              <span>Delayed reports</span>
              <strong>{fmt(m.delayedReport)}</strong>
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <div className="dashboard-app">
      <div className="product-toolbar">
        <strong>
          DiagnoSee <span>/ Programme intelligence</span>
        </strong>
        <span className="sample-label">
          Interactive sample · no patient data
        </span>
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-nav" aria-label="Dashboard views">
          {Object.entries(nav).map(([key, label]) => (
            <button
              key={key}
              className={view === key ? "active" : ""}
              aria-pressed={view === key}
              onClick={() => {
                setView(key);
                setPage(1);
              }}
            >
              {label}
            </button>
          ))}
        </aside>
        <div className="dashboard-content">
          <div className="dashboard-heading">
            <div>
              <p className="eyebrow">PROGRAMME INTELLIGENCE</p>
              <h3>{titles[view]}</h3>
            </div>
            <button
              className="export-button"
              onClick={exportCSV}
              disabled={!!invalid}
            >
              Export CSV ↓
            </button>
          </div>
          <form
            id="dashboard-filters"
            onSubmit={(e) => e.preventDefault()}
            onReset={(e) => {
              e.preventDefault();
              setFilters(defaults);
              setPage(1);
            }}
          >
            {[
              ["programme", "Programme", programmeNames],
              [
                "district",
                "District",
                ["District A", "District B", "Other districts"],
              ],
              ["facility", "Facility", facilityNames],
            ].map(([key, label, options]) => (
              <label key={key}>
                {label}
                <select
                  id={key + "-filter"}
                  value={filters[key]}
                  onChange={(e) => update(key, e.target.value)}
                >
                  <option value="all">
                    {key === "facility"
                      ? "All Facilities"
                      : "All " + label.toLowerCase() + "s"}
                  </option>
                  {options.map((name) => (
                    <option key={name}>{name}</option>
                  ))}
                </select>
              </label>
            ))}
            {[
              ["from", "From date"],
              ["to", "To date"],
            ].map(([key, label]) => (
              <label key={key}>
                {label}
                <input
                  type="date"
                  id={"date-" + key}
                  value={filters[key]}
                  min="2026-01-01"
                  max="2026-06-30"
                  onChange={(e) => update(key, e.target.value)}
                />
              </label>
            ))}
            <button type="reset" className="reset-filters">
              Reset
            </button>
          </form>
          <p role="status">
            {invalid ? "The start date must be on or before the end date." : ""}
          </p>
          <div className="dashboard-kpis">
            {[
              ["Cases screened", "screened", "#0877ee"],
              ["Reports generated", "reported", "#22b993"],
              ["Referred for care", "referred", "#ff9b43"],
              ["Follow-ups in progress", "followup", "#9566f0"],
              ["Critical findings", "critical", "#ef6e72"],
            ].map(([name, key, color]) => (
              <div key={key} style={{ "--stat": color }}>
                <small>{name}</small>
                <strong>{fmt(m[key])}</strong>
              </div>
            ))}
          </div>
          <div id="dashboard-view">{results()}</div>
          <div className="dashboard-caption">
            Sample period: 1 January–30 June 2026. All records are synthetic and
            demonstrate the workflow; they are not clinical or operational
            results.
          </div>
        </div>
      </div>
    </div>
  );
}
