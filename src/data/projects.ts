export type ProjectStatus = "PRODUCTION" | "ACTIVE_DEV" | "DEPLOYED" | "COMPLETED" | "ARCHIVED";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  tags: string[];
  tagColor: string;
  problem: string;
  solution: string;
  impact: string[];
  terminalOutput?: string[];
  liveLink: string;
  isFavourite: boolean;
}

export const projectsData: ProjectData[] = [
  // --- FAVOURITE / LANDING PAGE PROJECTS ---
  {
    id: "p1",
    title: "Global Scale Multi-Cloud Orchestration",
    category: "Infrastructure",
    status: "PRODUCTION",
    tags: ["Kubernetes", "ArgoCD", "Terraform", "GitOps"],
    tagColor: "primary",
    problem:
      "Legacy monolithic deployment pipeline causing 4-hour downtime windows during global updates across three continents.",
    solution:
      "Implemented a Kubernetes-native GitOps workflow using ArgoCD and Terraform, enabling canary deployments and automated rollbacks.",
    impact: [
      "Reduced deployment time by 94%",
      "Achieved 99.99% availability during peak holiday traffic",
      "3 continental regions – zero-downtime updates",
    ],
    liveLink: "https://github.com/",
    isFavourite: true,
  },
  {
    id: "p2",
    title: "Neural Threat Detection Engine",
    category: "AI / Security",
    status: "ACTIVE_DEV",
    tags: ["PyTorch", "Transformers", "CUDA", "Kafka"],
    tagColor: "tertiary",
    problem:
      "Traditional signature-based IDS missing novel zero-day exploits and generating excessive false positives.",
    solution:
      "Developing a transformer-based anomaly detection system for network traffic patterns, identifying zero-day exploits in real-time using attention mechanisms.",
    impact: [
      "99.3% detection precision on benchmark datasets",
      "Sub-10ms inference latency on GPU clusters",
      "False positive reduction by 78%",
    ],
    terminalOutput: [
      "Input: Packet_Flow_Stream",
      "> Normalizing feature_vectors...",
      "> Applying Attention_Weights [0.89, 0.12, 0.04]",
      "> ALERT: ANOMALOUS_PATTERN_DETECTED",
    ],
    liveLink: "https://github.com/",
    isFavourite: true,
  },
  {
    id: "p3",
    title: "Ops-Insights V2",
    category: "Observability",
    status: "DEPLOYED",
    tags: ["Grafana", "Prometheus", "OpenTelemetry", "ClickHouse"],
    tagColor: "secondary",
    problem:
      "High-throughput SRE teams lacking unified observability across heterogeneous microservice environments.",
    solution:
      "A custom observability dashboard built for high-throughput SRE teams, integrating metrics, traces, and logs into a single pane of glass.",
    impact: [
      "MTTR reduced by 65% through contextual alerting",
      "200+ microservices instrumented",
      "Real-time SLO tracking and error budget management",
    ],
    liveLink: "https://github.com/",
    isFavourite: true,
  },
  {
    id: "p4",
    title: "Zero-Trust Network Migration",
    category: "Security",
    status: "COMPLETED",
    tags: ["Istio", "SPIFFE", "Vault", "OPA", "Envoy"],
    tagColor: "secondary",
    problem:
      "Financial services provider operating with perimeter-based security across 5,000+ endpoints – high blast radius risk.",
    solution:
      "Transitioning from perimeter-based security to a robust identity-aware proxy system with mutual TLS and automated certificate rotation.",
    impact: [
      "MFA enforcement at every resource layer",
      "Automated certificate rotation via Vault",
      "SOC2 Type II compliance achieved",
    ],
    liveLink: "https://github.com/",
    isFavourite: true,
  },

  // --- ARCHIVED / ALL PROJECTS ONLY ---
  {
    id: "p5",
    title: "Automated Incident Response Bot",
    category: "DevOps",
    status: "COMPLETED",
    tags: ["Python", "Golang", "Kubernetes", "Slack API"],
    tagColor: "primary",
    problem:
      "On-call engineers suffering from alert fatigue due to 100+ low-level alerts per week requiring manual mitigation.",
    solution:
      "Developed a custom ChatGPT-powered ChatOps bot capable of diagnosing cluster health, auto-scaling nodes, and running remediation playbooks directly from Slack.",
    impact: [
      "Eliminated 85% of tier-1 manual wakeups",
      "Automated resolution of OOM and Disk space limits",
      "Full audit logs synced to SIEM platform"
    ],
    terminalOutput: [
      "[SLACK] User 'OpsTeam' requests cluster state...",
      "> Gathering PagerDuty metrics...",
      "> Executing playbook: auto_scale.sh",
      "> STATUS: RESOLVED"
    ],
    liveLink: "https://github.com/",
    isFavourite: false,
  },
  {
    id: "p6",
    title: "Serverless E-Commerce Event Bus",
    category: "Architecture",
    status: "ARCHIVED",
    tags: ["AWS EventBridge", "Lambda", "DynamoDB", "Node.js"],
    tagColor: "tertiary",
    problem:
      "Legacy REST architecture was dropping critical inventory updates during extreme flash sales.",
    solution:
      "Redesigned the core backend into an event-driven serverless architecture using EventBridge, ensuring 100% guarantee of message delivery.",
    impact: [
      "Supported 10,000+ RPS during Black Friday",
      "Abstracted service tight-coupling",
      "Reduced infrastructure fixed costs by 40%"
    ],
    liveLink: "https://github.com/",
    isFavourite: false,
  },
  {
    id: "p7",
    title: "Container Vulnerability Scraper",
    category: "Security",
    status: "ARCHIVED",
    tags: ["Rust", "Docker", "Trivy", "CI/CD"],
    tagColor: "secondary",
    problem:
      "Developers constantly bypassing security scanning gates, introducing critical CVEs to staging.",
    solution:
      "Abstracted security checks upstream by writing an ultra-fast Rust-based scraper that intercepts pipeline triggers and blocks insecure manifests.",
    impact: [
      "0-day vulnerability window shortened to hours",
      "Increased pipeline enforcement across 50 repositories",
      "Sub-second execution times in CI"
    ],
    liveLink: "https://github.com/",
    isFavourite: false,
  }
];
