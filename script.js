const container = document.querySelector('.container');

for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor();
        setTimeout(() => {
            square.style.backgroundColor = 'rgb(29, 29, 29)'; // Updated to match the initial color
        }, 1000);
    });
    container.appendChild(square);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

() => {
    cy.visit(baseUrl + "/main.html"); // Ensure this URL is correct
    cy.get(".container").should("exist");
    cy.get(".container").find(".square").eq(799).should("exist");
    cy.get(".square").first().should("have.css", "background-color", "rgb(29, 29, 29)");
    cy.get(".square").first().trigger("mouseover");
    cy.get(".square").first().should("not.have.css", "background-color", "rgb(29, 29, 29)");
    cy.get(".square").first().trigger("mouseout");
    cy.get(".square").first().should("have.css", "background-color", "rgb(29, 29, 29)");
}
