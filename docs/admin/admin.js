const STORAGE_KEY = "cloud2br-program-pdf-v16";

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
      ["Agentic shopping solution walkthrough", "2 hours"],
      ["Media assistant solution walkthrough", "2 hours"],
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
    terms: "Program price for ten live training days at 1–2 hours per day. Includes digital materials, guided labs, and completion certificates."
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
    terms: "Program price for ten live training days at 1–2 hours per day. Includes guided activities and published supporting materials."
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
  }),
  "msft-mlops": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Azure Machine Learning and MLOps",
    duration: "Two weeks",
    audience: "Data scientists, ML engineers, and platform teams",
    overview: "A progressive Azure ML program that moves from core platform skills into advanced modeling, MLOps delivery, GenAIOps maturity, and DP-100 study support.",
    modules: "Azure ML foundations\nAdvanced model development\nMLOps delivery\nGenAIOps maturity\nDP-100 study support",
    outcomes: "Navigate Azure ML components\nBuild advanced ML workflows\nDesign controlled model delivery\nAssess AI operations maturity\nPlan continued DP-100 study",
    sources: courseSources(
      ["Azure ML Overview", "Workspace, compute, data, and model assets", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Azure-ML-Overview/"],
      ["Azure ML Overview", "Azure ML lifecycle and first workflow", "2 hours", "https://cloud2br-msftlearninghub.github.io/Azure-ML-Overview/"],
      ["Azure ML Advanced", "Advanced training and evaluation patterns", "2 hours", "https://cloud2br-msftlearninghub.github.io/Azure-ML-Advanced/"],
      ["Azure ML Advanced", "Deployment, monitoring, and optimization", "2 hours", "https://cloud2br-msftlearninghub.github.io/Azure-ML-Advanced/"],
      ["Azure MLOps Overview", "MLOps architecture and release controls", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Azure-MLOps-Overview/"],
      ["Azure MLOps Overview", "Automated delivery and model operations", "2 hours", "https://cloud2br-msftlearninghub.github.io/Azure-MLOps-Overview/"],
      ["GenAIOps Maturity Levels", "GenAIOps capabilities and maturity stages", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/GenAIOpsMaturityLevels/"],
      ["GenAIOps Maturity Levels", "Create an AI operations improvement roadmap", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/GenAIOpsMaturityLevels/"],
      ["DP-100 Study Guide", "Review data science and Azure ML objectives", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/DP-100StudyGuide/"],
      ["DP-100 Study Guide", "Scenario review and continued study plan", "1 hour", "https://cloud2br-msftlearninghub.github.io/DP-100StudyGuide/"]
    ),
    price: "4,800"
  }),
  "msft-agent-mcp": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Azure Agents and MCP Engineering",
    duration: "Two weeks",
    audience: "AI developers, architects, and platform engineers",
    overview: "A hands-on engineering program for agent services, secure infrastructure, MCP hosting, Fabric data agents, and production operating practices.",
    modules: "Agent platform foundations\nAI agent infrastructure\nMCP hosting patterns\nFabric agent integration\nAgent operations",
    outcomes: "Explain agent platform choices\nProvision agent infrastructure\nCompare MCP hosting options\nConnect Fabric and Copilot agents\nPlan controlled agent operations",
    sources: courseSources(
      ["Agent 365 Overview", "Agent 365 concepts and service landscape", "1 hour", "https://cloud2br-msftlearninghub.github.io/Agent365-Overview/"],
      ["Agent 365 Overview", "Agent scenarios, controls, and adoption questions", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Agent365-Overview/"],
      ["AI Agent Infrastructure Blueprint", "Azure AI Foundry and OpenAI infrastructure", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/AI-Agent-Infra-Blueprint/"],
      ["AI Agent Infrastructure Blueprint", "Deploy and validate the public-network blueprint", "2 hours", "https://cloud2br-msftlearninghub.github.io/AI-Agent-Infra-Blueprint/"],
      ["Azure MCP Blueprint", "MCP architecture and Azure hosting options", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Azure-MCP-blueprint/"],
      ["Azure MCP Blueprint", "Configure and test an MCP server", "2 hours", "https://cloud2br-msftlearninghub.github.io/Azure-MCP-blueprint/"],
      ["Fabric MCP Agent-to-Agent", "Fabric data agents and Copilot Studio integration", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Fabric-MCP-Agent2Agent/"],
      ["Fabric MCP Agent-to-Agent", "Implement and test agent-to-agent flow", "2 hours", "https://cloud2br-msftlearninghub.github.io/Fabric-MCP-Agent2Agent/"],
      ["Azure Arc Recommendations Agent", "Recommendations agent architecture and data flow", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/AzureArcRecommendations-AI-Agent/"],
      ["Azure Arc Recommendations Agent", "Run the demo and identify production changes", "2 hours", "https://cloud2br-msftlearninghub.github.io/AzureArcRecommendations-AI-Agent/"]
    ),
    price: "4,800"
  }),
  "msft-agentic-experiences": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Applied Agentic AI Experiences",
    duration: "One week",
    audience: "AI application developers and solution teams",
    overview: "An applied AI program featuring multimodal shopping, media assistants, retail analytics, document summarization, and grounded RAG experiences.",
    modules: "Shopping assistant\nMedia assistant\nFabric retail AI\nDocument summarization\nRAG chatbot",
    outcomes: "Compare agent experience patterns\nAssess multimodal design choices\nConnect Fabric data to AI\nPlan automated document processing\nSelect a RAG implementation path",
    sources: courseSources(
      ["Agentic DevOps AI Shopping", "Multimodal shopping assistant architecture", "2 hours", "https://cloud2br-msftlearninghub.github.io/Agentic-DevOps-AI-Shopping/"],
      ["Agentic AI Media Assistant", "Multimodal media assistant workflow", "2 hours", "https://cloud2br-msftlearninghub.github.io/Agentic-AI-Media-Assistant/"],
      ["Fabric AI Retail Demo", "Retail data foundation for AI use cases", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Fabric-AI-Retail-Demo/"],
      ["Blob Upload Summary Tool", "File ingestion, extraction, and summary generation", "2 hours", "https://cloud2br-msftlearninghub.github.io/BlobFileUpload-SummaryTool/"],
      ["RAG Chatbot Implementation", "RAG architecture and implementation choices", "2 hours", "https://cloud2br-msftlearninghub.github.io/RAG-ChatBot-Implementation/"]
    ),
    price: "2,600"
  }),
  "msft-security-operations": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Microsoft Security Operations",
    duration: "One week",
    audience: "Security engineers and cloud operations teams",
    overview: "An integrated security operations program covering Defender, Sentinel, Security Copilot, campaign planning, and Microsoft Purview controls.",
    modules: "Defender for Cloud\nMicrosoft Sentinel\nSecurity Copilot\nSecurity campaigns\nMicrosoft Purview",
    outcomes: "Plan Defender onboarding\nDescribe Sentinel operations\nIdentify Security Copilot use cases\nStructure a security campaign\nConnect data governance controls",
    sources: courseSources(
      ["Defender Setup Overview", "Defender for Cloud setup and posture controls", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Defender-Setup-Overview/"],
      ["Sentinel Setup Overview", "Sentinel setup, data, and detection workflow", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Sentinel-Setup-Overview/"],
      ["Security Copilot Overview", "Security Copilot scenarios and operating considerations", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Security-Copilot-Overview/"],
      ["Security Campaign", "Security campaign structure and engagement flow", "1 hour", "https://cloud2br-msftlearninghub.github.io/Security-Campaign/"],
      ["Purview Setup Overview", "Purview governance, discovery, and protection setup", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Purview-Setup-Overview/"]
    ),
    price: "2,400"
  }),
  "msft-workplace-identity": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Identity and Modern Workplace Controls",
    duration: "One week",
    audience: "Identity, endpoint, and Microsoft 365 administrators",
    overview: "A connected path across Entra identity, Intune endpoints, M365 licensing, Purview governance, and Defender security.",
    modules: "Identity and access\nEndpoint management\nM365 capabilities\nInformation governance\nCloud protection",
    outcomes: "Map identity controls\nPlan endpoint management\nCompare M365 capabilities\nIdentify governance requirements\nConnect identity and protection",
    sources: courseSources(
      ["Microsoft Entra Overview", "Identity, access, and tenant control concepts", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Entra-Overview/"],
      ["Microsoft Intune Overview", "Endpoint enrollment, policy, and management", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Intune-Overview/"],
      ["Microsoft 365 E5 and E7 Overview", "M365 security and compliance capability mapping", "1 hour", "https://cloud2br-msftlearninghub.github.io/M365-E5-E7-Overview/"],
      ["Purview Setup Overview", "Information protection and governance setup", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Purview-Setup-Overview/"],
      ["Defender Setup Overview", "Connect identity, endpoint, and cloud protection", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Defender-Setup-Overview/"]
    ),
    price: "2,300"
  }),
  "msft-github-devops": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "GitHub and Secure DevOps",
    duration: "One week",
    audience: "Developers, DevOps engineers, and GitHub administrators",
    overview: "A secure software delivery program covering GitHub foundations, certification support, advanced administration, artifact signing, and automated delivery standards.",
    modules: "GitHub foundations\nGH-900 study support\nGH-300 study support\nArtifact signing\nDelivery automation",
    outcomes: "Navigate GitHub workflows\nReview GitHub fundamentals\nAssess advanced GitHub practices\nPlan signed build artifacts\nStandardize software delivery",
    sources: courseSources(
      ["GitHub Overview", "GitHub platform, collaboration, and workflow foundations", "1 hour", "https://cloud2br-msftlearninghub.github.io/GitHub-Overview/"],
      ["GH-900 Study Guide", "GitHub foundations objectives and scenario review", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/GH-900StudyGuide/"],
      ["GH-300 Study Guide", "Advanced GitHub objectives and practice review", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/GH-300StudyGuide/"],
      ["Azure Artifact Signing DevOps", "Build and sign artifacts with managed HSM keys", "2 hours", "https://cloud2br-msftlearninghub.github.io/Azure-ArtifactSigning-DevOps/"],
      ["GitHub Delivery Standards", "Delivery standards, quality checks, and automation", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/org-repo-template/"]
    ),
    price: "2,200"
  }),
  "msft-app-integration": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Azure Application and Integration Patterns",
    duration: "One week",
    audience: "Application developers and cloud engineers",
    overview: "A practical Azure application program spanning service selection, Functions runtime behavior, automated file processing, Logic Apps integration, and Terraform delivery.",
    modules: "Application services\nFunction runtime\nFile processing\nLogic Apps integration\nInfrastructure as code",
    outcomes: "Select Azure app services\nPlan Function storage behavior\nBuild a file workflow\nCompare integration approaches\nApply Terraform templates",
    sources: courseSources(
      ["Azure App Development Overview", "Azure application service selection and architecture", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Azure-App-Dev-Overview/"],
      ["Azure Functions Temporary Storage", "Function runtime files, storage, and deployment impact", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/AzureFunctionApp-TempUsage/"],
      ["Blob Upload Summary Tool", "Build an automated upload and summary workflow", "2 hours", "https://cloud2br-msftlearninghub.github.io/BlobFileUpload-SummaryTool/"],
      ["SAP Integration with Logic Apps", "Cookie and CSRF token integration approaches", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/SAP-integration-AzLogicApps/"],
      ["Azure Terraform Templates", "Adapt and validate Azure infrastructure templates", "2 hours", "https://cloud2br-msftlearninghub.github.io/AzureTerraformTemplates-v0.0.0/"]
    ),
    price: "2,500"
  }),
  "msft-data-operations": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Azure Data Platform Operations",
    duration: "One week",
    audience: "Database, data platform, and analytics engineers",
    overview: "An operations-focused Azure data program covering database governance, space recovery, MySQL performance, Synapse transformation, and Digital Twins scenarios.",
    modules: "Database governance\nDatabase space recovery\nMySQL performance\nSynapse transformation\nDigital Twins",
    outcomes: "Assess database practices\nPlan safe space recovery\nExplain IOPS scaling\nBuild a Synapse cleanup flow\nIdentify Digital Twins scenarios",
    sources: courseSources(
      ["Azure Databases and Purview Advisor", "Database setup, modeling, tuning, and governance", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Azure-Databases-Purview-Advisor/"],
      ["Azure Database Space Recovery", "Analyze and free unused database space", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/azDataBase-Freeing-Unused-Space/"],
      ["MySQL Autoscale IOPS", "Model MySQL IOPS needs and configuration", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/MySQL-autoscale-IOPS/"],
      ["Synapse Dynamic Data Cleanup", "Create a dynamic blank-removal view", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/azSynapse-Dynamic-RemoveBlanks/"],
      ["Azure Digital Twins Overview", "Digital Twins concepts, topology, and scenarios", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Azure-DigitalTwins-Overview/"]
    ),
    price: "2,300"
  }),
  "msft-fabric-solutions": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Applied Microsoft Fabric Solutions",
    duration: "One week",
    audience: "Fabric developers, BI teams, and platform leads",
    overview: "An applied Microsoft Fabric program connecting platform foundations, retail AI, reusable date models, capacity estimation, and enterprise operations.",
    modules: "Fabric foundations\nRetail AI\nDate hierarchies\nCapacity estimation\nEnterprise operations",
    outcomes: "Explain Fabric architecture\nConnect retail data to AI\nStandardize date models\nEstimate capacity needs\nPlan enterprise controls",
    sources: courseSources(
      ["Fabric Essentials Workshop", "Fabric, OneLake, and workload foundations", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/"],
      ["Fabric AI Retail Demo", "Prepare retail data for AI-driven scenarios", "2 hours", "https://cloud2br-msftlearninghub.github.io/Fabric-AI-Retail-Demo/"],
      ["Fabric Date Hierarchy Accelerator", "Automate reusable Power BI date hierarchies", "2 hours", "https://cloud2br-msftlearninghub.github.io/Fabric-Date-Hierarchy-Accelerator/"],
      ["Fabric SKU Estimation Tool", "Estimate and validate Fabric capacity assumptions", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Fabric-SKU-EstimationTool/"],
      ["Fabric Enterprise Framework", "Govern, deliver, observe, and optimize Fabric", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Fabric-EnterpriseFramework/"]
    ),
    price: "2,600"
  }),
  "msft-document-automation": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Document Automation Implementations",
    duration: "One week",
    audience: "Data, AI, and automation engineers",
    overview: "A solution-building program that compares managed invoice extraction, layout processing, visual-cue routing, open frameworks, and enterprise architecture choices.",
    modules: "Managed invoice extraction\nLayout extraction\nVisual-cue routing\nOpen-framework processing\nArchitecture selection",
    outcomes: "Build an invoice pipeline\nExtract complex layouts\nHandle multiple templates\nCompare open orchestration\nSelect an enterprise pattern",
    sources: courseSources(
      ["Invoice Processing with Document Intelligence", "Extract invoices and store results in Cosmos DB", "2 hours", "https://cloud2br-msftlearninghub.github.io/PDFs-Invoice-Processing-Fapp-DocIntelligence/"],
      ["Layout Processing with Document Intelligence", "Extract tables, selections, and form text", "2 hours", "https://cloud2br-msftlearninghub.github.io/PDFs-Layouts-Processing-Fapp-DocIntelligence/"],
      ["Multi-Layout Visual Cue Processing", "Route layouts and detect visual selections", "2 hours", "https://cloud2br-msftlearninghub.github.io/PDFs-MultiLayout-VisualCue-AzureAI-Document-Processing/"],
      ["Invoice Processing with Open Framework", "Build an extensible invoice processing pipeline", "2 hours", "https://cloud2br-msftlearninghub.github.io/PDFs-Invoice-Processing-Fapp-OpenFramework/"],
      ["Document Intelligence Approaches", "Compare patterns, controls, and adoption paths", "1.5 hours", "https://cloud2br-tec.github.io/ai-academy-101-docs-etl/"]
    ),
    price: "2,600"
  }),
  "msft-cloud-architecture": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Cloud Architecture and Capacity",
    duration: "One week",
    audience: "Cloud architects, engineers, and technical leads",
    overview: "A cloud architecture program that connects platform evolution, Azure capacity planning, infrastructure as code, visual design, and scenario validation.",
    modules: "Cloud evolution\nAzure capacity\nTerraform foundations\nArchitecture flows\nScenario validation",
    outcomes: "Explain cloud architecture evolution\nIdentify capacity considerations\nAdapt infrastructure templates\nCommunicate architecture flows\nValidate scenario fit",
    sources: courseSources(
      ["Demystifying Cloud Evolution", "Cloud history, Azure architecture, and orchestration", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Demystifying-Cloud-Evolution/"],
      ["Azure Capacity Overview", "Capacity concepts, constraints, and planning questions", "1 hour", "https://cloud2br-msftlearninghub.github.io/Azure-Capacity-Overview/"],
      ["Azure Terraform Templates", "Review and adapt Azure deployment templates", "2 hours", "https://cloud2br-msftlearninghub.github.io/AzureTerraformTemplates-v0.0.0/"],
      ["Architecture Flows Designer", "Create service flows and infrastructure diagrams", "2 hours", "https://cloud2br-msftlearninghub.github.io/arch-flows-designer/"],
      ["Cloud Demos and Scenarios", "Evaluate architecture, security, cost, and operations", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/DemosScenarios-TechTalks/"]
    ),
    price: "2,300"
  }),
  "msft-ai-platform": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Azure AI Platform Foundations",
    duration: "One week",
    audience: "AI developers and cloud platform teams",
    overview: "An Azure AI platform program covering embedding optimization, agent infrastructure, MCP services, RAG implementation, and GenAIOps maturity.",
    modules: "Text embeddings\nAgent infrastructure\nMCP services\nRAG applications\nGenAIOps",
    outcomes: "Plan embedding optimization\nMap agent infrastructure\nCompare MCP hosting\nSelect a RAG pattern\nAssess operational maturity",
    sources: courseSources(
      ["Azure Text Embedding Overview", "Embedding models, performance, and Azure optimization", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Azure-Text-Embedding-Overview/"],
      ["AI Agent Infrastructure Blueprint", "Infrastructure for Azure AI Foundry agents", "2 hours", "https://cloud2br-msftlearninghub.github.io/AI-Agent-Infra-Blueprint/"],
      ["Azure MCP Blueprint", "MCP server architecture and hosting options", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/Azure-MCP-blueprint/"],
      ["RAG Chatbot Implementation", "Retrieval, deployment, and security choices", "2 hours", "https://cloud2br-msftlearninghub.github.io/RAG-ChatBot-Implementation/"],
      ["GenAIOps Maturity Levels", "Evaluation, delivery, monitoring, and maturity", "1.5 hours", "https://cloud2br-msftlearninghub.github.io/GenAIOpsMaturityLevels/"]
    ),
    price: "2,500"
  })
});

Object.values(templates).forEach((template) => {
  template.language = "EN";
  template.minCapacity = 5;
  template.maxCapacity = 20;
  template.cohortSize = "5–20 learners";
  template.documentType = template.brand === "Cloud2BR-TEC" ? "Training program" : "Learning program";
  template.preparedBy = "Cloud2BR";
  template.delivery = "Live Teams · 1–2 hours by session";
  template.sourceRefs = buildCourseSchedule(template.sourceRefs, template.modules, template.outcomes, template.duration);
});

Object.assign(templates, {
  "es-cloud2br-tec": spanishProgram("cloud2br-tec", {
    title: "Ruta completa de Machine Learning",
    audience: "Científicos de datos e ingenieros de ML",
    overview: "Un programa integral que avanza desde los fundamentos de machine learning hasta la implementación, el despliegue confiable, el monitoreo y la gestión del ciclo de vida.",
    modules: "Conceptos y tipos de aprendizaje\nPreparación y evaluación de datos\nConstrucción y entrenamiento de modelos\nDespliegue y automatización\nMonitoreo y operación del ciclo de vida",
    outcomes: "Explicar el ciclo de vida de ML\nPreparar datos y evaluar modelos\nConstruir y desplegar un modelo\nPlanificar el monitoreo en producción\nAplicar gobierno y prácticas operativas"
  }),
  "es-tec-rag-builder": spanishProgram("tec-rag-builder", {
    title: "Ruta completa de RAG",
    audience: "Desarrolladores de IA y arquitectos de soluciones",
    overview: "Un programa completo desde los fundamentos de RAG hasta la creación de aplicaciones seguras, escalables y evaluadas para entornos de producción.",
    modules: "Ingesta y preparación de documentos\nIndexación y búsqueda vectorial\nRecuperación y orquestación de prompts\nIntegración de experiencias conversacionales\nEvaluación, seguridad y operaciones",
    outcomes: "Construir un flujo de ingesta documental\nCrear un índice vectorial consultable\nImplementar generación fundamentada\nIntegrar una experiencia conversacional\nPlanificar controles de producción"
  }),
  "es-microsoft-learning": spanishProgram("microsoft-learning", {
    title: "Ruta de aprendizaje de Microsoft Fabric",
    audience: "Ingenieros de datos y equipos de analítica",
    overview: "Una progresión guiada desde los fundamentos de Fabric y escenarios prácticos hasta arquitectura empresarial, gobierno, capacidad y operación.",
    modules: "Arquitectura de Fabric y OneLake\nLakehouse y arquitectura Medallion\nFlujos de ingeniería de datos\nIntegración con espacios de Power BI\nGestión de capacidad y costos",
    outcomes: "Explicar la plataforma Fabric\nOrganizar las capas de datos del lakehouse\nConstruir un flujo básico de datos\nConectar experiencias analíticas\nEvaluar necesidades de capacidad"
  }),
  "es-msft-security-operations": spanishProgram("msft-security-operations", {
    title: "Operaciones de seguridad Microsoft",
    audience: "Ingenieros de seguridad y equipos de operaciones cloud",
    overview: "Un programa integrado de operaciones de seguridad que cubre Defender, Sentinel, Security Copilot, campañas de seguridad y controles de Microsoft Purview.",
    modules: "Defender for Cloud\nMicrosoft Sentinel\nSecurity Copilot\nCampañas de seguridad\nMicrosoft Purview",
    outcomes: "Planificar la adopción de Defender\nDescribir las operaciones de Sentinel\nIdentificar casos de Security Copilot\nEstructurar una campaña de seguridad\nConectar controles de gobierno de datos"
  }),
  "es-msft-agent-mcp": spanishProgram("msft-agent-mcp", {
    title: "Ingeniería de agentes de Azure y MCP",
    audience: "Desarrolladores de IA, arquitectos e ingenieros de plataforma",
    overview: "Un programa práctico para diseñar servicios de agentes, infraestructura segura, alojamiento MCP, agentes de datos de Fabric y prácticas operativas de producción.",
    modules: "Fundamentos de plataformas de agentes\nInfraestructura para agentes de IA\nPatrones de alojamiento MCP\nIntegración de agentes con Fabric\nOperaciones de agentes",
    outcomes: "Explicar las opciones de plataforma\nAprovisionar infraestructura de agentes\nComparar opciones de alojamiento MCP\nConectar agentes de Fabric y Copilot\nPlanificar operaciones controladas"
  }),
  "es-msft-document-automation": spanishProgram("msft-document-automation", {
    title: "Implementaciones de automatización documental",
    audience: "Ingenieros de datos, IA y automatización",
    overview: "Un programa de implementación que compara extracción de facturas, procesamiento de diseños, señales visuales, frameworks abiertos y decisiones de arquitectura empresarial.",
    modules: "Extracción administrada de facturas\nExtracción de diseños complejos\nEnrutamiento por señales visuales\nProcesamiento con frameworks abiertos\nSelección de arquitectura",
    outcomes: "Construir un pipeline de facturas\nExtraer diseños complejos\nProcesar múltiples plantillas\nComparar orquestación abierta\nSeleccionar un patrón empresarial"
  })
});

const form = document.querySelector("#program-form");
const templateSelect = document.querySelector("#template");
const generateButton = document.querySelector("#generate-button");
const loadButton = document.querySelector("#load-button");
const saveButton = document.querySelector("#save-button");
const resetButton = document.querySelector("#reset-button");
const refreshCommunicationButton = document.querySelector("#refresh-communication");
const copyEmailButton = document.querySelector("#copy-email");
const copyMessageButton = document.querySelector("#copy-message");
const programTab = document.querySelector("#program-tab");
const communicationTab = document.querySelector("#communication-tab");
const backToProgramButton = document.querySelector("#back-to-program");
const languageButtons = [...document.querySelectorAll(".language-option")];
const workspace = document.querySelector(".workspace");
const draftFile = document.querySelector("#draft-file");
const status = document.querySelector("#status");

function program({ brand, title, duration, audience, overview, modules, outcomes, sources, price, terms }) {
  return {
    brand,
    documentType: "Learning program",
    kicker: brand === "Cloud2BR-TEC" ? "Technology Education Center" : "Guided technology program",
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
    terms: terms || `${duration === "Two weeks" ? "Ten" : "Five"} live training days at 1–2 hours per day. Program price includes digital materials, guided activities, and a completion summary.`
  };
}

function spanishProgram(baseKey, copy) {
  const base = templates[baseKey];
  const focuses = `${copy.modules}\n${copy.outcomes}`.split("\n");
  const sourceRefs = base.sourceRefs.split("\n").map((row, index) => {
    const parts = row.split("|").map((item) => item.trim());
    parts[0] = parts[0].replace("Day", "Día").replace("Week", "Semana");
    parts[2] = focuses[index] || focuses[index % focuses.length];
    return parts.join(" | ");
  }).join("\n");
  const crcPrice = Math.round(parsePrice(base.price) * 520 / 1000) * 1000;
  return {
    ...base,
    sourceTemplate: baseKey,
    language: "ES",
    documentType: "Programa de formación",
    kicker: "Programa tecnológico guiado",
    programTitle: copy.title,
    preparedFor: "Organización cliente",
    audience: copy.audience,
    overview: copy.overview,
    delivery: "Teams en vivo · 1–2 horas por sesión",
    cohortSize: "5–20 participantes",
    modules: copy.modules,
    outcomes: copy.outcomes,
    sourceRefs,
    price: crcPrice.toLocaleString("en-US"),
    currency: "CRC",
    terms: `${base.duration === "Two weeks" ? "Diez" : "Cinco"} sesiones de formación en vivo de 1 a 2 horas. La inversión del programa incluye materiales digitales, actividades guiadas y resumen de finalización.`
  };
}

function courseSources(...sessions) {
  return sessions.map(([title, focus, sessionLength, url]) =>
    `Course | ${title} | ${focus} | ${sessionLength} | ${url}`
  ).join("\n");
}

function buildCourseSchedule(sources, modules, outcomes, duration) {
  const parsedCourses = sources.split("\n").map((source) => {
    const parts = source.split("|").map((item) => item.trim());
    const url = parts.at(-1) || "";
    const catalogCourse = courseCatalog[url];
    return {
      title: catalogCourse?.title || parts[1] || "Course session",
      url,
      explicitSession: parts.length >= 5 ? [parts[2], parts[3]] : null,
      sessions: catalogCourse?.sessions || []
    };
  });
  const publishedCourses = [...parsedCourses.reduce((courses, course) => {
    const existing = courses.get(course.url);
    if (existing) {
      if (course.explicitSession) existing.explicitSessions.push(course.explicitSession);
      return courses;
    }
    courses.set(course.url, {
      ...course,
      explicitSessions: course.explicitSession ? [course.explicitSession] : []
    });
    return courses;
  }, new Map()).values()];
  const fallbackTopics = [modules, outcomes].join("\n").split("\n").map((topic) => topic.trim()).filter(Boolean);
  const courseCount = duration === "Two weeks" ? 10 : 5;
  const sessionsPerCourse = Math.floor(courseCount / publishedCourses.length);
  const extraSessions = courseCount % publishedCourses.length;
  const schedule = publishedCourses.flatMap((course, courseIndex) => {
    const sessionCount = sessionsPerCourse + (courseIndex < extraSessions ? 1 : 0);
    const materials = course.explicitSessions.length
      ? course.explicitSessions
      : course.sessions.length
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
  const template = templates[values.template];
  values.preparedBy = "Cloud2BR";
  values.language = template?.language || "EN";
  values.cohortSize = values.language === "ES"
    ? `${values.minCapacity}–${values.maxCapacity} participantes`
    : `${values.minCapacity}–${values.maxCapacity} learners`;
  form.elements.namedItem("preparedBy").value = values.preparedBy;
  return values;
}

function scheduledHours(value) {
  return value.split("\n").reduce((total, item) => {
    const sessionLength = item.split("|").map((part) => part.trim()).find((part) => /^\d+(\.\d+)? hours?$/.test(part));
    return total + (sessionLength ? Number.parseFloat(sessionLength) : 0);
  }, 0);
}

function formatHours(hours, language = "EN") {
  const value = Number.isInteger(hours) ? hours : hours.toFixed(1);
  return language === "ES" ? `${value} horas en vivo` : `${value} live hours`;
}

function parsePrice(value) {
  return Number.parseFloat(String(value).replace(/[^\d.]/g, "")) || 0;
}

function formatPrice(value, currency) {
  const locale = currency === "CRC" ? "es-CR" : "en-US";
  return Math.round(value).toLocaleString(locale);
}

function perPersonRange(values) {
  const price = parsePrice(values.price);
  const minimum = Number(values.minCapacity) || 1;
  const maximum = Number(values.maxCapacity) || minimum;
  const rounding = values.currency === "CRC" ? 1000 : 1;
  const low = Math.ceil((price / maximum) / rounding) * rounding;
  const high = Math.ceil((price / minimum) / rounding) * rounding;
  return `${values.currency} ${formatPrice(low, values.currency)}–${formatPrice(high, values.currency)}`;
}

function communicationCopy(values) {
  const spanish = values.language === "ES";
  const hours = scheduledHours(values.sourceRefs || "");
  const sessionCount = (values.sourceRefs || "").split("\n").filter((row) => row.trim()).length;
  const duration = spanish
    ? values.duration === "Two weeks" ? "dos semanas" : "una semana"
    : values.duration.toLowerCase();
  const durationAdjective = values.duration === "Two weeks" ? "two-week" : "one-week";
  const capacity = `${values.minCapacity}–${values.maxCapacity}`;
  const investment = `${values.currency} ${formatPrice(parsePrice(values.price), values.currency)}`;
  const perPerson = perPersonRange(values);

  if (spanish) {
    return {
      emailSubject: `Propuesta de formación: ${values.programTitle}`,
      emailBody: `Hola [Nombre]:\n\nLe comparto el programa ${values.programTitle} de Cloud2BR, una experiencia de aprendizaje en vivo de ${duration} diseñada para ${values.audience}.\n\nEl programa incluye ${formatHours(hours, "ES")} distribuidas en ${sessionCount} sesiones guiadas y admite de ${values.minCapacity} a ${values.maxCapacity} participantes. La inversión del programa es de ${investment}, equivalente aproximadamente a ${perPerson} por persona, según la cantidad de participantes.\n\nAdjunto encontrará el PDF de una página con el flujo de aprendizaje, los cursos, los resultados esperados y los detalles de entrega.\n\n¿Podemos coordinar una breve conversación para revisar el ajuste del programa y las fechas disponibles?\n\nSaludos,\nCloud2BR\n${values.contact}`,
      messageBody: `Hola [Nombre], le comparto el programa ${values.programTitle} de Cloud2BR: ${duration}, ${formatHours(hours, "ES")}, para ${capacity} participantes. La inversión es de ${investment} (${perPerson} por persona, según asistencia). Adjunto el PDF con el flujo de aprendizaje y los cursos. ¿Coordinamos una breve conversación para revisar fechas y ajuste?`
    };
  }

  return {
    emailSubject: `Training proposal: ${values.programTitle}`,
    emailBody: `Hello [Name],\n\nI’m sharing Cloud2BR’s ${values.programTitle}, a ${durationAdjective} live learning program designed for ${values.audience}.\n\nThe program includes ${formatHours(hours)} across ${sessionCount} guided sessions and supports ${values.minCapacity} to ${values.maxCapacity} participants. Program investment is ${investment}, equivalent to approximately ${perPerson} per person depending on attendance.\n\nI’ve attached the one-page PDF outlining the learning flow, courses, expected outcomes, and delivery details.\n\nWould you be available for a brief conversation to review program fit and available dates?\n\nBest,\nCloud2BR\n${values.contact}`,
    messageBody: `Hello [Name], I’m sharing Cloud2BR’s ${values.programTitle}: ${duration}, ${formatHours(hours)}, for ${capacity} participants. Program investment is ${investment} (${perPerson} per person depending on attendance). I’ve attached the PDF with the learning flow and courses. Would you be open to a brief conversation about fit and scheduling?`
  };
}

function refreshCommunication(announce = true) {
  const values = formValues();
  setFormValues(communicationCopy(values));
  resizeCommunicationFields();
  if (announce) status.textContent = values.language === "ES" ? "Plantillas de comunicación actualizadas." : "Communication templates refreshed.";
}

function resizeCommunicationFields() {
  ["emailSubject", "emailBody", "messageBody"].forEach((name) => {
    const field = form.elements.namedItem(name);
    field.style.height = "auto";
    field.style.height = `${field.scrollHeight + 2}px`;
  });
}

async function copyCommunication(fieldNames, successMessage) {
  const text = fieldNames.map((name) => form.elements.namedItem(name).value.trim()).filter(Boolean).join("\n\n");
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.append(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  status.textContent = successMessage;
}

function setLocalizedLabels(language) {
  const spanish = language === "ES";
  const labels = {
    "preview-prepared-for-label": spanish ? "Preparado para" : "Prepared for",
    "preview-delivery-label": spanish ? "Modalidad" : "Delivery",
    "preview-duration-label": spanish ? "Duración" : "Duration",
    "preview-audience-label": spanish ? "Audiencia" : "Audience",
    "preview-cohort-label": spanish ? "Grupo" : "Cohort",
    "preview-focus-label": spanish ? "Enfoque del curso" : "Course focus",
    "preview-outcomes-label": spanish ? "Resultados de aprendizaje" : "Learning takeaways",
    "preview-flow-label": spanish ? "Flujo del programa" : "Learning program flow",
    "preview-investment-label": spanish ? "Inversión del programa" : "Program investment",
    "preview-prepared-by-label": spanish ? "Preparado por" : "Prepared by"
  };
  Object.entries(labels).forEach(([id, label]) => setText(id, label));
}

function setInterfaceLanguage(language) {
  const spanish = language === "ES";
  const copy = spanish ? {
    programTab: "Programa",
    communicationTab: "Comunicación",
    eyebrow: "Configuración del documento",
    editorTitle: "Detalles del programa",
    load: "Cargar borrador",
    save: "Guardar borrador",
    reset: "Restablecer",
    legends: ["Plantilla", "Programa", "Alcance y resultados", "Detalles comerciales"],
    fields: {
      template: "Plantilla del programa",
      programTitle: "Título del programa",
      preparedFor: "Preparado para",
      preparedBy: "Organización principal",
      overview: "Descripción general",
      delivery: "Modalidad",
      duration: "Duración",
      audience: "Audiencia",
      minCapacity: "Capacidad mínima",
      maxCapacity: "Capacidad máxima",
      modules: "Módulos del programa, uno por línea",
      outcomes: "Resultados de aprendizaje, uno por línea",
      sourceRefs: "Cursos diarios: día | curso | enfoque | duración | página",
      price: "Precio",
      currency: "Moneda",
      contact: "Contacto",
      terms: "Términos comerciales",
      emailSubject: "Asunto del correo",
      emailBody: "Cuerpo del correo",
      messageBody: "Mensaje breve · Teams, LinkedIn, WhatsApp o SMS"
    },
    outreachEyebrow: "Comunicación multicanal",
    outreachTitle: "Plantillas de comunicación",
    back: "Volver al programa",
    refresh: "Actualizar desde el programa",
    copyEmail: "Copiar correo",
    copyMessage: "Copiar mensaje",
    previewEyebrow: "Vista previa A4",
    previewTitle: "Programa de una página",
    download: "Descargar PDF"
  } : {
    programTab: "Program",
    communicationTab: "Outreach",
    eyebrow: "Document setup",
    editorTitle: "Program details",
    load: "Load draft",
    save: "Save draft",
    reset: "Reset",
    legends: ["Template", "Program", "Scope and outcomes", "Commercial details"],
    fields: {
      template: "Program template",
      programTitle: "Program title",
      preparedFor: "Prepared for",
      preparedBy: "Parent organization",
      overview: "Overview",
      delivery: "Delivery format",
      duration: "Duration",
      audience: "Audience",
      minCapacity: "Minimum capacity",
      maxCapacity: "Maximum capacity",
      modules: "Program modules, one per line",
      outcomes: "Learning outcomes, one per line",
      sourceRefs: "Daily courses: day | course | focus | length | course page",
      price: "Price",
      currency: "Currency",
      contact: "Contact",
      terms: "Commercial terms",
      emailSubject: "Email subject",
      emailBody: "Email body",
      messageBody: "Short message · Teams, LinkedIn, WhatsApp, or SMS"
    },
    outreachEyebrow: "Multi-channel outreach",
    outreachTitle: "Communication templates",
    back: "Back to program",
    refresh: "Refresh from program",
    copyEmail: "Copy email",
    copyMessage: "Copy message",
    previewEyebrow: "A4 preview",
    previewTitle: "One-page program",
    download: "Download PDF"
  };

  programTab.textContent = copy.programTab;
  communicationTab.textContent = copy.communicationTab;
  document.querySelector(".program-panel .eyebrow").textContent = copy.eyebrow;
  document.querySelector("#editor-title").textContent = copy.editorTitle;
  loadButton.textContent = copy.load;
  saveButton.textContent = copy.save;
  resetButton.textContent = copy.reset;
  document.querySelectorAll("fieldset.program-panel legend").forEach((legend, index) => { legend.textContent = copy.legends[index]; });
  Object.entries(copy.fields).forEach(([name, label]) => {
    const field = form.elements.namedItem(name);
    const fieldLabel = field?.closest("label")?.querySelector("span");
    if (fieldLabel) fieldLabel.textContent = label;
  });
  document.querySelector(".communication-panel-heading .eyebrow").textContent = copy.outreachEyebrow;
  document.querySelector("#communication-title").textContent = copy.outreachTitle;
  document.querySelector(".communication-panel legend").textContent = copy.outreachTitle;
  backToProgramButton.textContent = copy.back;
  refreshCommunicationButton.textContent = copy.refresh;
  copyEmailButton.textContent = copy.copyEmail;
  copyMessageButton.textContent = copy.copyMessage;
  document.querySelector(".preview-toolbar .eyebrow").textContent = copy.previewEyebrow;
  document.querySelector("#preview-title").textContent = copy.previewTitle;
  generateButton.textContent = copy.download;
  form.elements.namedItem("duration").options[0].textContent = spanish ? "Una semana" : "One week";
  form.elements.namedItem("duration").options[1].textContent = spanish ? "Dos semanas" : "Two weeks";
}

function updateTemplateSummary(template) {
  const hours = scheduledHours(template.sourceRefs);
  const values = {
    price: template.price,
    currency: template.currency,
    minCapacity: template.minCapacity,
    maxCapacity: template.maxCapacity
  };
  const spanish = template.language === "ES";
  setText("template-summary-title", template.programTitle);
  setText("template-summary-language", spanish ? "Español" : "English");
  setText("template-summary-duration", `${spanish ? (template.duration === "Two weeks" ? "2 semanas" : "1 semana") : template.duration} · ${formatHours(hours, template.language)}`);
  setText("template-summary-capacity", `${template.minCapacity}–${template.maxCapacity} ${spanish ? "participantes" : "learners"}`);
  setText("template-summary-price", `${spanish ? "Programa" : "Program"}: ${template.currency} ${formatPrice(parsePrice(template.price), template.currency)}`);
  setText("template-summary-person", `${perPersonRange(values)} ${spanish ? "por persona" : "per person"}`);
  setText("template-summary-description", template.overview);
}

function updateTemplateOptions(language) {
  [...templateSelect.options].forEach((option) => {
    const template = templates[option.value];
    if (!template) return;
    const visible = template.language === language;
    option.hidden = !visible;
    option.disabled = !visible;
    option.textContent = template.programTitle;
  });
  [...templateSelect.querySelectorAll("optgroup")].forEach((group) => {
    group.hidden = ![...group.querySelectorAll("option")].some((option) => !option.hidden);
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  setInterfaceLanguage(language);
}

function setView(view) {
  const communication = view === "communication";
  workspace.dataset.view = view;
  document.querySelectorAll(".program-panel").forEach((panel) => { panel.hidden = communication; });
  document.querySelector(".communication-panel-heading").hidden = !communication;
  document.querySelector(".communication-panel").hidden = !communication;
  programTab.classList.toggle("is-active", !communication);
  communicationTab.classList.toggle("is-active", communication);
  programTab.setAttribute("aria-selected", String(!communication));
  communicationTab.setAttribute("aria-selected", String(communication));
  if (communication) refreshCommunication(false);
}

function switchLanguage(language) {
  const current = templates[templateSelect.value];
  const translatedKey = language === "ES"
    ? Object.keys(templates).find((key) => templates[key].sourceTemplate === templateSelect.value)
    : current?.sourceTemplate;
  updateTemplateOptions(language);
  applyTemplate(translatedKey || (language === "ES" ? "es-cloud2br-tec" : "cloud2br-tec"));
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

function validateCapacity(values) {
  const minimum = Number(values.minCapacity);
  const maximum = Number(values.maxCapacity);
  const maximumField = form.elements.namedItem("maxCapacity");
  maximumField.setCustomValidity(maximum < minimum ? "Maximum capacity must be equal to or greater than minimum capacity." : "");
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

function setReferences(value, language = "EN") {
  const container = document.querySelector("#preview-source-refs");
  const steps = value.split("\n").map((item) => item.trim()).filter(Boolean).slice(0, 10);
  const parsedSteps = steps.map((step) => step.split("|").map((item) => item.trim()));
  const courseTotals = parsedSteps.reduce((totals, parts) => {
    const url = parts.at(-1) || "";
    totals.set(url, (totals.get(url) || 0) + 1);
    return totals;
  }, new Map());
  const courseProgress = new Map();
  container.replaceChildren(...parsedSteps.map((parts, index) => {
    const [stage = "Course", title = "Course session"] = parts;
    const hasFocus = parts.length >= 4;
    const focus = hasFocus ? parts[2] : "Guided course session";
    const hasSessionLength = parts.length >= 5;
    const sessionLength = hasSessionLength ? parts[3] : "1.5 hours";
    const url = parts.at(-1) || "";
    const moduleNumber = (courseProgress.get(url) || 0) + 1;
    courseProgress.set(url, moduleNumber);
    const moduleCount = courseTotals.get(url) || 1;
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
    stageLabel.textContent = moduleCount > 1
      ? `${stage} · ${language === "ES" ? "Módulo" : "Module"} ${moduleNumber} ${language === "ES" ? "de" : "of"} ${moduleCount}`
      : `${stage} · ${language === "ES" ? "Curso" : "Course"}`;
    const courseTitle = document.createElement("strong");
    courseTitle.textContent = title;
    const courseFocus = document.createElement("small");
    courseFocus.className = "path-focus";
    courseFocus.textContent = focus;
    const duration = document.createElement("small");
    duration.className = "path-duration";
    duration.textContent = `${language === "ES" ? sessionLength.replace("hours", "horas").replace("hour", "hora") : sessionLength} · ${language === "ES" ? "Teams en vivo" : "Live Teams"}`;
    const action = document.createElement("small");
    action.className = "path-action";
    action.textContent = language === "ES" ? "Abrir curso ↗" : "Open course ↗";
    link.setAttribute("aria-label", language === "ES" ? `Abrir página del curso ${title}` : `Open course page for ${title}`);
    copy.append(stageLabel, courseTitle, courseFocus, duration, action);
    link.append(sequence, copy);
    return link;
  }));
}

function updatePreview() {
  const values = formValues();
  validateCourseCount(values);
  validateCapacity(values);
  const selectedTemplate = templates[values.template];
  const totalHours = scheduledHours(values.sourceRefs || "");
  setLocalizedLabels(values.language);
  updateTemplateSummary(selectedTemplate);
  setText("scheduled-hours", totalHours ? formatHours(totalHours, values.language) : values.language === "ES" ? "Horas calculadas de las sesiones" : "Hours calculated from sessions");
  setText("preview-brand", "Cloud2BR");
  setText("preview-document-type", values.language === "ES" ? "Programa de formación" : "Training program");
  setText("preview-kicker", selectedTemplate.kicker);
  setText("preview-title-value", values.programTitle);
  setText("preview-prepared-for", values.preparedFor);
  setText("preview-prepared-by", values.preparedBy);
  setText("preview-overview", values.overview);
  setText("preview-delivery", values.delivery);
  const duration = values.language === "ES" ? (values.duration === "Two weeks" ? "Dos semanas" : "Una semana") : values.duration;
  setText("preview-duration", totalHours ? `${duration} · ${formatHours(totalHours, values.language)}` : duration);
  setText("preview-audience", values.audience);
  setText("preview-cohort-size", values.cohortSize);
  setList("preview-modules", values.modules);
  setList("preview-outcomes", values.outcomes);
  setReferences(values.sourceRefs, values.language);
  setText("preview-price", formatPrice(parsePrice(values.price), values.currency));
  setText("preview-currency", values.currency);
  setText("preview-per-person", `${perPersonRange(values)} ${values.language === "ES" ? "por persona" : "per person"}`);
  setText("preview-contact", values.contact);
  setText("preview-terms", values.terms);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

function applyTemplate(templateName) {
  const values = { ...templates[templateName], template: templateName };
  updateTemplateOptions(values.language);
  setFormValues({ ...values, ...communicationCopy(values) });
  resizeCommunicationFields();
  updatePreview();
}

function restoreState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && templates[saved.template]) {
      updateTemplateOptions(templates[saved.template].language);
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
  if (["emailSubject", "emailBody", "messageBody"].includes(event.target.name)) resizeCommunicationFields();
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
programTab.addEventListener("click", () => setView("program"));
communicationTab.addEventListener("click", () => setView("communication"));
backToProgramButton.addEventListener("click", () => setView("program"));
languageButtons.forEach((button) => button.addEventListener("click", () => switchLanguage(button.dataset.language)));
loadButton.addEventListener("click", () => draftFile.click());
saveButton.addEventListener("click", downloadDraft);
refreshCommunicationButton.addEventListener("click", () => refreshCommunication());
copyEmailButton.addEventListener("click", () => copyCommunication(["emailSubject", "emailBody"], "Email template copied."));
copyMessageButton.addEventListener("click", () => copyCommunication(["messageBody"], "Message template copied."));
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