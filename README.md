# mmir-plugin-encoder-amr

Cordova plugin for the MMIR framework that adds a JavaScript based AMR encoder.

Uses AMR.js (MIT license), see https://github.com/jpemartins/amr.js
[modifications] compatability for use in WebWorkers: export to global as >window< or >self< (instead of >this<)
