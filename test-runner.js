const newman = require("newman");
const moment = require("moment");

let now = moment().format("DD-MM-YYYY_hh-mm-ss");

let testname = `report-${now}.html`;

newman.run({
    collection: require("./postman-script.postman_collection.json"),
    environment: require("./postman-script.postman_environment.json"),
    reporters: ["cli", "htmlextra"],
    reporter: {
        htmlextra: {
            title: "API Test Report",
            export: `./report/${testname}`,
            logs: true
        }
    }
});

//Below runner using for custom properties and data-driven. Support csv or json file
//Call iteration to get data in pm script
// newman.run({
//     collection: require("./postman-script.postman_collection.json"),
//     environment: require("./postman-script.postman_environment.json"),
//     reporters: ["cli", "htmlextra"],
//     iterationCount : 2,
//     iterationData : require("./"),
//     reporter: {
//         htmlextra: {
//              // export: './report.html',
//             // template: './template.hbs'
//             // logs: true,
//             // showOnlyFails: true,
//             // noSyntaxHighlighting: true,
//             // testPaging: true,
//             // browserTitle: "My Newman report",
//             // title: "My Newman Report",
//             // titleSize: 4,
//             // omitHeaders: true,
//             // skipHeaders: "Authorization",
//             // omitRequestBodies: true,
//             // omitResponseBodies: true,
//             // hideRequestBody: ["Login"],
//             // hideResponseBody: ["Auth Request"],
//             // showEnvironmentData: true,
//             // skipEnvironmentVars: ["API_KEY"],
//             // showGlobalData: true,
//             // skipGlobalVars: ["API_TOKEN"],
//             // skipSensitiveData: true,
//             // showMarkdownLinks: true,
//             // showFolderDescription: true,
//             // timezone: "Australia/Sydney"
//         }
//     }
// });

