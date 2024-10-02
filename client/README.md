### Branches & Commits
Please make a branch off of  "master" and do not push any commits to "master".
The naming style Julie and I have been using for branches are dev-name-component (i.e. "dev-rebekah" or "dev-rebekah-header").


### Directory System
Please add all components and accompanying CSS files under the "src/Components" folder with a capital letter. You may also add nested components here.
Example: "src/Components/Header/Header.js" or "src/Components/Reviews/Reviews-Slideshow/Reviews-Slideshow.module.css"

For shared Services, follow the same structure.
Images, font files, icons, and similar items will be stored in the "src/assets" folder.
Please keep the directory clean!


### Default Styles
Currently, the default font for all elements is set to "Montserrat".
Bootstrap is currently running for all other items.


### Easy Responsiveness
I personally recommend using "vw" units as much as possible when setting font, width, height , and other sizes, and avoiding "px", "em", and "rem" units entirely. "vw" units will allow for the best responsiveness across all screen sizes, since they change size based on the width of the user's screen.
Example: "font-size: 2vw"

For reference, 1vw = 1% of screen width. You can also use decimal values, like 2.4vw to get more precise.

Percentages are also ok when setting width values. Example: "width: 40%"


### Root colors and fonts
Root css variables are available for colors and fonts:
  --color-primary: #449696;
  --color-secondary: #5A6F8E;
  --color-tertiary: #C4C0C0;

  --font-color-primary: #FF3C03;
  --font-color-secondary: #5A6F8E;
  --font-color-tertiary: #C4C0C0;

  --font-style-primary: "Questrial";
  --font-style-secondary: "Montserrat"

The way to use these css variables works like:
background-color: var(--color-primary);
color: var(--font-color-tertiary);
font-family: var(--font-style-primary);
