function TitleStr(str) {
    if (!str) return "слово не введено";
    return str[0].toUpperCase() + str.slice(1);
  }

 console.log(TitleStr('с трока'))