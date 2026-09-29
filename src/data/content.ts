export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  category: 'Monitoring' | 'Automation' | 'Security' | 'Management';
  badge?: string;
}

export interface PlatformPillar {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export const ORIGINAL_CONTENT = {
  hero: {
    kicker: "RMM for MSPs",
    headline: "RMM Software to Centralize Your IT Infrastructure",
    subheadline: "Best MSP Software for IT Teams to monitor assets, apply patches, and troubleshoot remotely from anywhere.",
    primaryCta: "Request a Demo",
    secondaryCta: "Start Free Trial",
    trustBullets: [
      "14 days free trial",
      "No Credit card Required",
      "Setup in minutes",
      "Your information is 100% secure"
    ]
  },
  
  pillars: [
    {
      id: "install-connect",
      title: "Install & Connect Remotely",
      description: "Install the Agent Software once, and instantly bring remote or on-site devices under your control. No need to be physically present—Remote Monitoring and Management makes it possible."
    },
    {
      id: "centralized-mgmt",
      title: "Centralized Management",
      description: "Access all your IT assets from a single location. Monitor system health, check status, and take actions without switching tools."
    },
    {
      id: "automations-tools",
      title: "Automations and Remote Tools",
      description: "Upload scripts, create commands, and set up checks to monitor systems like memory usage or system updates. These tools allow remote execution without needing to visit each system."
    },
    {
      id: "secure-troubleshooting",
      title: "Secure & Efficient Troubleshooting",
      description: "Identify and fix issues without disturbing end users. Perform remote actions like rebooting or uninstalling software—all via a secure and streamlined Remote Monitoring and Management platform."
    }
  ],

  platformSlides: [
    {
      step: "1 / 4",
      title: "Agent Software",
      heading: "Manage Everything from One Platform",
      description: "Easily installed on devices, it automates the collection and syncing of asset data—covering hardware, software, and network information across Windows, Mac, and Linux. This solution offers a centralized and efficient way to manage assets and gain visibility into your IT environment.",
      osSupport: ["Windows", "macOS", "Linux"],
      highlights: [
        "Lightweight background service (<1% CPU)",
        "Automated hardware & software telemetry",
        "Encrypted TLS 1.3 heartbeat communication",
        "Zero disruption to client end-users"
      ]
    },
    {
      step: "2 / 4",
      title: "Remote Monitoring and Management",
      heading: "Manage Everything from One Platform",
      description: "Monitor asset performance and remotely manage devices directly from Faveo. Execute commands, run scripts, reboot, or shut down systems—all without physical access. This feature helps automate troubleshooting to resolve issues faster and manage IT operations, and makes Faveo the best MSP software for efficient device management.",
      osSupport: ["Windows", "macOS", "Linux"],
      highlights: [
        "Real-time CPU, RAM, Disk and network metrics",
        "Remote CLI and PowerShell shell access",
        "Instant one-click reboot and shutdown actions",
        "Integrated incident ticketing inside ServiceDesk"
      ]
    },
    {
      step: "3 / 4",
      title: "Asset Management",
      heading: "Manage Everything from One Platform",
      description: "Faveo’s asset management helps IT teams track and manage assets from one place. Assets can be either hardware or software that the company is currently using. This improves visibility, reduces manual work, and helps everything run more efficiently.",
      osSupport: ["All IT Assets", "Peripherals", "Cloud Instances"],
      highlights: [
        "Full hardware spec audit (CPU, RAM, Serial, BIOS)",
        "Installed software inventory & version tracker",
        "License expiration and warranty tracking",
        "Lifecycle history and audit trail"
      ]
    },
    {
      step: "4 / 4",
      title: "Patch Management",
      heading: "Manage Everything from One Platform",
      description: "Faveo’s patch management solutions help keep your devices secure by checking for updates and installing them on time. This keeps systems protected, improves performance, and makes sure everything runs smoothly without being on site.",
      osSupport: ["Windows OS", "Third-party Apps"],
      highlights: [
        "Automated vulnerability detection",
        "Scheduled off-peak patch deployment",
        "Zero-day security rollouts",
        "Compliance & patch audit reporting"
      ]
    }
  ],

  features: [
    {
      id: "real-time-monitoring",
      title: "Real-Time Device Monitoring",
      description: "Monitor health and performance of all connected devices. Get instant visibility into system metrics like CPU, memory, and disk usage—helping your team act before issues become problems.",
      category: "Monitoring"
    },
    {
      id: "remote-script-execution",
      title: "Remote Script Execution",
      description: "Save time with automation. Upload and execute custom scripts across multiple systems remotely to deploy updates, apply patches, or fix issues, without needing to be physically present.",
      category: "Automation"
    },
    {
      id: "easy-agent-deployment",
      title: "Easy Agent Deployment",
      description: "Deploy lightweight Agent Software across Windows, macOS, or Linux in minutes. Once installed, every device becomes manageable via Faveo’s Remote Monitoring and Management software.",
      category: "Management"
    },
    {
      id: "command-control-access",
      title: "Command & Control Access",
      description: "Take full control of devices from anywhere. Send real-time commands to restart services, check logs, or carry out system tasks, enabling faster resolution and less downtime.",
      category: "Automation"
    },
    {
      id: "automated-health-checks",
      title: "Automated Health Checks",
      description: "Set up smart checks to monitor specific system conditions such as low disk space or software version mismatches. Ensure systems stay compliant with your IT policies automatically.",
      category: "Monitoring"
    },
    {
      id: "one-click-remote-actions",
      title: "One-Click Remote Actions",
      description: "Perform vital system tasks—like shutdown, reboot, or uninstall with just one click, right from your dashboard. Whether you need to restart a machine, power off a device that’s no longer in use, or uninstall the agent software, everything can be done instantly and securely.",
      category: "Management"
    },
    {
      id: "patch-management-system",
      title: "Patch Management System",
      description: "Automatically apply critical updates to keep your systems secure, up to date, and compliant—ensuring smooth performance and protection. It’s all handled seamlessly in the background.",
      category: "Security"
    },
    {
      id: "role-base-access",
      title: "Role Base Access",
      description: "Ensure full control over who can access or perform key operations within your RMM tool. Only admins or authorized agents can execute sensitive actions like running scripts, pushing updates, or uninstalling software.",
      category: "Security"
    },
    {
      id: "it-asset-management",
      title: "IT Asset Management",
      description: "Easily manage all your IT assets from one centralized dashboard. Displays key information like operating system details, hardware specs, and usage metrics. This makes it simple to monitor and organize your assets, reduce downtime, and make better decisions about maintenance and upgrades.",
      category: "Management"
    }
  ] as FeatureItem[],

  whyFaveoPoints: [
    {
      title: "Scalable licensing with RMM tools for MSP to improve device monitoring & management",
      description: "Predictable, fair pricing structured for managed service providers. Scale from 50 to 50,000+ endpoints smoothly without punitive per-device price jumps."
    },
    {
      title: "Remote Monitoring Capabilities",
      description: "Constant oversight of server, workstation, and laptop performance with proactive threshold alerts sent straight to your technicians."
    },
    {
      title: "One platform to manage your entire IT",
      description: "Unify service desk ticketing, asset inventory, remote troubleshooting, and patch schedules under a cohesive, synchronized architecture."
    },
    {
      title: "Efficient usage and reduces downtime",
      description: "Automate recurring maintenance chores, identify silent hardware failures early, and resolve user issues without interrupting client work."
    },
    {
      title: "Simple, powerful, and intuitive user experience",
      description: "A modern, responsive interface built for technical efficiency. Onboard new technicians in hours, not weeks of specialized training."
    }
  ],

  faqs: [
    {
      question: "What is RMM in Faveo ServiceDesk?",
      answer: "RMM refers to Remote Monitoring and Management. In Faveo ServiceDesk, RMM Software allows the IT staff to remotely monitor device health, push updates, and fix systems from a central dashboard."
    },
    {
      question: "How is RMM enabled in Faveo?",
      answer: "RMM is powered by Agent Software, which must be installed on the target devices to allow remote operations and real-time tracking."
    },
    {
      question: "What benefits does RMM provide to IT teams?",
      answer: "It helps reduce manual tasks, speeds up issue resolution, supports remote troubleshooting, and improves visibility across all managed devices."
    },
    {
      question: "What platforms can be monitored and managed with RMM?",
      answer: "RMM via Agent Software supports Windows, macOS, and Linux systems."
    },
    {
      question: "What types of remote actions can be performed through RMM Software?",
      answer: "Agents can run scripts, execute commands, check system health, shut down, reboot, and uninstall the agent—all remotely."
    },
    {
      question: "How does Faveo's RMM Software help with patch management system?",
      answer: "Faveo's RMM Software allows remote patch distribution particularly for Windows machines so that machines receive the new security patches and are compliant."
    },
    {
      question: "Why is RMM Software vital to expanding IT teams and MSPs?",
      answer: "As infrastructures grow and companies increase, RMM Software provides the scalability, automation, and central control required to administer systems and minimize downtime."
    },
    {
      question: "Can agents manage multiple devices from a single place?",
      answer: "Yes, Faveo’s centralized RMM dashboard lets agents handle many devices efficiently, improving productivity and control."
    }
  ] as FAQItem[],

  socialProof: {
    title: "See Why 5000+ Businesses Trust Faveo",
    subtitle: "Learn How Faveo Service Desk Can Make Your Customer Happy",
    stats: [
      { value: "5,000+", label: "Businesses Trust Faveo Globally" },
      { value: "99.98%", label: "Average Infrastructure Uptime" },
      { value: "70%", label: "Faster Average Time to Resolution" },
      { value: "50+", label: "Supported Languages & Locales" }
    ]
  },

  ctaBanner: {
    heading: "Streamline Your Workflow with Faveo",
    subheading: "Join thousands of IT teams and MSPs using Faveo RMM to automate maintenance, eliminate manual endpoint visits, and deliver superior service delivery.",
    trialTerms: "14 days free trial · No Credit card Required · Setup in minutes"
  }
};
