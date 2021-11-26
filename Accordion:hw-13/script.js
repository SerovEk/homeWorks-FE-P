const newAccordion = new Accordion(document.getElementById("accordion"));
newAccordion.init();

newAccordion.openByIndex(0);
newAccordion.addElement("Edditional Block", "<p>Your text..........</p>");

setTimeout(() => {
  newAccordion.openAll();
}, 2000);

// setTimeout(() => {
//   newAccordion.closeAll();
// }, 2000);