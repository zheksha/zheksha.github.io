document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const features = [
    // Core Language Features
    [
      "Interactivity",
      "Client-Side Scripting",
      "Cross-Platform Compatibility",
      "Dynamic Typing",
      "Prototype-Based Object-Oriented Programming",
      "Functional Programming Support",
      "Error Handling",
    ],
    // Web Development Capabilities
    ["DOM Manipulation", "Event-Driven Architecture"],
    // Ecosystem and Development Practices
    ["Asynchronous Programming", "Modularity", "Rich Ecosystem"],
  ];

  let selectedTabIndex = 0;

  const featuresBtn = document.getElementById("btn-features");
  const capabilitesBtn = document.getElementById("btn-capabilites");
  const practicesBtn = document.getElementById("btn-practices");

  const tabContent = document.getElementById("tab-content");

  const updateTabContent = (features) => {
    const list = document.createElement("ul");
    let listContent = "";
    features.forEach((feature) => {
      listContent += `<li>${feature}</li>`;
    });
    list.innerHTML = listContent;
    tabContent.innerHTML = "";
    tabContent.appendChild(list);
  };

  updateTabContent(features[selectedTabIndex]);

  const removeActive = function () {
    featuresBtn.classList.remove("active");
    capabilitesBtn.classList.remove("active");
    practicesBtn.classList.remove("active");

    updateTabContent(features[selectedTabIndex]);
  };

  featuresBtn.addEventListener("click", function () {
    selectedTabIndex = 0;
    removeActive();
    featuresBtn.classList.add("active");
    updateTabContent();
  });

  capabilitesBtn.addEventListener("click", function () {
    selectedTabIndex = 1;
    removeActive();
    capabilitesBtn.classList.add("active");
  });

  practicesBtn.addEventListener("click", function () {
    selectedTabIndex = 2;
    removeActive();
    practicesBtn.classList.add("active");
  });
});
