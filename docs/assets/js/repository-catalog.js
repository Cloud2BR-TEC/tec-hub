(function () {
  var mapPath = "repos-map.yml";

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[character];
    });
  }

  function cardTemplate(repository) {
    var primaryLink = repository.published && repository.siteUrl
      ? '<a href="' + escapeHtml(repository.siteUrl) + '">Open learning site</a>'
      : "";
    return '<article class="repository-card" data-category="' + escapeHtml(repository.category) + '">' +
      '<div class="repository-card__meta"><span>' + escapeHtml(repository.category) + '</span><span class="repository-card__level">' + escapeHtml(repository.level) + '</span></div>' +
      '<h3>' + escapeHtml(repository.title) + '</h3>' +
      '<p>' + escapeHtml(repository.description) + '</p>' +
      '<div class="repository-card__actions">' + primaryLink + '<a href="' + escapeHtml(repository.repositoryUrl) + '">View repository</a></div>' +
      '</article>';
  }

  function renderCatalog(target, repositories, fullCatalog) {
    var visible = fullCatalog ? repositories : repositories.filter(function (repository) {
      return repository.published && !repository.current;
    });
    target.dataset.repositories = JSON.stringify(visible);
    target.innerHTML = visible.map(cardTemplate).join("");
  }

  function updateFilteredCatalog(target, searchTerm, category) {
    var repositories = JSON.parse(target.dataset.repositories || "[]");
    var search = searchTerm.toLowerCase();
    var visible = repositories.filter(function (repository) {
      var matchesCategory = category === "All" || repository.category === category;
      var searchable = [repository.title, repository.description, repository.category, repository.level].join(" ").toLowerCase();
      return matchesCategory && searchable.indexOf(search) !== -1;
    });
    target.innerHTML = visible.length ? visible.map(cardTemplate).join("") : '<p class="repository-empty">No learning paths match this search.</p>';
  }

  function progressionTemplate(category, repositories) {
    var courses = repositories.map(function (repository) {
      var url = repository.siteUrl || repository.repositoryUrl;
      return '<a href="' + escapeHtml(url) + '">' + escapeHtml(repository.level + ": " + repository.title.replace(/^AI Academy \d+: /, "")) + '</a>';
    }).join(" <span aria-hidden=\"true\">-&gt;</span> ");
    var levels = repositories.map(function (repository) { return repository.level; }).join(" -> ");
    return '<tr><td>' + escapeHtml(category) + '</td><td>' + courses + '</td><td>' + escapeHtml(levels) + ' available</td></tr>';
  }

  function detailedProgressionTemplate(repository) {
    var url = repository.siteUrl || repository.repositoryUrl;
    var linkLabel = repository.siteUrl ? "Open learning site" : "View repository";
    return '<tr><td>' + escapeHtml(repository.level) + '</td><td><strong>' + escapeHtml(repository.title) + '</strong></td><td>' + escapeHtml(repository.description) + '</td><td><a href="' + escapeHtml(url) + '">' + linkLabel + '</a></td></tr>';
  }

  function renderLearningProgression(target, repositories, category) {
    var published = repositories.filter(function (repository) { return repository.published; });
    if (category !== "All") {
      var selectedCourses = published.filter(function (repository) { return repository.category === category; }).sort(function (left, right) {
        return Number(left.level) - Number(right.level);
      });
      target.innerHTML = '<h3>' + escapeHtml(category) + ' course details</h3><table><thead><tr><th>Level</th><th>Course</th><th>What is offered</th><th>Start</th></tr></thead><tbody>' + selectedCourses.map(detailedProgressionTemplate).join("") + '</tbody></table>';
      return;
    }
    var paths = {};
    published.forEach(function (repository) {
      (paths[repository.category] = paths[repository.category] || []).push(repository);
    });
    var rows = Object.keys(paths).sort().map(function (category) {
      return progressionTemplate(category, paths[category].sort(function (left, right) {
        return Number(left.level) - Number(right.level);
      }));
    }).join("");
    target.innerHTML = '<table><thead><tr><th>Learning path</th><th>Available courses</th><th>Current progression</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  function initialize() {
    fetch(mapPath).then(function (response) {
      if (!response.ok) { throw new Error("Repository map could not be loaded."); }
      return response.json();
    }).then(function (catalog) {
      var homeCatalog = document.getElementById("repository-catalog");
      var fullCatalog = document.getElementById("full-repository-catalog");
      var learningProgression = document.getElementById("learning-progression");
      if (homeCatalog) { renderCatalog(homeCatalog, catalog.repositories, false); }
      if (fullCatalog) { renderCatalog(fullCatalog, catalog.repositories, true); }
      if (learningProgression) { renderLearningProgression(learningProgression, catalog.repositories, "All"); }

      var searchInput = document.getElementById("catalog-search");
      var filters = document.querySelectorAll("[data-filter]");
      var activeCategory = "All";
      if (searchInput && homeCatalog) {
        searchInput.addEventListener("input", function () { updateFilteredCatalog(homeCatalog, searchInput.value, activeCategory); });
        filters.forEach(function (filter) {
          filter.addEventListener("click", function () {
            activeCategory = filter.dataset.filter;
            filters.forEach(function (item) { item.classList.toggle("is-active", item === filter); });
            updateFilteredCatalog(homeCatalog, searchInput.value, activeCategory);
            if (learningProgression) { renderLearningProgression(learningProgression, catalog.repositories, activeCategory); }
          });
        });
      }
    }).catch(function () {
      document.querySelectorAll(".repository-catalog").forEach(function (target) {
        target.innerHTML = '<p class="repository-empty">The repository catalog is temporarily unavailable. Visit <a href="https://github.com/Cloud2BR-TEC">Cloud2BR TEC on GitHub</a>.</p>';
      });
      var learningProgression = document.getElementById("learning-progression");
      if (learningProgression) { learningProgression.innerHTML = '<p>The learning progression is temporarily unavailable.</p>'; }
    });
  }

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", initialize); } else { initialize(); }
})();