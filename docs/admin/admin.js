const STORAGE_KEY = "cloud2br-program-pdf-v10";

const courseCatalog = {
  "https://cloud2br-tec.github.io/ai-academy-101-ml/": {
    title: "Machine Learning Fundamentals",
    sessions: [
      ["ML basics, vocabulary, and practical examples", "1 hour"],
      ["Azure ML lifecycle, workspace, and authoring", "1.5 hours"],
      ["Assets, lineage, and a guided model build", "2 hours"],
      ["Build, evaluate, and interpret model metrics", "2 hours"],
      ["Deploy, score, and monitor a model", "2 hours"]
    ]
  },
  "https://cloud2br-tec.github.io/ai-academy-102-ml/": {
    title: "Applied Machine Learning",
    sessions: [
      ["ML math, taxonomy, and end-to-end lifecycle", "1.5 hours"],
      ["Azure ML environment and runtime setup", "1.5 hours"],
      ["Data preparation and model selection", "2 hours"],
      ["Training, AutoML, metrics, and explainability", "2 hours"],
      ["Endpoint deployment and debugging", "2 hours"]
    ]
  },
  "https://cloud2br-tec.github.io/ai-academy-103-ml/": {
    title: "Advanced ML and MLOps",
    sessions: [
      ["Environment, access, and Azure ML setup", "1.5 hours"],
      ["Build, register, and deploy an Azure ML model", "2 hours"],
      ["Fabric AI workloads and LLM notebook flow", "2 hours"],
      ["SynapseML and LangChain integration", "1.5 hours"],
      ["Operations, validation, and handover", "1.5 hours"]
    ]
  },
  "https://cloud2br-tec.github.io/ai-academy-101-rag/": {
    title: "RAG Fundamentals",
    sessions: [
      ["RAG patterns, use cases, and solution choices", "1 hour"],
      ["Retrieval, ingestion, indexing, and grounding", "1.5 hours"],
      ["Basic architecture and Terraform deployment", "2 hours"],
      ["Zero Trust architecture and network isolation", "2 hours"],
      ["Quality evaluation, pricing, and operations", "1.5 hours"]
    ]
  },
  "https://cloud2br-tec.github.io/ai-academy-102-rag/": {
    title: "Multi-Agent RAG Chatbot",
    sessions: [
      ["Multi-agent RAG concepts and responsibilities", "1 hour"],
      ["Orchestration and implementation approaches", "1.5 hours"],
      ["Agentic shopping repository walkthrough", "2 hours"],
      ["Media assistant repository walkthrough", "2 hours"],
      ["Evaluation criteria and delivery plan", "1.5 hours"]
    ]
  },
  "https://cloud2br-tec.github.io/ai-academy-103-rag/": {
    title: "Enterprise RAG at Scale",
    sessions: [
      ["Enterprise RAG, CAF, and Well-Architected fit", "1.5 hours"],
      ["Zero Trust architecture and maturity path", "1.5 hours"],
      ["Governance, identity, and security controls", "1.5 hours"],
      ["Network, data-access, and scaling patterns", "2 hours"],
      ["Implementation approach and operating model", "1.5 hours"]
    ]
  },
  "https://cloud2br-tec.github.io/ai-academy-101-docs-etl/": {
    title: "Document Intelligence Approaches",
    sessions: [
      ["Document ETL fundamentals and readiness evidence", "1.5 hours"],
      ["Compare invoice, layout, visual-cue, and open patterns", "1.5 hours"],
      ["Design validation, normalization, and exception flows", "2 hours"],
      ["Apply security, governance, and operations", "1.5 hours"],
      ["Define pilot metrics and an adoption roadmap", "1.5 hours"]
    ]
  },
  "https://cloud2br-tec.github.io/ai-academy-101-ops/": {
    title: "Azure AI Operations",
    sessions: [
      ["Shared MLOps and GenAIOps operating model", "1 hour"],
      ["Lifecycle maturity and production delivery", "1.5 hours"],
      ["Evaluation gates, observability, and recovery", "2 hours"],
      ["Platform delivery, FinOps, and governance", "1.5 hours"],
      ["Workload maturity assessment and action plan", "1.5 hours"]
    ]
  },
  "https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/": {
    title: "Microsoft Fabric Essentials Workshop",
    sessions: [
      ["Fabric foundations, OneLake, and workload choices", "1 hour"],
      ["Provision workshop resources", "2 hours"],
      ["Build Bronze, Silver, and Gold data layers", "2 hours"],
      ["Apply AI, LLM, and AI Skills patterns", "1.5 hours"],
      ["Use deployment pipelines and Git integration", "1.5 hours"]
    ]
  },
  "https://cloud2br-msftlearninghub.github.io/DemosScenarios-TechTalks/": {
    title: "Cloud Demos, Scenarios, and Tech Talks",
    sessions: [
      ["Azure foundations, data, and migration scenarios", "1.5 hours"],
      ["Analytics, Fabric, and data movement scenarios", "1.5 hours"],
      ["Azure AI, machine learning, and RAG scenarios", "1.5 hours"],
      ["Cloud operations, protection, and application scenarios", "1.5 hours"],
      ["Microsoft 365, Dynamics, and Power Platform scenarios", "1.5 hours"]
    ]
  },
  "https://cloud2br-msftlearninghub.github.io/Fabric-EnterpriseFramework/": {
    title: "Fabric Enterprise Framework",
    sessions: [
      ["Platform foundations and workload boundaries", "1.5 hours"],
      ["Governed workspaces, permissions, and data products", "1.5 hours"],
      ["Source control, IaC, and deployment stages", "2 hours"],
      ["Observability, capacity, and cost optimization", "1.5 hours"],
      ["Enterprise operating model and rollout plan", "1.5 hours"]
    ]
  },
  "https://cloud2br-msftlearninghub.github.io/AI-900StudyGuide/": {
    title: "AI-900 Study Guide",
    sessions: [
      ["AI workloads and responsible AI considerations", "1 hour"],
      ["Machine learning principles on Azure", "1 hour"],
      ["Computer vision workloads and services", "1 hour"],
      ["Natural language processing workloads", "1 hour"],
      ["Generative AI concepts and readiness review", "1.5 hours"]
    ]
  },
  "https://cloud2br-msftlearninghub.github.io/AI-102StudyGuide/": {
    title: "AI-102 Study Guide",
    sessions: [
      ["Plan and manage an Azure AI solution", "1.5 hours"],
      ["Responsible AI and content safety", "1 hour"],
      ["Computer vision and NLP solutions", "1.5 hours"],
      ["Knowledge mining and document intelligence", "1.5 hours"],
      ["Generative AI solution design and review", "1.5 hours"]
    ]
  },
  "https://cloud2br-msftlearninghub.github.io/RAG-ChatBot-Implementation/": {
    title: "RAG Chatbot Implementation",
    sessions: [
      ["RAG solution pattern and prerequisites", "1 hour"],
      ["Retrieval, ingestion, and AI Search design", "1.5 hours"],
      ["Deploy the basic architecture with Terraform", "2 hours"],
      ["Deploy Zero Trust infrastructure with azd", "2 hours"],
      ["Evaluate, troubleshoot, and plan production changes", "2 hours"]
    ]
  },
  "https://cloud2br-msftlearninghub.github.io/DP-900StudyGuide/": {
    title: "DP-900 Study Guide",
    sessions: [
      ["Core data concepts and analytics workloads", "1 hour"],
      ["Scenario review and continued study plan", "1 hour"],
      ["Relational data services on Azure", "1 hour"],
      ["Modern analytics workload selection", "1.5 hours"],
      ["Non-relational data services on Azure", "1 hour"]
    ]
  }
};

const templates = {
  "cloud2br-tec": {
    brand: "Cloud2BR-TEC",
    documentType: "Training program",
    kicker: "Technology Education Center",
    programTitle: "Machine Learning Complete Path",
    preparedFor: "Client organization",
    preparedBy: "Cloud2BR-TEC",
    overview: "A complete three-stage path from machine learning foundations through model implementation to reliable production deployment, monitoring, and lifecycle management.",
    delivery: "Live Teams · 1–2 hours daily",
    duration: "Two weeks",
    audience: "Data scientists and ML engineers",
    cohortSize: "Up to 20 learners",
    modules: "ML concepts and learning types\nData preparation and evaluation\nModel building and training\nDeployment and automation\nMonitoring and lifecycle operations",
    outcomes: "Explain the ML lifecycle\nPrepare data and evaluate models\nBuild and deploy a model\nPlan production monitoring\nApply governance and operations",
    sourceRefs: "Course 1 · Foundation | ML Foundations | https://cloud2br-tec.github.io/ai-academy-101-ml/\nCourse 2 · Applied | Applied ML | https://cloud2br-tec.github.io/ai-academy-102-ml/\nCourse 3 · Production | Production ML | https://cloud2br-tec.github.io/ai-academy-103-ml/",
    price: "4,800",
    currency: "USD",
    contact: "cloud2br@outlook.com",
    terms: "Cohort price for ten live training days at 1–2 hours per day. Includes digital materials, guided labs, and completion certificates."
  },
  "microsoft-learning": {
    brand: "Cloud2BR-MSFTLearningHub",
    documentType: "Microsoft learning program",
    kicker: "Microsoft technology training",
    programTitle: "Microsoft Fabric Learning Path",
    preparedFor: "Client organization",
    preparedBy: "Cloud2BR-MSFTLearningHub",
    overview: "A guided progression from Fabric essentials and hands-on scenarios to enterprise architecture, governance, capacity, and operational considerations.",
    delivery: "Live Teams · 1–2 hours daily",
    duration: "Two weeks",
    audience: "Data engineers and analytics teams",
    cohortSize: "Up to 20 learners",
    modules: "Fabric architecture and OneLake\nLakehouse and Medallion Architecture\nData engineering workflows\nPower BI workspace integration\nCapacity and cost management",
    outcomes: "Explain the Fabric platform\nOrganize lakehouse data layers\nBuild a basic data workflow\nConnect analytics experiences\nAssess capacity requirements",
    sourceRefs: "Course 1 · Foundation | Fabric Essentials | https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/\nCourse 2 · Practice | Demos & Scenarios | https://cloud2br-msftlearninghub.github.io/DemosScenarios-TechTalks/\nCourse 3 · Enterprise | Enterprise Framework | https://cloud2br-msftlearninghub.github.io/Fabric-EnterpriseFramework/",
    price: "4,600",
    currency: "USD",
    contact: "cloud2br@outlook.com",
    terms: "Cohort price for ten live training days at 1–2 hours per day. Includes guided activities and published supporting materials."
  }
};

Object.assign(templates, {
  "tec-rag-builder": program({
    brand: "Cloud2BR-TEC",
    title: "RAG Complete Path",
    duration: "Two weeks",
    audience: "AI developers and solution architects",
    overview: "A complete progression from RAG fundamentals through end-to-end application implementation to secure, scalable, evaluated production architectures.",
    modules: "Document ingestion and preparation\nIndexing and vector search\nRetrieval and prompt orchestration\nChat application integration\nEvaluation, security, and operations",
    outcomes: "Build a document ingestion flow\nCreate a searchable vector index\nImplement grounded generation\nConnect a chat experience\nPlan production controls",
    sources: "Course 1 · Foundation | RAG Foundations | https://cloud2br-tec.github.io/ai-academy-101-rag/\nCourse 2 · Build | Build a RAG App | https://cloud2br-tec.github.io/ai-academy-102-rag/\nCourse 3 · Production | Production RAG | https://cloud2br-tec.github.io/ai-academy-103-rag/",
    price: "4,800"
  }),
  "tec-ml-101": program({
    brand: "Cloud2BR-TEC",
    title: "Machine Learning Foundations",
    duration: "One week",
    audience: "New data and AI practitioners",
    overview: "A visual and practical introduction to machine learning concepts, Azure ML, data-to-endpoint lifecycle, model evaluation, deployment, and monitoring.",
    modules: "Machine learning basics\nAzure ML overview\nWorkspace and authoring\nBuild and evaluate a first model\nDeploy, score, and monitor",
    outcomes: "Explain core ML concepts\nNavigate an Azure ML workspace\nBuild and evaluate a model\nDescribe model deployment\nRecognize lifecycle responsibilities",
    sources: "Course 1 · Foundation | ML Foundations 101 | https://cloud2br-tec.github.io/ai-academy-101-ml/\nCourse 2 · Applied | Applied ML 102 | https://cloud2br-tec.github.io/ai-academy-102-ml/",
    price: "2,200"
  }),
  "tec-ml-102": program({
    brand: "Cloud2BR-TEC",
    title: "Applied Machine Learning",
    duration: "One week",
    audience: "Data scientists and ML developers",
    overview: "An applied path through ML mathematics, model families, Azure ML environments, data preparation, training, metrics, explainability, and deployment.",
    modules: "ML math and lifecycle\nData preparation and model types\nTraining and AutoML\nMetrics and explainability\nDeployment and debugging",
    outcomes: "Frame an end-to-end ML workflow\nPrepare data for training\nCompare model approaches\nInterpret evaluation metrics\nDeploy and troubleshoot a model",
    sources: "Course 1 · Applied | Applied ML 102 | https://cloud2br-tec.github.io/ai-academy-102-ml/\nCourse 2 · Production | Production ML 103 | https://cloud2br-tec.github.io/ai-academy-103-ml/",
    price: "2,500"
  }),
  "tec-production-ml": program({
    brand: "Cloud2BR-TEC",
    title: "AI Academy: Production Machine Learning",
    duration: "Two weeks",
    audience: "Data scientists and ML engineers",
    overview: "A build-to-production learning path for model development, deployment pipelines, monitoring, automation, governance, and cost-aware operations.",
    modules: "Model development and training\nExperiment tracking and evaluation\nDeployment pipelines\nMonitoring and drift detection\nLifecycle automation and governance",
    outcomes: "Train and evaluate ML models\nDesign repeatable deployment flows\nMonitor model behavior\nAutomate lifecycle activities\nApply production governance",
    sources: "Course 1 · Prepare | ML Foundations 101 | https://cloud2br-tec.github.io/ai-academy-101-ml/\nCourse 2 · Build | Applied ML 102 | https://cloud2br-tec.github.io/ai-academy-102-ml/\nCourse 3 · Operate | Production ML 103 | https://cloud2br-tec.github.io/ai-academy-103-ml/",
    price: "4,500"
  }),
  "tec-rag-101": program({
    brand: "Cloud2BR-TEC",
    title: "RAG Foundations",
    duration: "One week",
    audience: "AI developers and solution architects",
    overview: "A practical foundation in retrieval-augmented generation, architecture options, retrieval quality, data ingestion, security, and Azure implementation considerations.",
    modules: "RAG concepts and use cases\nRetrieval and augmentation\nBasic architecture\nZero Trust architecture\nQuality and cost considerations",
    outcomes: "Explain a RAG workflow\nCompare architecture options\nPlan content ingestion\nIdentify security controls\nAssess quality and cost drivers",
    sources: "Course 1 · Foundation | RAG Foundations 101 | https://cloud2br-tec.github.io/ai-academy-101-rag/\nCourse 2 · Build | Build a RAG App 102 | https://cloud2br-tec.github.io/ai-academy-102-rag/",
    price: "2,200"
  }),
  "tec-rag-102": program({
    brand: "Cloud2BR-TEC",
    title: "Build a Multi-Agent RAG Application",
    duration: "One week",
    audience: "AI application developers",
    overview: "A build-focused course on multi-agent RAG concepts, orchestration responsibilities, implementation options, evaluation, and application delivery.",
    modules: "Multi-agent RAG concepts\nAgent responsibilities\nOrchestration approaches\nImplementation options\nEvaluation and delivery",
    outcomes: "Describe multi-agent RAG\nAssign agent responsibilities\nCompare build approaches\nPlan an implementation\nDefine evaluation criteria",
    sources: "Course 1 · Build | Build RAG 102 | https://cloud2br-tec.github.io/ai-academy-102-rag/\nCourse 2 · Operate | Production RAG 103 | https://cloud2br-tec.github.io/ai-academy-103-rag/",
    price: "2,600"
  }),
  "tec-document-intelligence": program({
    brand: "Cloud2BR-TEC",
    title: "Document Intelligence ETL",
    duration: "One week",
    audience: "Data and automation engineers",
    overview: "A hands-on document processing path covering invoice and layout extraction, Azure Document Intelligence, validation, and downstream ETL patterns.",
    modules: "Document processing architecture\nLayout and invoice extraction\nField mapping and validation\nOpen framework pipelines\nOperational ETL patterns",
    outcomes: "Select a document extraction approach\nProcess layout and invoice content\nValidate extracted fields\nConnect extraction to ETL\nPlan reliable operations",
    sources: "Course 1 · Build | Docs ETL 101 | https://cloud2br-tec.github.io/ai-academy-101-docs-etl/\nCourse 2 · Operate | AI Operations 101 | https://cloud2br-tec.github.io/ai-academy-101-ops/",
    price: "2,400"
  }),
  "tec-ai-operations": program({
    brand: "Cloud2BR-TEC",
    title: "Azure AI Operations",
    duration: "One week",
    audience: "AI, ML, and platform engineers",
    overview: "A practical introduction to GenAIOps and MLOps across evaluation, deployment, monitoring, governance, security, and continuous improvement.",
    modules: "AI application lifecycle\nEvaluation and release controls\nDeployment and monitoring\nGovernance and security\nContinuous improvement",
    outcomes: "Map the AI delivery lifecycle\nDefine evaluation gates\nPlan monitored deployments\nApply governance controls\nCreate an improvement loop",
    sources: "Course 1 · Operations | AI Operations 101 | https://cloud2br-tec.github.io/ai-academy-101-ops/\nCourse 2 · Apply | Production ML 103 | https://cloud2br-tec.github.io/ai-academy-103-ml/",
    price: "2,400"
  }),
  "msft-azure-ai": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Azure AI and RAG Engineering",
    duration: "Two weeks",
    audience: "AI engineers and cloud architects",
    overview: "A solution-focused path through Azure AI capabilities, RAG chatbot architecture, model workflows, zero-trust considerations, and operational practices.",
    modules: "Azure AI services and projects\nRAG architecture and retrieval\nChatbot implementation\nZero-trust AI patterns\nEvaluation and operations",
    outcomes: "Navigate Azure AI capabilities\nDesign a RAG architecture\nBuild a chatbot workflow\nApply security boundaries\nPlan evaluation and monitoring",
    sources: "Course 1 · Foundation | AI-900 Support | https://cloud2br-msftlearninghub.github.io/AI-900StudyGuide/\nCourse 2 · Develop | AI-102 Support | https://cloud2br-msftlearninghub.github.io/AI-102StudyGuide/\nCourse 3 · Build | RAG ChatBot | https://cloud2br-msftlearninghub.github.io/RAG-ChatBot-Implementation/",
    price: "4,600"
  }),
  "msft-fabric-ai": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Fabric Essentials Learning Path",
    duration: "One week",
    audience: "Data and BI professionals",
    overview: "A concise live session exploring AI experiences in Microsoft Fabric, conversational data access, Power BI integration, and tenant-level considerations.",
    modules: "Fabric AI capabilities\nConversational data access\nAI Skills configuration\nPower BI integration\nGovernance considerations",
    outcomes: "Recognize Fabric AI scenarios\nDescribe AI Skills architecture\nConnect AI and BI experiences\nIdentify configuration needs\nPlan a governed pilot",
    sources: "Course 1 · Foundation | Fabric Essentials | https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/\nCourse 2 · Enterprise | Fabric Enterprise Framework | https://cloud2br-msftlearninghub.github.io/Fabric-EnterpriseFramework/",
    price: "2,200"
  }),
  "msft-fabric-enterprise": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Fabric Enterprise Framework",
    duration: "One week",
    audience: "Data platform architects and leads",
    overview: "A structured guide to Fabric platform foundations, governance, security, versioned delivery, observability, capacity operations, and cost management.",
    modules: "Platform foundations\nGovernance and security\nSource control and delivery\nObservability and capacity\nCost-aware operations",
    outcomes: "Define Fabric platform boundaries\nPlan governed workspaces\nDesign controlled delivery\nEstablish operational signals\nAssess capacity and cost",
    sources: "Course 1 · Prepare | Fabric Essentials | https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/\nCourse 2 · Apply | Enterprise Framework | https://cloud2br-msftlearninghub.github.io/Fabric-EnterpriseFramework/",
    price: "2,600"
  }),
  "msft-demos": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Microsoft Cloud Demos and Scenarios",
    duration: "One week",
    audience: "Cloud and technology teams",
    overview: "A five-day guided exploration of Microsoft cloud demonstrations spanning Azure, analytics, Fabric, AI, operations, Microsoft 365, Dynamics, and Power Platform.",
    modules: "Azure foundations and data\nAnalytics and Fabric\nAzure AI and machine learning\nCloud operations and applications\nMicrosoft 365 and Power Platform",
    outcomes: "Navigate the scenario library\nSelect relevant demonstrations\nIdentify architecture questions\nPlan a controlled proof of concept\nDefine follow-up learning",
    sources: "Course 1 · Explore | Demos & Scenarios | https://cloud2br-msftlearninghub.github.io/DemosScenarios-TechTalks/\nCourse 2 · Deepen | Fabric Essentials | https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/",
    price: "1,800"
  }),
  "msft-certification": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "AI-900 Support Path",
    duration: "One week",
    audience: "Azure AI fundamentals learners",
    overview: "A community study path that organizes Azure AI concepts, practical review, and readiness checks around the AI-900 learning objectives.",
    modules: "AI workloads and considerations\nMachine learning fundamentals\nComputer vision concepts\nNatural language processing\nGenerative AI concepts and review",
    outcomes: "Organize AI fundamentals concepts\nRelate workloads to Azure services\nReview responsible AI principles\nIdentify knowledge gaps\nPrepare a continued study plan",
    sources: "Course 1 · Foundation | AI-900 Support Guide | https://cloud2br-msftlearninghub.github.io/AI-900StudyGuide/\nCourse 2 · Continue | AI-102 Support Guide | https://cloud2br-msftlearninghub.github.io/AI-102StudyGuide/",
    price: "1,650"
  }),
  "msft-ai-102": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "AI-102 Support Path",
    duration: "One week",
    audience: "Azure AI solution practitioners",
    overview: "A community support path organizing solution planning, responsible AI, content moderation, vision, language, knowledge mining, and generative AI topics.",
    modules: "Azure AI solution planning\nResponsible AI and content safety\nComputer vision and NLP\nKnowledge mining\nGenerative AI solutions",
    outcomes: "Organize AI solution concepts\nReview responsible AI controls\nCompare AI workloads\nIdentify implementation gaps\nCreate a continued study plan",
    sources: "Course 1 · Prepare | AI-102 Support Guide | https://cloud2br-msftlearninghub.github.io/AI-102StudyGuide/\nCourse 2 · Build | RAG ChatBot Implementation | https://cloud2br-msftlearninghub.github.io/RAG-ChatBot-Implementation/",
    price: "2,200"
  }),
  "msft-dp-900": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "DP-900 Support Path",
    duration: "One week",
    audience: "Azure data fundamentals learners",
    overview: "A community support path covering core data concepts and Azure services for relational, non-relational, analytics, and modern data workloads.",
    modules: "Core data concepts\nRelational data on Azure\nNon-relational data on Azure\nAnalytics workloads\nGuided review and practice",
    outcomes: "Describe core data concepts\nCompare relational services\nCompare non-relational services\nRecognize analytics workloads\nCreate a continued study plan",
    sources: "Course 1 · Foundation | DP-900 Support Guide | https://cloud2br-msftlearninghub.github.io/DP-900StudyGuide/\nCourse 2 · Apply | Fabric Essentials | https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/",
    price: "1,650"
  })
});

Object.values(templates).forEach((template) => {
  const topics = template.modules.split("\n").map((topic) => topic.trim()).filter(Boolean);
  template.documentType = template.brand === "Cloud2BR-TEC" ? "Training program" : "Learning program";
  template.preparedBy = "Cloud2BR";
  template.overview = `A curated set of repository-backed courses covering ${topics.join(", ")}.`;
  template.delivery = "Live Teams · 1–2 hours by session";
  template.sourceRefs = buildCourseSchedule(template.sourceRefs, template.modules, template.outcomes, template.duration);
});

const form = document.querySelector("#program-form");
const templateSelect = document.querySelector("#template");
const generateButton = document.querySelector("#generate-button");
const loadButton = document.querySelector("#load-button");
const saveButton = document.querySelector("#save-button");
const resetButton = document.querySelector("#reset-button");
const draftFile = document.querySelector("#draft-file");
const status = document.querySelector("#status");

function program({ brand, title, duration, audience, overview, modules, outcomes, sources, price, terms }) {
  return {
    brand,
    documentType: "Learning program",
    kicker: brand === "Cloud2BR-TEC" ? "Technology Education Center" : "Source-based learning path",
    programTitle: title,
    preparedFor: "Client organization",
    preparedBy: brand,
    overview,
    delivery: "Live Teams · 1–2 hours by session",
    duration,
    audience,
    cohortSize: "Up to 20 learners",
    modules,
    outcomes,
    sourceRefs: sources,
    price,
    currency: "USD",
    contact: "cloud2br@outlook.com",
    terms: terms || `${duration === "Two weeks" ? "Ten" : "Five"} live training days at 1–2 hours per day. Cohort price includes digital materials, guided activities, and a completion summary.`
  };
}

function buildCourseSchedule(sources, modules, outcomes, duration) {
  const parsedCourses = sources.split("\n").map((source) => {
    const parts = source.split("|").map((item) => item.trim());
    const url = parts.at(-1) || "";
    const catalogCourse = courseCatalog[url];
    return {
      title: catalogCourse?.title || parts[1] || "Repository course",
      url,
      sessions: catalogCourse?.sessions || []
    };
  });
  const publishedCourses = [...new Map(parsedCourses.map((course) => [course.url, course])).values()];
  const fallbackTopics = [modules, outcomes].join("\n").split("\n").map((topic) => topic.trim()).filter(Boolean);
  const courseCount = duration === "Two weeks" ? 10 : 5;
  const sessionsPerCourse = Math.floor(courseCount / publishedCourses.length);
  const extraSessions = courseCount % publishedCourses.length;
  const schedule = publishedCourses.flatMap((course, courseIndex) => {
    const sessionCount = sessionsPerCourse + (courseIndex < extraSessions ? 1 : 0);
    const materials = course.sessions.length
      ? course.sessions
      : fallbackTopics.length
        ? fallbackTopics.map((topic) => [topic, "1.5 hours"])
        : [["Define the session scope and learning goal", "1 hour"]];
    return Array.from({ length: sessionCount }, (_, sessionIndex) => {
      const materialIndex = sessionCount === 1
        ? 0
        : Math.round(sessionIndex * (materials.length - 1) / (sessionCount - 1));
      const [focus, sessionLength] = materials[materialIndex];
      return { ...course, focus, sessionLength };
    });
  });

  return schedule.map((session, index) => {
    const week = courseCount === 10 ? ` · Week ${index < 5 ? 1 : 2}` : "";
    return `Day ${index + 1}${week} | ${session.title} | ${session.focus} | ${session.sessionLength} | ${session.url}`;
  }).join("\n");
}

function setFormValues(values) {
  Object.entries(values).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (field) field.value = value;
  });
}

function formValues() {
  const values = Object.fromEntries(new FormData(form).entries());
  values.preparedBy = "Cloud2BR";
  form.elements.namedItem("preparedBy").value = values.preparedBy;
  return values;
}

function scheduledHours(value) {
  return value.split("\n").reduce((total, item) => {
    const sessionLength = item.split("|").map((part) => part.trim()).find((part) => /^\d+(\.\d+)? hours?$/.test(part));
    return total + (sessionLength ? Number.parseFloat(sessionLength) : 0);
  }, 0);
}

function formatHours(hours) {
  return `${Number.isInteger(hours) ? hours : hours.toFixed(1)} live hours`;
}

function validateCourseCount(values) {
  const sourceField = form.elements.namedItem("sourceRefs");
  const courseCount = (values.sourceRefs || "").split("\n").map((item) => item.trim()).filter(Boolean).length;
  const expectedCount = values.duration === "Two weeks" ? 10 : values.duration === "One week" ? 5 : 0;
  sourceField.setCustomValidity(
    expectedCount && courseCount !== expectedCount
      ? `${values.duration} programs require exactly ${expectedCount} daily courses.`
      : ""
  );
}

function setText(id, value) {
  document.querySelector(`#${id}`).textContent = value || "—";
}

function setList(id, value) {
  const list = document.querySelector(`#${id}`);
  const items = value.split("\n").map((item) => item.trim()).filter(Boolean).slice(0, 6);
  list.replaceChildren(...items.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
  }));
}

function setReferences(value) {
  const container = document.querySelector("#preview-source-refs");
  const steps = value.split("\n").map((item) => item.trim()).filter(Boolean).slice(0, 10);
  container.replaceChildren(...steps.map((step, index) => {
    const parts = step.split("|").map((item) => item.trim());
    const [stage = "Course", title = "Repository course"] = parts;
    const hasFocus = parts.length >= 4;
    const focus = hasFocus ? parts[2] : "Guided repository course";
    const hasSessionLength = parts.length >= 5;
    const sessionLength = hasSessionLength ? parts[3] : "1.5 hours";
    const url = parts.at(-1) || "";
    const link = document.createElement("a");
    link.className = "path-node";
    try {
      const target = new URL(url);
      link.href = target.protocol === "https:" ? target.href : "#";
    } catch {
      link.href = "#";
    }
    link.target = "_blank";
    link.rel = "noopener";
    const sequence = document.createElement("b");
    sequence.className = "path-step";
    sequence.textContent = String(index + 1).padStart(2, "0");
    const copy = document.createElement("span");
    copy.className = "path-copy";
    const stageLabel = document.createElement("span");
    stageLabel.textContent = stage;
    const courseTitle = document.createElement("strong");
    courseTitle.textContent = title;
    const courseFocus = document.createElement("small");
    courseFocus.className = "path-focus";
    courseFocus.textContent = focus;
    const duration = document.createElement("small");
    duration.className = "path-duration";
    duration.textContent = `${sessionLength} · Live Teams`;
    const action = document.createElement("small");
    action.className = "path-action";
    action.textContent = "Open course ↗";
    link.setAttribute("aria-label", `Open ${title} repository course`);
    copy.append(stageLabel, courseTitle, courseFocus, duration, action);
    link.append(sequence, copy);
    return link;
  }));
}

function updatePreview() {
  const values = formValues();
  validateCourseCount(values);
  const selectedTemplate = templates[values.template];
  const totalHours = scheduledHours(values.sourceRefs || "");
  setText("scheduled-hours", totalHours ? formatHours(totalHours) : "Hours calculated from sessions");
  setText("preview-brand", "Cloud2BR");
  setText("preview-document-type", `${selectedTemplate.documentType} · ${selectedTemplate.brand}`);
  setText("preview-kicker", selectedTemplate.kicker);
  setText("preview-title-value", values.programTitle);
  setText("preview-prepared-for", values.preparedFor);
  setText("preview-prepared-by", values.preparedBy);
  setText("preview-overview", values.overview);
  setText("preview-delivery", values.delivery);
  setText("preview-duration", totalHours ? `${values.duration} · ${formatHours(totalHours)}` : values.duration);
  setText("preview-audience", values.audience);
  setText("preview-cohort-size", values.cohortSize);
  setList("preview-modules", values.modules);
  setList("preview-outcomes", values.outcomes);
  setReferences(values.sourceRefs);
  setText("preview-price", values.price);
  setText("preview-currency", values.currency);
  setText("preview-contact", values.contact);
  setText("preview-terms", values.terms);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

function applyTemplate(templateName) {
  setFormValues({ ...templates[templateName], template: templateName });
  updatePreview();
}

function restoreState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && templates[saved.template]) {
      setFormValues(saved);
      updatePreview();
      return;
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
  applyTemplate("cloud2br-tec");
}

function fileName() {
  const title = form.elements.programTitle.value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 55);
  return `${title || "cloud2br-program"}.pdf`;
}

function downloadDraft() {
  const draft = JSON.stringify({ version: 1, values: formValues() }, null, 2);
  const url = URL.createObjectURL(new Blob([draft], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName().replace(/\.pdf$/, "-draft.json");
  link.click();
  URL.revokeObjectURL(url);
  status.textContent = "Draft downloaded.";
}

async function loadDraft(event) {
  const [file] = event.target.files;
  if (!file) return;

  try {
    const draft = JSON.parse(await file.text());
    const values = draft?.values;
    if (!values || !templates[values.template]) throw new Error("Unsupported draft");
    setFormValues({ ...templates[values.template], ...values });
    updatePreview();
    status.textContent = "Draft loaded.";
  } catch {
    status.textContent = "Could not load this draft file.";
  } finally {
    event.target.value = "";
  }
}

async function generatePdf() {
  if (!form.reportValidity()) return;
  generateButton.disabled = true;
  status.textContent = "Preparing PDF…";

  try {
    if (typeof window.html2pdf !== "function") {
      window.print();
      status.textContent = "PDF library unavailable. Opened the browser print dialog instead.";
      return;
    }

    await window.html2pdf()
      .set({
        margin: 0,
        filename: fileName(),
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        enableLinks: true,
        pagebreak: { mode: ["avoid-all"] }
      })
      .from(document.querySelector("#pdf-page"))
      .save();
    status.textContent = "PDF generated.";
  } catch (error) {
    console.error(error);
    status.textContent = "PDF generation failed. Try the browser print command.";
  } finally {
    generateButton.disabled = false;
  }
}

form.addEventListener("input", (event) => {
  if (event.target === form.elements.namedItem("duration")) {
    const values = formValues();
    form.elements.namedItem("sourceRefs").value = buildCourseSchedule(
      values.sourceRefs,
      values.modules,
      values.outcomes,
      values.duration
    );
  }
  updatePreview();
});
templateSelect.addEventListener("change", () => applyTemplate(templateSelect.value));
loadButton.addEventListener("click", () => draftFile.click());
saveButton.addEventListener("click", downloadDraft);
draftFile.addEventListener("change", loadDraft);
resetButton.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  [...form.elements].forEach((field) => {
    if (!field.name || field.name === "template") return;
    if (field instanceof HTMLSelectElement) {
      field.selectedIndex = -1;
    } else {
      field.value = "";
    }
  });
  updatePreview();
  status.textContent = "Editable fields cleared.";
});
generateButton.addEventListener("click", generatePdf);

restoreState();