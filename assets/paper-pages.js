function copyPaperBibtex(button) {
  var citation = button.closest('.paper-citation').querySelector('.paper-bibtex');
  if (!citation) return;
  var text = citation.textContent.trim();
  function copied() {
    button.textContent = "Copied!";
    window.setTimeout(function () { button.textContent = "Copy"; }, 1200);
  }
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(copied);
  } else {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    copied();
  }
}