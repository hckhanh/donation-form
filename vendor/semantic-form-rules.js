$.fn.form.settings.rules.positive = function (number) {
  return number > 0;
};

$.fn.form.settings.rules.isNaN = function (string) {
  return isNaN(string);
};
