// Validate a zipcode

export function isValidZip(zip) {
  return /^\d{5}(=\d{4})?$/.test(zip);
}

// Display Alert Message

export function showAlert(message, className) {
  // Create div
  const div = document.createElement("div");
  // Add Classes
  div.className = `alert alert-${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // Get div col element
  const col = document.querySelector(".col-md-8");
  // Get form element
  const form = document.querySelector("#pet-form");
  // insert alert
  col.insertBefore(div, form);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}
