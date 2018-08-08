const dataFunctions = {

saveJournalEntry(entry) {
    return fetch("http://localhost:8088/entries?_order=desc&_sort=date", {
        method: "POST",
        headers: {
            "Content-Type": "application.json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
},
deleteJournalEntry() {
    return fetch("http://localhost:8088/entries", {
        method: "DELETE",
    })
    .then(response => response.json())
}
}

module.exports = dataFunctions