<section class="hub-welcome" aria-labelledby="hub-welcome-title">
  <div class="hub-welcome__intro">
    <img class="hub-welcome__mark" src="assets/img/org-logo.png" alt="Cloud2BR TEC" width="128" height="128">
    <div>
      <p class="hub-welcome__eyebrow">Cloud2BR Technology Education Center</p>
      <h1 id="hub-welcome-title">Cloud2BR TEC Hub</h1>
      <p class="hub-welcome__lead">Practical, self-paced learning paths for cloud, data, AI, and platform engineering.</p>
      <div class="hub-welcome__actions">
        <a class="hub-action hub-action--primary" href="#explore-the-catalog">Explore learning paths</a>
        <a class="hub-action" href="#learning-progression">View progression</a>
      </div>
    </div>
  </div>
  <div class="hub-welcome__summary" aria-label="Learning catalog summary">
    <div><strong>4</strong><span>learning domains</span></div>
    <div><strong>8</strong><span>public learning paths</span></div>
    <div><strong>101 to 103</strong><span>guided progression</span></div>
  </div>
</section>

<div class="hub-guidance">
  <strong>Start where you are.</strong> Begin with a 101 foundation, move to 102 to build, and use 103 for production architecture, governance, and operations practices.
</div>

## Explore the catalog

<div class="catalog-toolbar" data-catalog-toolbar>
  <label class="catalog-search-label" for="catalog-search">Find a learning path</label>
  <input id="catalog-search" class="catalog-search" type="search" placeholder="Search topics, such as RAG, monitoring, or Azure" autocomplete="off">
  <div class="catalog-filters" role="group" aria-label="Filter learning paths">
    <button class="catalog-filter is-active" type="button" data-filter="All">All</button>
    <button class="catalog-filter" type="button" data-filter="Machine Learning">Machine Learning</button>
    <button class="catalog-filter" type="button" data-filter="RAG">RAG</button>
    <button class="catalog-filter" type="button" data-filter="Document Intelligence">Document Intelligence</button>
    <button class="catalog-filter" type="button" data-filter="AI Operations">AI Operations</button>
  </div>
</div>

<div id="repository-catalog" class="repository-catalog" aria-live="polite"></div>

<noscript>
  <p>JavaScript is required to load the interactive catalog. Browse the public repositories at <a href="https://github.com/Cloud2BR-TEC">Cloud2BR TEC on GitHub</a>.</p>
</noscript>

## Learning progression

<div id="learning-progression-content" aria-live="polite">
  <p>Loading available learning paths...</p>
</div>

??? info "Catalog maintenance"
    The repository catalog and learning progression are sourced from `repos-map.yml`. Update that map when a public repository is added, renamed, retired, or receives a GitHub Pages site.