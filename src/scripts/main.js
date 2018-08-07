const FormManager = require("./JournalForm")
const saveJournalEntry = require("./DataManager")

//Rander journal entry form
document.querySelector("#journalForm").innerHTML = FormManager.renderEntryForm()

//Add entry form
document.querySelector("#saveEntryButton").addEventListener("click", () => {
    // Get form field values
    // Create object from them
    // Add timestamp
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date.now()
    }

    // POST to API
    saveJournalEntry(newEntry).then(() => {
        // Clear the form fields
        FormManager.clearForm()
        // Put HTML representation on the DOM
    })
})