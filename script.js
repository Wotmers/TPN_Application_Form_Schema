function toggleFields() {
  const type = document.getElementById("applicantType").value;
  const dealerFields = document.getElementById("dealerFields");
  dealerFields.style.display = (type === "dealer") ? "block" : "none";
}