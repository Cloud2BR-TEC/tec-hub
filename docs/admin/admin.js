const STORAGE_KEY = "cloud2br-program-pdf-v2";

const templates = {
  "cloud2br-tec": {
    brand: "Cloud2BR-TEC",
    documentType: "Training program",
    kicker: "Technology Education Center",
    programTitle: "AI Academy: RAG Foundations",
    preparedFor: "Client organization",
    preparedBy: "Cloud2BR-TEC",
    overview: "A guided introduction to retrieval-augmented generation, from LLM limitations and embeddings to chunking, semantic search, and grounded responses.",
    delivery: "Live Microsoft Teams meetings",
    duration: "One week",
    audience: "Developers and solution architects",
    cohortSize: "Up to 20 learners",
    modules: "LLM limitations and RAG use cases\nEmbeddings and vector databases\nSemantic search and retrieval\nDocument chunking strategies\nPrompt augmentation and quality",
    outcomes: "Explain the RAG workflow\nSelect embedding and retrieval approaches\nPrepare content for effective retrieval\nDesign grounded prompt patterns\nEvaluate retrieval quality",
    sourceRefs: "https://github.com/Cloud2BR-TEC/ai-academy-101-rag",
    price: "4,800",
    currency: "USD",
    validUntil: futureDate(30),
    contact: "cloud2br@outlook.com",
    terms: "Includes live instruction, digital materials, guided labs, and completion certificates. Scheduling is confirmed after acceptance."
  },
  cloud2br: {
    brand: "Cloud2BR",
    documentType: "Professional services program",
    kicker: "Practical tools workshop",
    programTitle: "Document Productivity Toolkit",
    preparedFor: "Client organization",
    preparedBy: "Cloud2BR",
    overview: "A focused demonstration and guided lab using Cloud2BR utilities for file conversion, OCR image-to-PDF processing, and PDF merge and split workflows.",
    delivery: "Live Microsoft Teams meetings",
    duration: "One session",
    audience: "Operations and productivity teams",
    cohortSize: "Up to 15 learners",
    modules: "File format conversion\nOCR image-to-PDF workflows\nPDF merge operations\nPDF split operations\nPractical automation scenarios",
    outcomes: "Choose the right document utility\nConvert common file formats\nCreate searchable PDFs from images\nCombine and separate PDF files\nMap utilities to team workflows",
    sourceRefs: "https://github.com/Cloud2BR/File-Format-Converter\nhttps://github.com/Cloud2BR/OCR-IMG2PDF-Converter\nhttps://github.com/Cloud2BR/PDFs-Merge-Split",
    price: "1,200",
    currency: "USD",
    validUntil: futureDate(30),
    contact: "cloud2br@outlook.com",
    terms: "Includes discovery, facilitated workshops, reference materials, and a final recommendations brief. Travel expenses are excluded."
  },
  "microsoft-learning": {
    brand: "Cloud2BR-MSFTLearningHub",
    documentType: "Microsoft learning program",
    kicker: "Microsoft technology training",
    programTitle: "Microsoft Fabric Fundamentals",
    preparedFor: "Client organization",
    preparedBy: "Cloud2BR-MSFTLearningHub",
    overview: "A practical introduction to Microsoft Fabric architecture, OneLake, lakehouse engineering, Power BI integration, and capacity management.",
    delivery: "Live Microsoft Teams meetings",
    duration: "One week",
    audience: "Data engineers and analytics teams",
    cohortSize: "Up to 20 learners",
    modules: "Fabric architecture and OneLake\nLakehouse and Medallion Architecture\nData engineering workflows\nPower BI workspace integration\nCapacity and cost management",
    outcomes: "Explain the Fabric platform\nOrganize lakehouse data layers\nBuild a basic data workflow\nConnect analytics experiences\nAssess capacity requirements",
    sourceRefs: "https://github.com/Cloud2BR-MSFTLearningHub/MS-Fabric-Essentials-Workshop\nhttps://github.com/Cloud2BR-MSFTLearningHub/DemosScenarios-TechTalks",
    price: "3,200",
    currency: "USD",
    validUntil: futureDate(30),
    contact: "cloud2br@outlook.com",
    terms: "Includes instructor-led delivery and course materials. Exam vouchers, Microsoft licenses, and tenant consumption are excluded unless stated otherwise."
  }
};

Object.assign(templates, {
  "tec-rag-builder": program({
    brand: "Cloud2BR-TEC",
    title: "AI Academy: Build a RAG Application",
    duration: "Two weeks",
    audience: "AI developers and solution architects",
    overview: "An end-to-end build program covering document ingestion, indexing, retrieval, prompt orchestration, chat interfaces, and production RAG considerations.",
    modules: "Document ingestion and preparation\nIndexing and vector search\nRetrieval and prompt orchestration\nChat application integration\nEvaluation, security, and operations",
    outcomes: "Build a document ingestion flow\nCreate a searchable vector index\nImplement grounded generation\nConnect a chat experience\nPlan production controls",
    sources: "https://github.com/Cloud2BR-TEC/ai-academy-102-rag\nhttps://github.com/Cloud2BR-TEC/ai-academy-103-rag",
    price: "5,800"
  }),
  "tec-production-ml": program({
    brand: "Cloud2BR-TEC",
    title: "AI Academy: Production Machine Learning",
    duration: "Two weeks",
    audience: "Data scientists and ML engineers",
    overview: "A build-to-production learning path for model development, deployment pipelines, monitoring, automation, governance, and cost-aware operations.",
    modules: "Model development and training\nExperiment tracking and evaluation\nDeployment pipelines\nMonitoring and drift detection\nLifecycle automation and governance",
    outcomes: "Train and evaluate ML models\nDesign repeatable deployment flows\nMonitor model behavior\nAutomate lifecycle activities\nApply production governance",
    sources: "https://github.com/Cloud2BR-TEC/ai-academy-102-ml\nhttps://github.com/Cloud2BR-TEC/ai-academy-103-ml",
    price: "5,800"
  }),
  "tec-document-intelligence": program({
    brand: "Cloud2BR-TEC",
    title: "Document Intelligence ETL",
    duration: "One week",
    audience: "Data and automation engineers",
    overview: "A hands-on document processing path covering invoice and layout extraction, Azure Document Intelligence, validation, and downstream ETL patterns.",
    modules: "Document processing architecture\nLayout and invoice extraction\nField mapping and validation\nOpen framework pipelines\nOperational ETL patterns",
    outcomes: "Select a document extraction approach\nProcess layout and invoice content\nValidate extracted fields\nConnect extraction to ETL\nPlan reliable operations",
    sources: "https://github.com/Cloud2BR-TEC/ai-academy-101-docs-etl",
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
    sources: "https://github.com/Cloud2BR-TEC/ai-academy-101-ops",
    price: "3,200"
  }),
  "cloud2br-dashboards": program({
    brand: "Cloud2BR",
    title: "Data Dashboard Lab",
    duration: "One week",
    audience: "Developers and data analysts",
    overview: "A guided application lab using Cloud2BR dashboard examples to explore data preparation, visual storytelling, filtering, and responsive interface patterns.",
    modules: "Dataset preparation\nDashboard information design\nCharts and visual encoding\nFiltering and interaction\nResponsive delivery",
    outcomes: "Prepare data for visualization\nChoose effective chart patterns\nBuild interactive filters\nCreate a coherent dashboard\nReview responsive behavior",
    sources: "https://github.com/Cloud2BR/stocks-101-dashboard\nhttps://github.com/Cloud2BR/fifa-worldcup-albums",
    price: "2,400"
  }),
  "cloud2br-devops": program({
    brand: "Cloud2BR",
    title: "DevOps Organization Automation",
    duration: "One week",
    audience: "Platform and DevOps engineers",
    overview: "A practical workshop based on Cloud2BR tooling for organizing documentation and automating common GitHub and Azure DevOps administration workflows.",
    modules: "Organization management concepts\nGitHub administration workflows\nAzure DevOps workflows\nDocumentation workspaces\nAutomation safety and review",
    outcomes: "Map organization operations\nIdentify repeatable admin tasks\nUse CLI-driven workflows\nStructure technical documentation\nPlan reviewed automation",
    sources: "https://github.com/Cloud2BR/devopster\nhttps://github.com/Cloud2BR/docs-foundry",
    price: "2,800"
  }),
  "msft-azure-ai": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Azure AI and RAG Engineering",
    duration: "Two weeks",
    audience: "AI engineers and cloud architects",
    overview: "A solution-focused path through Azure AI capabilities, RAG chatbot architecture, model workflows, zero-trust considerations, and operational practices.",
    modules: "Azure AI services and projects\nRAG architecture and retrieval\nChatbot implementation\nZero-trust AI patterns\nEvaluation and operations",
    outcomes: "Navigate Azure AI capabilities\nDesign a RAG architecture\nBuild a chatbot workflow\nApply security boundaries\nPlan evaluation and monitoring",
    sources: "https://github.com/Cloud2BR-MSFTLearningHub/Azure-ML-Overview\nhttps://github.com/Cloud2BR-MSFTLearningHub/RAG-ChatBot-Implementation\nhttps://github.com/Cloud2BR-MSFTLearningHub/GenAIOpsMaturityLevels",
    price: "5,800"
  }),
  "msft-fabric-ai": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Fabric AI Skills",
    duration: "One session",
    audience: "Data and BI professionals",
    overview: "A concise live session exploring AI experiences in Microsoft Fabric, conversational data access, Power BI integration, and tenant-level considerations.",
    modules: "Fabric AI capabilities\nConversational data access\nAI Skills configuration\nPower BI integration\nGovernance considerations",
    outcomes: "Recognize Fabric AI scenarios\nDescribe AI Skills architecture\nConnect AI and BI experiences\nIdentify configuration needs\nPlan a governed pilot",
    sources: "https://github.com/Cloud2BR-MSFTLearningHub/MS-Fabric-Essentials-Workshop\nhttps://github.com/Cloud2BR-MSFTLearningHub/DemosScenarios-TechTalks",
    price: "1,200"
  }),
  "msft-certification": program({
    brand: "Cloud2BR-MSFTLearningHub",
    title: "Azure AI Fundamentals Study Path",
    duration: "One week",
    audience: "Azure AI fundamentals learners",
    overview: "A community study path that organizes Azure AI concepts, practical review, and readiness checks around the AI-900 learning objectives.",
    modules: "AI workloads and considerations\nMachine learning fundamentals\nComputer vision concepts\nNatural language processing\nGenerative AI concepts and review",
    outcomes: "Organize AI fundamentals concepts\nRelate workloads to Azure services\nReview responsible AI principles\nIdentify knowledge gaps\nPrepare a continued study plan",
    sources: "https://github.com/Cloud2BR-MSFTLearningHub/AI-900StudyGuide",
    price: "2,000",
    terms: "Includes live meetings, community study materials, guided review, and practice activities. This is not an official Microsoft course or exam guarantee."
  })
});

const form = document.querySelector("#program-form");
const templateSelect = document.querySelector("#template");
const generateButton = document.querySelector("#generate-button");
const resetButton = document.querySelector("#reset-button");
const status = document.querySelector("#status");

function futureDate(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

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
    validUntil: futureDate(30),
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
  const links = value.split("\n").map((item) => item.trim()).filter(Boolean).slice(0, 3);
  container.replaceChildren(...links.map((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = url.replace("https://github.com/", "");
    return link;
  }));
}

function formatDate(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
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
  setText("preview-valid-until", formatDate(values.validUntil));
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
resetButton.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  applyTemplate(templateSelect.value);
});
generateButton.addEventListener("click", generatePdf);

restoreState();