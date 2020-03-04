# Discord-Phone-Linking
Linking your android phone's texts and calls in with discord.

# Support
Currently this project only support android phones with a valid sms.
This project sends data to a webhook containing the phone number of the message, and the message content. Support will be added for detecting incoming calls.

# Future Plans
Support for IOS devices?
 - It's expensive to put apps on IOS
Support for Discord Bots insted of webhooks.
Actually detecting calls and sending it to the server
# Installation
**DOESNT WORK SOURCE CODE OF APP NEEDS TO BE EDITED MANUALLY**
 - Install node.js
 - Modify server.js to have your webhook on the line ``const Hook = new webhook.Webhook("WEBHOOK URL HERE")``
 - run ``npm install -g qckwinsvc`` in CMD or Powershell
 - run ``Set-ExecutionPolicy RemoteSigned`` in an administrative CMD or Powershell
 - run ``qckwinsvc --name "DiscordPhoneLinker" --description "Links your phone to Discord" --script "YOUR SERVER LOCATION" --startImmediately`` and setup with the following data
 - YOUR SEVER LOCATION needs to be replaced with the path to where you downloaded the file ex. (C:\Users\East_Arctica\Downloads\Discord-Phone-Linker\Web\server.js) Must be server.js not index.js
 - Your done! thats all you need to do to set it up (might make a video tutorial)
