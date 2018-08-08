const FormManager = require("./JournalForm")
const dataFunctions = require("./DataManager")

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
    dataFunctions.saveJournalEntry(newEntry).then(() => {

        // Clear the form fields
        FormManager.clearForm()

        // Put HTML representation on the DOM
        let output = `<h2>${newEntry.title}</h2> <p>${newEntry.content}</p> <button id="delete">Delete Post</button>`
        document.querySelector("#journalPost").innerHTML += output

        // Add delete listener/function to button
        document.querySelector("#delete").addEventListener("click", dataFunctions.deleteJournalEntry(output).then((response) => {
            return response
        })
        )
    })
})