const STORAGE_KEY = "cloud2br-program-pdf-v4";

const templates = {
  "cloud2br-tec": {
    brand: "Cloud2BR-TEC",
    documentType: "Training program",
    kicker: "Technology Education Center",
    programTitle: "Machine Learning Complete Path",
    preparedFor: "Client organization",
    preparedBy: "Cloud2BR-TEC",
    overview: "A complete three-stage path from machine learning foundations through model implementation to reliable production deployment, monitoring, and lifecycle management.",
    delivery: "Live Microsoft Teams meetings",
    duration: "Two weeks",
    audience: "Data scientists and ML engineers",
    cohortSize: "Up to 20 learners",
    modules: "ML concepts and learning types\nData preparation and evaluation\nModel building and training\nDeployment and automation\nMonitoring and lifecycle operations",
    outcomes: "Explain the ML lifecycle\nPrepare data and evaluate models\nBuild and deploy a model\nPlan production monitoring\nApply governance and operations",
    sourceRefs: "101 | ML Foundations | https://cloud2br-tec.github.io/ai-academy-101-ml/\n102 | Applied ML | https://cloud2br-tec.github.io/ai-academy-102-ml/\n103 | Production ML | https://cloud2br-tec.github.io/ai-academy-103-ml/",
    price: "6,400",
    currency: "USD",
    contact: "cloud2br@outlook.com",
    terms: "Includes live instruction, digital materials, guided labs, and completion certificates. Scheduling is confirmed after acceptance."
  },
  "microsoft-learning": {
    brand: "Cloud2BR-MSFTLearningHub",
    documentType: "Microsoft learning program",
    kicker: "Microsoft technology training",
    programTitle: "Microsoft Fabric Learning Path",
    preparedFor: "Client organization",
    preparedBy: "Cloud2BR-MSFTLearningHub",
    overview: "A guided progression from Fabric essentials and hands-on scenarios to enterprise architecture, governance, capacity, and operational considerations.",
    delivery: "Live Microsoft Teams meetings",
    duration: "Two weeks",
    audience: "Data engineers and analytics teams",
    cohortSize: "Up to 20 learners",
    modules: "Fabric architecture and OneLake\nLakehouse and Medallion Architecture\nData engineering workflows\nPower BI workspace integration\nCapacity and cost management",
    outcomes: "Explain the Fabric platform\nOrganize lakehouse data layers\nBuild a basic data workflow\nConnect analytics experiences\nAssess capacity requirements",
    sourceRefs: "Start | Fabric Essentials | https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/\nPractice | Demos & Scenarios | https://cloud2br-msftlearninghub.github.io/DemosScenarios-TechTalks/\nExtend | Enterprise Framework | https://cloud2br-msftlearninghub.github.io/Fabric-EnterpriseFramework/",
    price: "5,800",
    currency: "USD",
    contact: "cloud2br@outlook.com",
    terms: "Includes live Microsoft Teams meetings, guided activities, and links to the published supporting materials. Scheduling is confirmed after acceptance."
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
    sources: "101 | RAG Foundations | https://cloud2br-tec.github.io/ai-academy-101-rag/\n102 | Build a RAG App | https://cloud2br-tec.github.io/ai-academy-102-rag/\n103 | Production RAG | https://cloud2br-tec.github.io/ai-academy-103-rag/",
    price: "6,400"
  }),
  "tec-ml-101": program({
    brand: "Cloud2BR-TEC",
    title: "Machine Learning Foundations",
    duration: "One week",
    audience: "New data and AI practitioners",
    overview: "A visual and practical introduction to machine learning concepts, Azure ML, data-to-endpoint lifecycle, model evaluation, deployment, and monitoring.",
    modules: "Machine learning basics\nAzure ML overview\nWorkspace and authoring\nBuild and evaluate a first model\nDeploy, score, and monitor",
    outcomes: "Explain core ML concepts\nNavigate an Azure ML workspace\nBuild and evaluate a model\nDescribe model deployment\nRecognize lifecycle responsibilities",
    sources: "Start | ML Foundations 101 | https://cloud2br-tec.github.io/ai-academy-101-ml/\nContinue | Applied ML 102 | https://cloud2br-tec.github.io/ai-academy-102-ml/",
    price: "3,200"
  }),
  "tec-ml-102": program({
    brand: "Cloud2BR-TEC",
    title: "Applied Machine Learning",
    duration: "One week",
    audience: "Data scientists and ML developers",
    overview: "An applied path through ML mathematics, model families, Azure ML environments, data preparation, training, metrics, explainability, and deployment.",
    modules: "ML math and lifecycle\nData preparation and model types\nTraining and AutoML\nMetrics and explainability\nDeployment and debugging",
    outcomes: "Frame an end-to-end ML workflow\nPrepare data for training\nCompare model approaches\nInterpret evaluation metrics\nDeploy and troubleshoot a model",
    sources: "Start | Applied ML 102 | https://cloud2br-tec.github.io/ai-academy-102-ml/\nContinue | Production ML 103 | https://cloud2br-tec.github.io/ai-academy-103-ml/",
    price: "3,200"
  }),
  "tec-production-ml": program({
    brand: "Cloud2BR-TEC",
    title: "AI Academy: Production Machine Learning",
    duration: "Two weeks",
    audience: "Data scientists and ML engineers",
    overview: "A build-to-production learning path for model development, deployment pipelines, monitoring, automation, governance, and cost-aware operations.",
    modules: "Model development and training\nExperiment tracking and evaluation\nDeployment pipelines\nMonitoring and drift detection\nLifecycle automation and governance",
    outcomes: "Train and evaluate ML models\nDesign repeatable deployment flows\nMonitor model behavior\nAutomate lifecycle activities\nApply production governance",
    sources: "Prepare | ML Foundations 101 | https://cloud2br-tec.github.io/ai-academy-101-ml/\nBuild | Applied ML 102 | https://cloud2br-tec.github.io/ai-academy-102-ml/\nOperate | Production ML 103 | https://cloud2br-tec.github.io/ai-academy-103-ml/",
    price: "3,200"
  }),
  "tec-rag-101": program({
    brand: "Cloud2BR-TEC",
    title: "RAG Foundations",
    duration: "One week",
    audience: "AI developers and solution architects",
    overview: "A practical foundation in retrieval-augmented generation, architecture options, retrieval quality, data ingestion, security, and Azure implementation considerations.",
    modules: "RAG concepts and use cases\nRetrieval and augmentation\nBasic architecture\nZero Trust architecture\nQuality and cost considerations",
    outcomes: "Explain a RAG workflow\nCompare architecture options\nPlan content ingestion\nIdentify security controls\nAssess quality and cost drivers",
    sources: "Start | RAG Foundations 101 | https://cloud2br-tec.github.io/ai-academy-101-rag/\nContinue | Build a RAG App 102 | https://cloud2br-tec.github.io/ai-academy-102-rag/",
    price: "3,200"
  }),
  "tec-rag-102": program({
    brand: "Cloud2BR-TEC",
    title: "Build a Multi-Agent RAG Application",
    duration: "One week",
    audience: "AI application developers",
    overview: "A build-focused course on multi-agent RAG concepts, orchestration responsibilities, implementation options, evaluation, and application delivery.",
    modules: "Multi-agent RAG concepts\nAgent responsibilities\nOrchestration approaches\nImplementation options\nEvaluation and delivery",
    outcomes: "Describe multi-agent RAG\nAssign agent responsibilities\nCompare build approaches\nPlan an implementation\nDefine evaluation criteria",
    sources: "Build | Build RAG 102 | https://cloud2br-tec.github.io/ai-academy-102-rag/\nOperate | Production RAG 103 | https://cloud2br-tec.github.io/ai-academy-103-rag/",
    price: "3,200"
  }),
  "tec-document-intelligence": program({
    brand: "Cloud2BR-TEC",
    title: "Document Intelligence ETL",
    duration: "One week",
    audience: "Data and automation engineers",
    overview: "A hands-on document processing path covering invoice and layout extraction, Azure Document Intelligence, validation, and downstream ETL patterns.",
    modules: "Document processing architecture\nLayout and invoice extraction\nField mapping and validation\nOpen framework pipelines\nOperational ETL patterns",
    outcomes: "Select a document extraction approach\nProcess layout and invoice content\nValidate extracted fields\nConnect extraction to ETL\nPlan reliable operations",
    sources: "Build | Docs ETL 101 | https://cloud2br-tec.github.io/ai-academy-101-docs-etl/\nOperate | AI Operations 101 | https://cloud2br-tec.github.io/ai-academy-101-ops/",
    price: "3,200"
  }),
  "tec-ai-operations": program({
    brand: "Cloud2BR-TEC",
    title: "Azure AI Operations",
    duration: "One week",
    audience: "AI, ML, and platform engineers",
    overview: "A practical introduction to GenAIOps and MLOps across evaluation, deployment, monitoring, governance, security, and continuous improvement.",
    modules: "AI application lifecycle\nEvaluation and release controls\nDeployment and monitoring\nGovernance and security\nContinuous improvement",
    outcomes: "Map the AI delivery lifecycle\nDefine evaluation gates\nPlan monitored deployments\nApply governance controls\nCreate an improvement loop",
    sources: "Start | AI Operations 101 | https://cloud2br-tec.github.io/ai-academy-101-ops/\nApply | Production ML 103 | https://cloud2br-tec.github.io/ai-academy-103-ml/",
    price: "3,200"
  }),
  "msft-azure-ai": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Azure AI and RAG Engineering",
    duration: "Two weeks",
    audience: "AI engineers and cloud architects",
    overview: "A solution-focused path through Azure AI capabilities, RAG chatbot architecture, model workflows, zero-trust considerations, and operational practices.",
    modules: "Azure AI services and projects\nRAG architecture and retrieval\nChatbot implementation\nZero-trust AI patterns\nEvaluation and operations",
    outcomes: "Navigate Azure AI capabilities\nDesign a RAG architecture\nBuild a chatbot workflow\nApply security boundaries\nPlan evaluation and monitoring",
    sources: "Start | AI-900 Support | https://cloud2br-msftlearninghub.github.io/AI-900StudyGuide/\nDevelop | AI-102 Support | https://cloud2br-msftlearninghub.github.io/AI-102StudyGuide/\nBuild | RAG ChatBot | https://cloud2br-msftlearninghub.github.io/RAG-ChatBot-Implementation/",
    price: "5,800"
  }),
  "msft-fabric-ai": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Fabric Essentials Learning Path",
    duration: "One week",
    audience: "Data and BI professionals",
    overview: "A concise live session exploring AI experiences in Microsoft Fabric, conversational data access, Power BI integration, and tenant-level considerations.",
    modules: "Fabric AI capabilities\nConversational data access\nAI Skills configuration\nPower BI integration\nGovernance considerations",
    outcomes: "Recognize Fabric AI scenarios\nDescribe AI Skills architecture\nConnect AI and BI experiences\nIdentify configuration needs\nPlan a governed pilot",
    sources: "Start | Fabric Essentials | https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/\nExtend | Fabric Enterprise Framework | https://cloud2br-msftlearninghub.github.io/Fabric-EnterpriseFramework/",
    price: "3,200"
  }),
  "msft-fabric-enterprise": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Fabric Enterprise Framework",
    duration: "One week",
    audience: "Data platform architects and leads",
    overview: "A structured guide to Fabric platform foundations, governance, security, versioned delivery, observability, capacity operations, and cost management.",
    modules: "Platform foundations\nGovernance and security\nSource control and delivery\nObservability and capacity\nCost-aware operations",
    outcomes: "Define Fabric platform boundaries\nPlan governed workspaces\nDesign controlled delivery\nEstablish operational signals\nAssess capacity and cost",
    sources: "Prepare | Fabric Essentials | https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/\nApply | Enterprise Framework | https://cloud2br-msftlearninghub.github.io/Fabric-EnterpriseFramework/",
    price: "3,200"
  }),
  "msft-demos": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Microsoft Cloud Demos and Scenarios",
    duration: "One session",
    audience: "Cloud and technology teams",
    overview: "A curated live exploration of Microsoft cloud demonstrations spanning Azure, analytics, Fabric, AI, operations, Microsoft 365, Dynamics, and Power Platform.",
    modules: "Azure foundations and data\nAnalytics and Fabric\nAzure AI and machine learning\nCloud operations and applications\nMicrosoft 365 and Power Platform",
    outcomes: "Navigate the scenario library\nSelect relevant demonstrations\nIdentify architecture questions\nPlan a controlled proof of concept\nDefine follow-up learning",
    sources: "Explore | Demos & Scenarios | https://cloud2br-msftlearninghub.github.io/DemosScenarios-TechTalks/\nDeepen | Fabric Essentials | https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/",
    price: "1,200"
  }),
  "msft-certification": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "AI-900 Support Path",
    duration: "One week",
    audience: "Azure AI fundamentals learners",
    overview: "A community study path that organizes Azure AI concepts, practical review, and readiness checks around the AI-900 learning objectives.",
    modules: "AI workloads and considerations\nMachine learning fundamentals\nComputer vision concepts\nNatural language processing\nGenerative AI concepts and review",
    outcomes: "Organize AI fundamentals concepts\nRelate workloads to Azure services\nReview responsible AI principles\nIdentify knowledge gaps\nPrepare a continued study plan",
    sources: "Start | AI-900 Support Guide | https://cloud2br-msftlearninghub.github.io/AI-900StudyGuide/\nContinue | AI-102 Support Guide | https://cloud2br-msftlearninghub.github.io/AI-102StudyGuide/",
    price: "2,000",
    terms: "Includes live Microsoft Teams meetings, community study materials, guided review, and practice activities."
  }),
  "msft-ai-102": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "AI-102 Support Path",
    duration: "One week",
    audience: "Azure AI solution practitioners",
    overview: "A community support path organizing solution planning, responsible AI, content moderation, vision, language, knowledge mining, and generative AI topics.",
    modules: "Azure AI solution planning\nResponsible AI and content safety\nComputer vision and NLP\nKnowledge mining\nGenerative AI solutions",
    outcomes: "Organize AI solution concepts\nReview responsible AI controls\nCompare AI workloads\nIdentify implementation gaps\nCreate a continued study plan",
    sources: "Prepare | AI-102 Support Guide | https://cloud2br-msftlearninghub.github.io/AI-102StudyGuide/\nBuild | RAG ChatBot Implementation | https://cloud2br-msftlearninghub.github.io/RAG-ChatBot-Implementation/",
    price: "2,400",
    terms: "Includes live Microsoft Teams meetings, community study materials, guided review, and practice activities."
  }),
  "msft-dp-900": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "DP-900 Support Path",
    duration: "One week",
    audience: "Azure data fundamentals learners",
    overview: "A community support path covering core data concepts and Azure services for relational, non-relational, analytics, and modern data workloads.",
    modules: "Core data concepts\nRelational data on Azure\nNon-relational data on Azure\nAnalytics workloads\nGuided review and practice",
    outcomes: "Describe core data concepts\nCompare relational services\nCompare non-relational services\nRecognize analytics workloads\nCreate a continued study plan",
    sources: "Start | DP-900 Support Guide | https://cloud2br-msftlearninghub.github.io/DP-900StudyGuide/\nApply | Fabric Essentials | https://cloud2br-msftlearninghub.github.io/MS-Fabric-Essentials-Workshop/",
    price: "2,000",
    terms: "Includes live Microsoft Teams meetings, community study materials, guided review, and practice activities."
  })
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
    delivery: "Live Microsoft Teams meetings",
    duration,
    audience,
    cohortSize: "Up to 20 learners",
    modules,
    outcomes,
    sourceRefs: sources,
    price,
    currency: "USD",
    contact: "cloud2br@outlook.com",
    terms: terms || "Includes live Microsoft Teams meetings, digital reference materials, guided activities, and a completion summary. Scheduling is confirmed after acceptance."
  };
}

function setFormValues(values) {
  Object.entries(values).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (field) field.value = value;
  });
}

function formValues() {
  return Object.fromEntries(new FormData(form).entries());
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
  const steps = value.split("\n").map((item) => item.trim()).filter(Boolean).slice(0, 3);
  container.replaceChildren(...steps.map((step) => {
    const [stage = "Course", title = "Open course", url = ""] = step.split("|").map((item) => item.trim());
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
    const stageLabel = document.createElement("span");
    stageLabel.textContent = stage;
    const courseTitle = document.createElement("strong");
    courseTitle.textContent = title;
    const action = document.createElement("small");
    action.textContent = "Open course ↗";
    link.setAttribute("aria-label", `Open ${title} course page`);
    link.append(stageLabel, courseTitle, action);
    return link;
  }));
}

function updatePreview() {
  const values = formValues();
  const selectedTemplate = templates[values.template];
  setText("preview-brand", selectedTemplate.brand);
  setText("preview-document-type", selectedTemplate.documentType);
  setText("preview-kicker", selectedTemplate.kicker);
  setText("preview-title-value", values.programTitle);
  setText("preview-prepared-for", values.preparedFor);
  setText("preview-prepared-by", values.preparedBy);
  setText("preview-overview", values.overview);
  setText("preview-delivery", values.delivery);
  setText("preview-duration", values.duration);
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

form.addEventListener("input", updatePreview);
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