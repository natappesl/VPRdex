import * as fs from "tns-core-modules/file-system";
var currentApp = fs.knownFolders.currentApp().path;

export const SPECIES_FOLDER_PATH = fs.path.join(currentApp, "mock_data/json/");

