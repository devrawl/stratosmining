function CountUp(initDate, id) {
  this.beginDate = new Date(initDate);
  this.countainer = document.getElementById(id);
  this.numOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  this.borrowed = 0, this.years = 0, this.months = 0, this.days = 0;
  this.hours = 0, this.minutes = 0, this.seconds = 0;
  this.milliseconds = 0;
  this.updateNumOfDays();
  this.updateCounter();
}

CountUp.prototype.updateNumOfDays = function() {
  var dateNow = new Date();
  var currYear = dateNow.getFullYear();
  if ((currYear % 4 == 0 && currYear % 100 != 0) || currYear % 400 == 0) {
    this.numOfDays[1] = 29;
  }
  var self = this;
  setTimeout(function() {
    self.updateNumOfDays();
  }, (new Date((currYear + 1), 1, 2) - dateNow));
}
CountUp.prototype.datePartDiff = function(then, now, MAX) {
  var diff = now - then - this.borrowed;
  this.borrowed = 0;
  if (diff > -1) return diff;
  this.borrowed = 1;
  return (MAX + diff);
}

CountUp.prototype.calculate = function() {
  var currDate = new Date();
  var prevDate = this.beginDate;
  this.milliseconds = this.datePartDiff(prevDate.getMilliseconds(), currDate.getMilliseconds(), 1000);
  this.seconds = this.datePartDiff(prevDate.getSeconds(), currDate.getSeconds(), 60);
  this.minutes = this.datePartDiff(prevDate.getMinutes(), currDate.getMinutes(), 60);
  this.hours = this.datePartDiff(prevDate.getHours(), currDate.getHours(), 24);
  this.days = this.datePartDiff(prevDate.getDate(), currDate.getDate(), this.numOfDays[currDate.getMonth()]);
  this.months = this.datePartDiff(prevDate.getMonth(), currDate.getMonth(), 12);
  this.years = this.datePartDiff(prevDate.getFullYear(), currDate.getFullYear(), 0);
}

CountUp.prototype.addLeadingZero = function(value) {
  return value < 10 ? ("0" + value) : value;
}

CountUp.prototype.addLeadingZeroMillisecond = function(value) {
  if (value < 10) return ("00" + value);
  else if (value < 100) return ("0" + value);
  else return value;
}
CountUp.prototype.formatTime = function() {
  this.milliseconds = this.addLeadingZeroMillisecond(this.milliseconds);
  this.seconds = this.addLeadingZero(this.seconds);
  this.minutes = this.addLeadingZero(this.minutes);
  this.hours = this.addLeadingZero(this.hours);
}

CountUp.prototype.updateCounter = function() {
  this.calculate();
  this.formatTime();
  this.countainer.innerHTML =
 //   "<a class='years'>" + this.years + " " + (this.years == 1 ? "year, " : "years, ") + "</a>" +
 //   "<a class='months'>" + this.months + " " + (this.months == 1 ? "month, " : "months, ") + "</a>" +
    "<a class='days'>" + this.days + "  " + (this.days == 1 ? "day, " : "days, ") + "</a>" +
    "<a class='hours'>" + this.hours + " " + (this.hours == 1 ? "hour, " : "hours, ") + "</a>" +
    "<a class='minutes'>" + this.minutes + " " + (this.minutes == 1 ? "minute, " : "minutes, ") + "</a>" +
    "<a class='seconds'>" + this.seconds + " " + (this.seconds == 1 ? "second, " : "seconds ") + "</a>";
  var self = this;
  setTimeout(function() {
    self.updateCounter();
  }, 1);
}

window.onload = function() {
  new CountUp('September 21, 2023 6:00:00', 'counter');
}
