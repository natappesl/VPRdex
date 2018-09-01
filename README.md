# VPRdex

### Installation
  Installing dependencies and environment can be done through the Android Development Studio and its provided SDK Manager, but this guide will assume you are startinhg on a fresh Windows Machine. Instructions are brief and more or less universal so you should be able to install on unix-based systems, if you know what you are doing (and you should if you're running one). Remember, your are expected to troubleshoot your own problems on this project and Google is your friend. 
  
 - **If you encounter an issue, once solved, please add it to the troubleshooting section or update the instructions according!**
  
##### Environment and Team Server Setup
1. Download and install VS Code 2017 (VC2017), default settings: https://code.visualstudio.com/download
2. Download and install NodeJS (LTS if possible), default settings: https://nodejs.org/en/
3. Download and install Git, default settings: https://git-scm.com/downloads
- Make sure to finish installing VSCode first. If the next button at the "default editor screen is greyed out, try restarting the git installer.
4. Restart VC2017 and then in its terminal type: "npm install -g nativescript"
- The terminal can be found on the bottom portion of the welcome screen, there should be a list of tabs saying: "PROBLEMS  OUTPUT  TERMINAL"
5. Open a Command Prompt
6. Choose a location that the local App files will be stored, it needs to be somewhere that doesn't require admin privileges 
- Your Documents folder is a good choice: "C:\Users\\[Your Username]\Documents" , replacing the "[Your Username]" with your username
- The default Command Prompt window should open into your "C:\Users\[Your Username]\" directory, which is shown in the input line.
 
7. Copy the local address of that location, it should look something like: "C:\Users\\[Your Username]\Documents"

8. In the command prompt, type: "cd \[The chosen location]"
  
9. Then type: "git clone <This Repo's Copy Link>"
 - The link can be found by going to this repo's homepage and clicking the green "Clone or Download" link in the top right and copying that link
  - Replace "\[This Repo's Copy Link]" completely with the repo link, even the brackets
  
10. Add the created folder to your VC2017 Workspace
##### Debugging Setup:
1. Download and Install Android Studio, default settings: https://developer.android.com/studio/#downloads
1.1. From inside Android Studio, open the SDK Manager
1.2. Click the SDK Tools tab and download: 
- Android SDK Build-Tools, Android Emulator
- Android SDK Platform-Tools
- Android SDK Tools
- Intel x86 Emulator Accelerator (if  available).
2. In VC2017 terminal: "npm install"
3. In VC2017 terminal: "tns init"
4. In VC2017 terminal: "tns debug android"
