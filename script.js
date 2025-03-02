//your JS code here. If required.

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submit");
    const bookList = document.getElementById("book-list");

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value.trim();
        const author = document.getElementById("author").value.trim();
        const isbn = document.getElementById("isbn").value.trim();

        if (title === "" || author === "" || isbn === "") {
            alert("Please fill in all fields");
            return;
        }

        addBookToList(title, author, isbn);
        clearFields();
    });

    function addBookToList(title, author, isbn) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Clear</button></td>
        `;

        bookList.appendChild(row);
    }

    function clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }

    bookList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.parentElement.remove();
        }
    });
});

