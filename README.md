# Avatar Legends CMS

This is a custom web application by Krishan Gordhan to design and work on in spare time to investigate the mechanics of [next.js](https://nextjs.org/) and [neo4j](https://neo4j.com/) for the backend database.
It is for managing my Avatar Legends Campaign, hence the name Campaign Management System. 
This is here for me to explore different mechanics and functionality more than practicality so if something seems weirdly designed it will be because of that.

## Contents

List of pages, for the submenu and maybe expand whats on each page (maybe)

- Homepage
  - Brief overview of the game and whos playing
- Admin Info
  - Links to PDF's
  - Who's Playing
  - Schedule
  - Safety Tools
  - Plans
- History and Story
  - History
    - Periods (Events)
  - Log
    - Schedule
- Characters 
  - PCs
    - Create a PC
  - NPCs
    - Tiers (Major, Minor)
- Game Mechanics
  - What is an RPG
    - The Story
    - The Fiction
    - The Conversations
    - What you need to play.
    - Scenes
    - Positioning
    - Scope
    - Focus
    - Inciting Incidents
  - Core Elements
    - Fatigue
    - Conditions
    - Balance
    - Bending
    - Stats
    - Moves
      - Basic
      - Balance
      - Advancement
  - Playbooks
  - Combat
    - Custom Techniques Section
  - GM
    - Playing As GM
- Map and Locations

## Design

The main design will be simple white with a dark grey sidebar. No animations or transitions.

Most of the pages will be simple text and content dump pages.

The pages that will be more work will be the Map and Locations page and the Character Creator and Viewer.

**Maps and Locations**
This will be a picture of the atlas. With maybe some interactable nodes that can be hovered over and be selected to open a little modal describing the place maybe a little picture.
Maybe the icon can be coloured based on the region that owns them.
This Map will maybe be broken into regions to select to select the pins so that the page is not so much visual noise. 
The map must be zoomable and drag it around. 


**Character Viewer**
We want a character Viewer for the PC's that will be customisab le and editable as well as a blank one to be able to create new characters from.
I want the design to be similar to the paper version of the character keeper maybe even with the art design and such.
Maybe save the info as a JSON list data for now before getting a database.

Check if character has saved name in list of JSON saved list of names, if so when clicked load info needed.
If not this is a new character sheet.

At the top have a drop down for which playbook which will load a whole range of things. 
Stats can be a simple textbox field as well as defaults loaded already.
Mostly will be fields ot enter into.

Balance will be a slider with a number field for the center, or maybe a checkbox for the center.
(This needs more thought).

For the Moves make it a checkbox that saves what they select. Maybe changes background colour to show selected?

Fatigue, training and conditions can all be checkboxes that you select. Training can be radio box or even images that get lit up as you select them. Add transparency?

For Growth and growth questions just tick the boxes as needed. 

For Combat moves just have a drop down list that auto fills the ifnormation as needed with tick boxes for the Learned, practiced and mastered.

**Custom Combat Techniques**
This one will likely need to wait for the Database to be properly implemted. 