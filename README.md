# VPRdex
### Installation
Follow the instructions at the link provided, and if you don't understand a step, try googling it.
https://docs.nativescript.org/start/ns-setup-win#system-requirements
  
##### Environment and Team Server Setup
1. Download and install VS Code 2017 (VC2017), default settings (unless you know that you need to change a specific setting): https://code.visualstudio.com/download
- Close or do not open VSCode yet

2. Download and install NodeJS (LTS if possible), default settings: https://nodejs.org/en/

3. Download and install Git, default settings: https://git-scm.com/downloads

- Make sure to finish installing VSCode first. If the next button at the "default editor" screen is greyed out, try restarting the git installer.

4. Download and install the Java Development Kit (JDK), default settings: https://www.oracle.com/technetwork/java/javase/downloads/index.html

5. Open the start menu and type "Environment Variables"

6. Click the first entry, and System Properties window should open. At the bottom of the window click "Environment Variables..."

7. In the Environment Variables window, under System Settings, click "New..."

8. For Variable Name, enter: "ANDROID_HOME" 

5. Open VC2017 and then in its terminal type: "npm install -g nativescript"
- If you do not see the terminal window, you can navigate to it by clicking (on the top navigation bar) View and then Terminal (or simply by pressing the hotkey CTRL + \`)

9. Then type into terminal: "git clone '\[This Repo's Copy Link]'"

 - The link can be found by going to this repo's homepage and clicking the green "Clone or Download" link in the top right and copying that link
  - Replace "\[This Repo's Copy Link]" completely with the repo link, even the brackets, but leave the single quotes
  
10. Add the created folder to your VC2017 Workspace

##### Debugging Setup:
1. Download and Install Android Studio, default settings: https://developer.android.com/studio/#downloads

2. From inside Android Studio, open the SDK Manager, found from the Welcome screen by going to the bottom-right, and clicking Configure > SDK Manager

3. Click the SDK Tools tab and download: 
- Android SDK Build-Tools, Android Emulator
- Android SDK Platform-Tools
- Android SDK Tools
- Intel x86 Emulator Accelerator (if  available).
- Android 5.1 (API Level 22)

- MAKE SURE YOU HIT APPLY, THEY MIGHT BE CHECKED BY DEFAULT BUT NOT DOWNLOADED
- Leave the SDK Manager window open, you will need to copy the Android SDK Location address

4. Download and install the Java Development Kit (JDK), default settings: https://www.oracle.com/technetwork/java/javase/downloads/index.html

5. Open the start menu and type "Environment Variables"

6. Click the first entry, and System Properties window should open. At the bottom of the window click "Environment Variables..."

7. In the Environment Variables window, under System Settings, click "New..."

8. For Variable Name, enter: "ANDROID_HOME", for Variable Location, copy and paste the Android SDK Location address from the SDK Manager, it should look something like: "C:\Users\Adam\AppData\Local\Android\Sdk"

9. Do the same for "JAVA_HOME" and "C:\Program Files (x86)\Java\jdk1.8.0_181", but change the jdk version to whichever you installed

10. Under System Variables, double-click "Path" then click "Edit"

11. In the "Edit Environment Variable" window that just popped up, click "New" and type "%ANDROID_HOME%\tools", then enter

12. Do the same for "%ANDROID_HOME%\platform-tools" and "%JAVA_HOME%\bin"

2. In VC2017 terminal: "npm install"

3. In VC2017 terminal: "tns init"

4. In VC2017 terminal: "tns debug android"
