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

  function initialize() {
    fetch(mapPath).then(function (response) {
      if (!response.ok) { throw new Error("Repository map could not be loaded."); }
      return response.json();
    }).then(function (catalog) {
      var homeCatalog = document.getElementById("repository-catalog");
      var fullCatalog = document.getElementById("full-repository-catalog");
      if (homeCatalog) { renderCatalog(homeCatalog, catalog.repositories, false); }
      if (fullCatalog) { renderCatalog(fullCatalog, catalog.repositories, true); }

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
          });
        });
      }
    }).catch(function () {
      document.querySelectorAll(".repository-catalog").forEach(function (target) {
        target.innerHTML = '<p class="repository-empty">The repository catalog is temporarily unavailable. Visit <a href="https://github.com/Cloud2BR-TEC">Cloud2BR TEC on GitHub</a>.</p>';
      });
    });
  }

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", initialize); } else { initialize(); }
})();