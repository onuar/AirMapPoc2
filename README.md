# AirMapPoc2
Fuck the red borders of react-native-maps by AirBnb

Basic sample of react-native-maps

When installing, I followed this instructions:
https://gist.github.com/heron2014/e60fa003e9b117ce80d56bb1d5bfe9e0


- react-native init YourProjectName
- cd YourProjectName
- npm install react-native-maps --save
- use "react-native-maps": ">=0.12.4" instead of "react-native-maps": "^0.12.4" in package.json file
(note@11092017: I have tried "^0.16.3" version and it looks that is solved. I think you can skip this step.)
- npm update
- react-native link
- cd ios
- touch Podfile
- add [this](https://raw.githubusercontent.com/onuar/AirMapPoc2/master/ios/Podfile) to Podfile 
- Don't forget to change this line: target 'your-project-name' do
- pod install (required cocoapods)
- cd ..
- add MapView to your code
- react-native run-ios