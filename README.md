# VPRdex

### Installation
  Installing dependencies and environment can be done through the Android Development Studio and its provided SDK Manager, but this guide will assume you are startinhg on a fresh Windows Machine. Instructions are brief and more or less universal so you should be able to install on unix-based systems, if you know what you are doing (and you should if you're running one). Remember, your are expected to troubleshoot your own problems on this project and Google is your friend. 
  
 - **If you encounter an issue, once solved, please add it to the troubleshooting section or update the instructions according!**
  
##### Environment and Team Server Setup
1. Download and install VS Code 2017 (VC2017): https://code.visualstudio.com/download
2. Download and install NodeJS: https://nodejs.org/en/
3. Download and install Git: https://git-scm.com/downloads
4. In VC2017 terminal: "npm install -g nativescript"
5. Open a Command Prompt somewhere that doesn't require admin privileges (Users\<Username>\Documents for example), or use the VC2017 Terminal to cd to that folder
7. In that terminal: "git clone <This Repo's Copy Link>"
8. Add the created folder to your VC2017 Workspace
##### Debugging Setup:
1. Download and Install Android Studio: https://developer.android.com/studio/#downloads
1.1 From inside Android Studio, open the SDK Manager
1.2 Click the SDK Tools tab and download: 
-- Android SDK Build-Tools, Android Emulator
-- Android SDK Platform-Tools
-- Android SDK Tools
-- Intel x86 Emulator Accelerator (if  available).
2. In VC2017 terminal: "npm install"
3. In VC2017 terminal: "tns init"
4. In VC2017 terminal: "tns debug android"
