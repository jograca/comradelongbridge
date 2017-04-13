// https://github.com/jograca/comradelongbridge
// These 2 javascript functions are run in Google Apps Script (.gs)
// View the README.md for more information on how they function in the overall workflow

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

  // 2) Weekly Sheet Sort
  Logger.log("Sorting the Weekly Sheet");

  var Mar26Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Week of Sunday Mar 26");
  Mar26Sheet.sort(2);

  var Apr2Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Week of Sunday Apr 2");
  Apr2Sheet.sort(2);

  var Apr9Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Week of Sunday Apr 9");
  Apr9Sheet.sort(2);
}     
