# amazon-list-bestSellers

The test directly loads the best seller headphones page, retrieve the list and verifies if it has a length of 50 likewise the Amazon page, besides that it is possible to retrieve other
subcategories just decomment the line 10 and 20 and use a method from the ```headphones``` class for the subcategory needed, and it will extract the list of it.

## Installation

Use the package manager node to install.

```bash
npm install 
```

## Usage

```
npx cypress open
```
After run the test ```Headphones-list.spec.js``` a JSON file with all the products it is created, and a test verifying the existence of them is made.
For sure this can be executed headless 

```
npx cypress run --spec .\cypress\integration\amazon\*.spec.js
```
