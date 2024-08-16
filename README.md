# Full-Stack Developer Bootcamp Module 11 - Challenge: Note Taker

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Generator](#generator)
- [Badge](#badge)
- [Credit and Source Code](#credits-and-code-source)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [GitHub Repository Location (HTTPS)](#github-repository-location-https)
- [GitHub Pages Location](#github-pages-location)
- [Application Screenshots](#application-screenshots) 


## Description

The Note Taker is a browser-based application that permits Users to enter and store individual Notes, accessible to all Users of the site. As developed, the Notes are only accessible through a local instance, specific to each accessing computer.

Notes are held as JSON data within the App directory and, consequently, not currently accessible through the Web.

The Note Taker source code is published on GitHub, and may be cloned to individual User computers to instantiate local versions.

Notes are entered through a dedicated  Notes page, which both allows new Note creation and aggregates and presents saved Notes.

The Note Taker features a sequential, timeline-based view of Notes.

Individual Notes may be viewed from the Notes page, and deleted from local (app) storage.

The app utlizes an HTML-based Form to ingest User Input, Nodejs Modules (Express, FS) to save (Post) new Notes to a local (App directory) JSON file, and HTML dynamically update the Notes Page with new Notes, and CSS to style to site. 

Because Notes are stored within a local (App Directory) JSON file, Notes will persist across User sessions on individual, hosting computers and will be visible to all Users of the local App instance on individual computers.


## Installation

The Note Taker source code may be downloaded from its GitHub repository, and run directly by a hosting computer.

No Installation of the Note Taker is required; the app is fully browser-based, accessed through any modern browser that supports JavaScript (Nodejs).

However, local computers must hold an installation of Node.js in order the run the Note Taker application.


## Usage

The Note Taker is intended for use by one or more Users to record Notes that will be held locally, and persist across multiple sessions. 

All Users of the Note Taker on a local computer will have full visibility to all Users' Notes.


## Credits and Code Source

Database-management Code, within File, db.js, was substantively outlined and contributed to by Course Instructor, who provided recommentation to use Class structure and Class Methods to manage CRUD operations.

Additional Code, where referenced from a third-party Source, is noted in Comments accompanying the relevant Code lines.


## License

Copyright <YEAR> <COPYRIGHT Chris Milazzo>


MIT License

Copyright (c) 2024 MeanderingBrook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

N / A


## Features

N / A


## How to Contribute

N / A


## Tests

Return value and generated content testing and data evaluation, see archive.js ('archive' Folder)

`console.log` output of specification data specific to User requirements; see app.js, apiRoutes.js, pageRoutes.js, db.js.


## GitHub Repository Location (HTTPS)

https://github.com/MeanderingBrook/11_Challenge_Note-Taker.git


## Heroku App Deployment

https://note-taker-jsmythe-43e9cb7d5a55.herokuapp.com


## Application Screenshots

![Note Taker: Nodejs App Server Initialization - Screenshot 01](./public/assets/images/Note-Taker_Nodejs-App_Screenshot-01_Server-Initialization.png?raw=true "Note Taker: Nodejs App Server Initialization")

![Note Taker: Nodejs App Homepage - Screenshot 02](./public/assets/images/Note-Taker_Nodejs-App_Screenshot-02_Homepage.png?raw=true "Note Taker: Nodejs App Homepage")

![Note Taker: Nodejs App Notes Page - Screenshot 03](./public/assets/images/Note-Taker_Nodejs-App_Screenshot-03_Notes-Page.png?raw=true "Note Taker: Nodejs App Notes Page")

![Note Taker: Nodejs App Create Note - Screenshot 04](./public/assets/images/Note-Taker_Nodejs-App_Screenshot-04_Create-Note.png?raw=true "Note Taker: Nodejs App Create Note")

![Note Taker: Nodejs App New Note Saved](./public/assets/images/Note-Taker_Nodejs-App_Screenshot-05_New-Note-Saved.png?raw-true "Note Taker: Nodejs App New Note Saved")