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

const { logRequest } = require('../botmetrics');

function getNumberOfWeek() {
  // const today = new Date();
  const today = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
  // const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const firstDayOfYear = new Date("1/21/2019, 12:00:00 AM");
  const pastDaysOfYear = Math.floor((today - firstDayOfYear) / 86400000);
  // return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)-1;
  return Math.floor(pastDaysOfYear/7);
}

function getTimeStatus(){
  const today = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
  const H = today.getHours();
  if(H < 9){
    return 0;
  }else if((H >= 9) && (H < 14)){
    return 1;  
  }else if((H >= 14) && (H < 21)){
    return 2;
  }else{
    return 3;
  }
}

function getNextDayMenu(){
  const today = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
  const noOfWeeks = getNumberOfWeek();
  if(noOfWeeks %2 == 0){
    switch(today.getDay()){
      case 0:
        return MONDAY_MENU_ODD.menu;
        break;
      case 1:
        return TUESDAY_MENU_EVEN.menu;
        break;
      case 2:
        return WEDNESDAY_MENU_EVEN.menu;
        break;
      case 3:
        return THURSDAY_MENU_EVEN.menu;
        break;
      case 4:
        return FRIDAY_MENU_EVEN.menu;
        break;
      case 5:
        return SATURDAY_MENU_EVEN.menu;
        break;
      case 6:
        return SUNDAY_MENU_EVEN.menu;
        break;   
    }
  }else{
    switch(today.getDay()){
      case 0:
        return MONDAY_MENU_EVEN.menu;
        break;
      case 1:
        return TUESDAY_MENU_ODD.menu;
        break;
      case 2:
        return WEDNESDAY_MENU_ODD.menu;
        break;
      case 3:
        return THURSDAY_MENU_ODD.menu;
        break;
      case 4:
        return FRIDAY_MENU_ODD.menu;
        break;
      case 5:
        return SATURDAY_MENU_ODD.menu;
        break;
      case 6:
        return SUNDAY_MENU_ODD.menu;
        break;   
    }
  }
}

function getPresentDayMenu(){
  const today = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
  const noOfWeeks = getNumberOfWeek();
  if(noOfWeeks %2 == 0){
    switch(today.getDay()){
      case 0:
        return SUNDAY_MENU_EVEN.menu;
        break;
      case 1:
        return MONDAY_MENU_EVEN.menu;
        break;
      case 2:
        return TUESDAY_MENU_EVEN.menu;
        break;
      case 3:
        return WEDNESDAY_MENU_EVEN.menu;
        break;
      case 4:
        return THURSDAY_MENU_EVEN.menu;
        break;
      case 5:
        return FRIDAY_MENU_EVEN.menu;
        break;
      case 6:
        return SATURDAY_MENU_EVEN.menu;
        break;   
    }
  }else{
    switch(today.getDay()){
      case 0:
        return SUNDAY_MENU_ODD.menu;
        break;
      case 1:
        return MONDAY_MENU_ODD.menu;
        break;
      case 2:
        return TUESDAY_MENU_ODD.menu;
        break;
      case 3:
        return WEDNESDAY_MENU_ODD.menu;
        break;
      case 4:
        return THURSDAY_MENU_ODD.menu;
        break;
      case 5:
        return FRIDAY_MENU_ODD.menu;
        break;
      case 6:
        return SATURDAY_MENU_ODD.menu;
        break;   
    }
  }
}

var getMenu = (meal , chatId) => {
  if(!(meal === 'Breakfast' || meal === 'Lunch' || meal == 'Dinner')){
    return 'Please Select a Valid Meal...';
  }
  logRequest(meal , chatId);
  var currentMenu = getPresentDayMenu();
  var nextDayMenu = getNextDayMenu();
  switch(getTimeStatus()){
    case 0:
      break;
    case 1:
      currentMenu.breakfast = nextDayMenu.breakfast;
      break;
    case 2:
      currentMenu.breakfast = nextDayMenu.breakfast;
      currentMenu.lunch = nextDayMenu.lunch;
      break;
    case 3:
      currentMenu.breakfast = nextDayMenu.breakfast;
      currentMenu.lunch = nextDayMenu.lunch;
      currentMenu.dinner = nextDayMenu.dinner;
      break;
  }
  return currentMenu[meal.toLowerCase()];
};

module.exports = {
  getMenu
}