# Silvi-TKWW-test
Practice project with Cypress for interview preparation. Includes basic end-to-end tests, UI interactions, and test organization examples

## Overview

This repository holds a Cypress practice exercise for the TK Save Favorite feature. The goal is to implement at least one happy path test that covers the flow where a logged-out user attempts to favorite a vendor, is prompted to sign in, completes authentication, and has the favorite persisted to their account. Additional negative tests (e.g. failed login, already-favorited, UI edge cases) are encouraged.

## Feature Under Test 

TheKnot.com provides a search directory for wedding vendors. On search result pages there is a heart icon that marks a vendor as a Favorite. When a logged-out user clicks the heart, they should be prompted to log in or sign up; after completing authentication the favorite should be saved to their account.

Example search URL:

https://www.theknot.com/marketplace/wedding-djs-hoboken-nj?sort=featured

Vendor Manager URL (favorites listing):

https://www.theknot.com/wedding-vendor-manager

Test account (provided by exercise):

Email: qamasked+vendortech@weddingwire.com

Password: 8*qM2025iz

⚠️ These credentials were provided as part of the exercise. Do not commit secrets to git. See Environment & Secrets section.


## Prerequisites

Node.js (LTS recommended)

npm (comes with Node)

Git

## Setup & Install

Clone the repo (if you haven't already):
git clone <your-repo-url>
cd <repo-folder>
Install dependencies: npm install
(Optional) Open Cypress Test Runner: npx cypress open
Run tests headless (CI / single run): npx cypress run 
### or run a specific spec file
npx cypress run --spec "cypress/e2e/save_favorite.cy.js"



