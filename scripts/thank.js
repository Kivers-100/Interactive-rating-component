const number = JSON.parse(localStorage.getItem('number'));

    if (number) {
      document.querySelector('.selection-paragraph').innerHTML = `
      You selected
      ${number}
      out of 5
      `;

    }

