var requirements = [
    {
      regex: /[a-z]/,
      message: "Password must contain at least one lowercase letter."
    },
    {
      regex: /[A-Z]/,
      message: "Password must contain at least one uppercase letter."
    },
    {
      regex: /\d/,
      message: "Password must contain a number."
    },
    {
      regex: /.*(?=.*[bB]atman).*/,
      message: 'Password must contain the word "batman".'
    },
    {
      regex: /.*(pepsi|starbucks|mcdonalds|hbo).*/,
      message: "Password must contain one of the sponsors: Pepsi, Starbucks, McDonald's, HBO."
    }
  ];

  var currentRequirement = 0;

  function showRequirement() {
    var requirementsElement = document.getElementById('requirements');
    requirementsElement.textContent = requirements[currentRequirement].message;
  }

  function checkPassword() {
    var password = document.getElementById('password-input').value;

    if (requirements[currentRequirement].regex.test(password)) {
      if (currentRequirement === requirements.length - 1) {
        window.location.href = '404.html';
      } else {
        currentRequirement++;
        showRequirement();
      }
    }
  }
  
  function initializePage() {
    currentRequirement = 0;
    showRequirement();
  }