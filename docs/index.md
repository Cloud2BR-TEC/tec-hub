<section class="hub-welcome" aria-labelledby="hub-welcome-title">
  <div class="hub-welcome__intro">
    <p class="hub-welcome__badge">Technology Learning Hub</p>
    <h1 id="hub-welcome-title">Cloud2BR TEC Hub</h1>
    <p class="hub-welcome__lead">Structured learning paths and hands-on resources for cloud, data, AI, and platform engineering — guiding you from foundations to production-ready skills.</p>
    <div class="hub-welcome__actions">
      <a class="hub-action hub-action--primary" href="#explore-the-catalog">Explore learning paths</a>
      <a class="hub-action" href="#learning-progression">View progression</a>
    </div>
  </div>
  <div class="hub-welcome__summary" aria-label="Learning catalog summary">
    <div class="hub-stat"><strong>8</strong><span>Courses available</span></div>
    <div class="hub-stat"><strong>4</strong><span>Learning paths</span></div>
    <div class="hub-stat"><strong>3</strong><span>Skill levels</span></div>
  </div>
</section>

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