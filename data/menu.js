const MONDAY_MENU_ODD = require('./odd_week/monday');
const TUESDAY_MENU_ODD = require('./odd_week/tuesday');
const WEDNESDAY_MENU_ODD = require('./odd_week/wednesday');
const THURSDAY_MENU_ODD = require('./odd_week/thursday');
const FRIDAY_MENU_ODD = require('./odd_week/friday');
const SATURDAY_MENU_ODD = require('./odd_week/saturday');
const SUNDAY_MENU_ODD = require('./odd_week/sunday');

const MONDAY_MENU_EVEN = require('./even_week/monday');
const TUESDAY_MENU_EVEN = require('./even_week/tuesday');
const WEDNESDAY_MENU_EVEN = require('./even_week/wednesday');
const THURSDAY_MENU_EVEN = require('./even_week/thursday');
const FRIDAY_MENU_EVEN = require('./even_week/friday');
const SATURDAY_MENU_EVEN = require('./even_week/saturday');
const SUNDAY_MENU_EVEN = require('./even_week/sunday');

function getNumberOfWeek() {
  // const today = new Date();
  const today = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
  // const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const firstDayOfYear = new Date("1/21/2019, 12:00:00 AM");
  const pastDaysOfYear = Math.floor((today - firstDayOfYear) / 86400000);
  // return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)-1;
  return Math.floor(pastDaysOfYear/7);
}
var getMenu = (meal) => {
  if(!(meal === 'Breakfast' || meal === 'Lunch' || meal == 'Dinner')){
    return 'Please Select a Valid Meal...';
  }
  const today = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
  const noOfWeeks = getNumberOfWeek();
  if(noOfWeeks %2 == 0){
    switch(today.getDay()){
      case 0:
        return SUNDAY_MENU_EVEN.menu[meal.toLowerCase()];
        break;
      case 1:
        return MONDAY_MENU_EVEN.menu[meal.toLowerCase()];
        break;
      case 2:
        return TUESDAY_MENU_EVEN.menu[meal.toLowerCase()];
        break;
      case 3:
        return WEDNESDAY_MENU_EVEN.menu[meal.toLowerCase()];
        break;
      case 4:
        return THURSDAY_MENU_EVEN.menu[meal.toLowerCase()];
        break;
      case 5:
        return FRIDAY_MENU_EVEN.menu[meal.toLowerCase()];
        break;
      case 6:
        return SATURDAY_MENU_EVEN.menu[meal.toLowerCase()];
        break;   
    }
  }else{
    switch(today.getDay()){
      case 0:
        return SUNDAY_MENU_ODD.menu[meal.toLowerCase()];
        break;
      case 1:
        return MONDAY_MENU_ODD.menu[meal.toLowerCase()];
        break;
      case 2:
        return TUESDAY_MENU_ODD.menu[meal.toLowerCase()];
        break;
      case 3:
        return WEDNESDAY_MENU_ODD.menu[meal.toLowerCase()];
        break;
      case 4:
        return THURSDAY_MENU_ODD.menu[meal.toLowerCase()];
        break;
      case 5:
        return FRIDAY_MENU_ODD.menu[meal.toLowerCase()];
        break;
      case 6:
        return SATURDAY_MENU_ODD.menu[meal.toLowerCase()];
        break;   
    }
  }
};

module.exports = {
  getMenu
}