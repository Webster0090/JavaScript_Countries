class Country {
    constructor(name, lang, greeting, colors) {
      this.name = name;
      this.lang = lang;
      this.greeting = greeting;
      this.colors = colors;
    }
    setColors() {}
  }
  var usa = new Country("USA", "Murican", "Hello World", [
    "red",
    "white",
    "blue"
  ]);
  var mexico = new Country("Mexico", "Spanish", "Hola Mundo", [
    "red",
    "white",
    "green"
  ]);
  var algeria = new Country("Algeria", "Arabic", "marhabaan bialealam", [
    "green",
    "white",
    "red"
  ]);
  var russia = new Country("Mother Russia", "Russian", "Privet, mir", [
    "white",
    "red",
    "blue"
  ]);
  var jamaica = new Country(
    "Jamaica",
    "Jamaican Patois",
    "Oy man, Hello To Da World",
    ["green", "black", "yellow"]
  );
  
  function SwitchCountry() {
    var input = $("#CountryList option:selected").val();
    var country;
  
    if (input === "USA") {
      //set country to usa
      country = usa;
    } else if (input === "Mexico") {
      country = mexico;
    } else if (input === "Algeria") {
      country = algeria;
    } else if (input === "Russia") {
      country = russia;
    } else if (input === "Jamaica") {
      country = jamaica;
    }
  
    $("#Color1").css("background-color", country.colors[0]);
    $("#Color2").css("background-color", country.colors[1]);
    $("#Color3").css("background-color", country.colors[2]);
  
    $("#CountryName").text(country.name);
    $("#OfficialLanguage").text(country.lang);
    $("#HelloWorld").text(country.greeting);
  }