# BaculusPatching
This respository is for helping patch problems detected in the main Baculus Repository

Hello, Professor Tinapple! Thank you for lending your assistance and expertise in Max programming


Open up the project to take a look, or read on to learn a little more about the project

The Project File contains 4 files. The first of which, 'TextFileRecordData(JUSTDMP)' holds the playback device and the recording device

The second holds just the recording device only and is named 'RecorderOnly(JUSTDMP)'

The third holds the interface for connecting accelerometers to Max, including GyrOSC, called 'AccelData'

-- ** The fourth is a version of TextFileRecordData(JUSTDMP) configured to work with receiving GyrOSC from AccelData. ** -- Is not live yet. However, in 'AccelData', there is an existing GyrOSC object which can be used to recieve data from GyrOSC once you set the in the UDP object inside of the GyrOSC patcher. There is also a toggle which allows you to send the data to the recording object in TextFileRecordData(JUSTDMP). However, the sprintf file is not configured for that exact input configuration currently.



**Instructions for uploading videos (large video files) **

Use Git Large File Storage, download for Windows: https://git-lfs.github.com/
And look here for instructions on Mac: https://www.atlassian.com/git/tutorials/git-lfs#installing-git-lfs

Follow the instructions to install Git LFS

Currently supported movie files: '.mov', '.mp3', '.mp4'
