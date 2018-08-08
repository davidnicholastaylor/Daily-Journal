const saveJournalEntry = (entry) => {
    return fetch("http://localhost:8088/entries?_order=desc&_sort=date", {
        method: "POST",
        headers: {
            "Content-Type": "application.json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
}

module.exports = saveJournalEntry