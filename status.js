/*
  Status data for the site. This is the only file to edit when something changes:
  the page reads it on load, and adds live data (last push, activity, merged pull
  requests) from the public GitHub API.

  progress: a whole number from 0 to 100, or null to hide the gauge.
  repo:     "owner/name" on GitHub, or null if there is no public repository.
*/
window.STATUS = {
  updated: "2026-11-16",
  github: "Divide317",

  projects: [
    {
      name: "Crossview",
      tagline: "Linux rootkit detector",
      repo: "Divide317/Crossview",
      stage: "In progress",
      progress: 35,
      stack: "C, Python (ctypes), GitHub Actions",
      field: "Systems security",
      points: [
        "Asks the operating system the same question through independent interfaces (libc, raw syscalls, direct probes) and flags where the answers disagree.",
        "Covers processes, kernel modules, ports and preload hooks, localises each mismatch to user space or the kernel, and maps it to a MITRE ATT&CK technique.",
        "CI runs the tests under AddressSanitizer, UBSan and Valgrind, with clang-tidy, ruff and pytest. The threat model and limitations are published in the repository."
      ],
      next: "an eBPF sensor, an anomaly model, and an evaluation against research rootkits in an isolated lab VM."
    },
    {
      name: "CreaseGuard",
      tagline: "Cricket no-ball detection and rule adjudication",
      repo: "Divide317/No_ball",
      stage: "In progress",
      progress: null,
      stack: "Python, PyTorch, OpenCV, FastAPI, ONNX",
      field: "Computer vision",
      points: [
        "Two residual CNNs with squeeze-and-excitation attention classify front-foot oversteps and waist-high full tosses from side-on camera frames.",
        "Grad-CAM heatmaps show what the model looked at, so an umpire can check each decision.",
        "A rule engine covers the remaining no-ball laws across five match formats, and a FastAPI service evaluates new frames as they arrive."
      ],
      next: "detection on live broadcast video."
    },
    {
      name: "AML Pattern Engine",
      tagline: "Graph engine for money-laundering patterns",
      repo: "Divide317/aml-engine",
      stage: "Design stage",
      progress: 10,
      stack: "C++20, pybind11, Python",
      field: "Financial crime detection",
      points: [
        "A temporal graph engine to detect laundering patterns such as cycles, fan-in, fan-out and scatter-gather.",
        "Targets IBM's synthetic anti-money-laundering dataset of 5.08 million transactions.",
        "The design document, C++ API and test fixtures are written. The engine itself is not built yet."
      ],
      next: "the graph engine, then a benchmark against NetworkX."
    },
    {
      name: "Trustworthy Sensor Node",
      tagline: "Signed, replay-protected sensor telemetry",
      repo: "Divide317/sensor-node",
      stage: "Design stage",
      progress: 5,
      stack: "Bare-metal C (ATmega328P), FastAPI",
      field: "Embedded security",
      points: [
        "A microcontroller signs each sensor reading with HMAC-SHA256 and numbers it, so the gateway can detect forged, replayed, delayed or dropped packets.",
        "The design and packet format are decided. Firmware and hardware are not started."
      ],
      next: "firmware on an Arduino Nano and the FastAPI gateway."
    },
    {
      name: "GradPilot",
      tagline: "AI admissions planner for students applying abroad",
      repo: null,
      stage: "Hackathon finalist",
      finished: true,
      progress: null,
      stack: "Team hackathon project",
      field: "Applied AI, education",
      points: [
        "Builds a roadmap of courses and extracurricular goals from past admits to a student's target universities.",
        "Recalibrates every week and redirects students to realistic alternatives when the target moves out of reach.",
        "State-level finalist at Bit N Build 2025, a Google Developer Groups hackathon."
      ],
      next: null
    }
  ],

  /* done / total: courses finished in a multi-course certificate, or null to hide the count */
  learning: [
    {
      name: "Google Cybersecurity Professional Certificate",
      provider: "Coursera",
      state: "In progress",
      done: null,
      total: null,
      covers: "Linux, SQL and Python for security work, SIEM tools, intrusion detection, packet analysis, incident response"
    },
    {
      name: "CompTIA Security+",
      provider: "CompTIA",
      state: "Planned for 2027",
      done: null,
      total: null,
      covers: "threats and mitigations, security architecture, security operations, governance and risk"
    }
  ]
};
