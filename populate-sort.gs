// Written by JPG
// https://github.com/jograca/comradelongbridge
// These 2 javascript functions are run in Google Sheets (.gs)
// View README on github for more information on how they function in the overall workflow

function onEdit() {

  // When a new row is added to the Worksheet "Data from IFTTT"
  // Add values for columns E through J
  // by performing a copy from the cells in E2 - J2
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data from IFTTT");     
  var lastRow = sheet.getLastRow();  
  var newRow = ("E" + lastRow + ":" + "J" + lastRow);
  var originRange = sheet.getRange("E2:J2");
  var targetRange = sheet.getRange(newRow);
  
  // Populate! Log a statement --
  Logger.log("Setting new value for " + newRow + " ...");
  originRange.copyTo(targetRange);

}  

function sortSelection() { 
  
  // When this function is run, do 2 things:
  // 1) Sort the Overall Sheet "All-Time Leaderboard"
  // 2) Sort the Weekly Sheet. Sheet name example: "Week of Monday [Month (Short)] [Date]"
  
  // 1) Sort the Overall Sheet
  Logger.log("Sorting the Overall Sheet");
  
  var overallSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("All-Time Leaderboard");
  overallSheet.sort(2);
  
  // TEMPORARY - REMOVE after this week
  var Feb27Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Week of Monday Feb 27");
  Feb27Sheet.sort(2);
  
  // 2) Sort the Weekly Sheet
  Logger.log("Sorting the Weekly Sheet");
  
  var day = new Date();
  var dayOfWeek = day.getDay().toString();
  var date = ((day.getDate()).toString());
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = monthNames[day.getMonth()];
  
  if(dayOfWeek = 0){
  
    var monday = ("Monday"); 
    
    Logger.log("Today is Monday! Creating some new code for " + monday + " " + month + " " + date);
      
    var newDate = ("Week of Monday " + month + " " + date);
    var weekSheet = ("SpreadsheetApp.getActiveSpreadsheet().getSheetByName(" + "\"" + newDate + "\");");
       
    Logger.log(newDate);
    Logger.log(weekSheet);
    
    weekSheet.sort(2);  
  }
  
  else{
    Logger.log("Today is NOT Sunday. If it is you have an ERROR!");
  }
 
}     
