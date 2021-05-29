# Node Typescript Libraray Boilerplate

* Ensure to add SSH URL and setup SSH Authentication for the repo to ensure smooth execution

## Using the Boilerplage to crate a new library

* Clone the repo by issing the following command:

```git clone git@github.com:bksdrodrigo/node-typescript-lib-boilerplate.git```

* Remove the git reference and add your own. Please note you have to setup SSH authentication for your repo

```
mv node-typescript-lib-boilerplate <project folder>
cd <project folder>
rm -rf ./.git
git remote add  origin <ssh url of your repo>
git add .
git commit -m "first commit"
git push
```

* Do the following changes to the package.json file
  - Change the ```version:``` to 1.0.0 (initial version)
  - Change ```name:```, ```description:```, ```author:``` and ```license``` to reflect your project details
  - Change the Git repository url of ```homepage:```, ```bugs:``` and ```repository``` configurations
  - Change npm registry url to reflect your npm registry under ```publishConfig``` 

## NPM Commands
* ```npm test```  - Test the applcation
* ```npm build``` - build the library
* ```npm bumpversion``` - Will bump the version of the application by 1, format, lint, test, build, push to git repo, create a new tag in git repo and publish the library automatically to npm registry 

## Setup NPMRC for private node registry authentication
* create .npmrc file in the root
* Add the private registry URL
  ```registry=http://localhost:8081/repository/nbe-group-repo/```
* Login to the private registry, using your username and password
  ```npm login --registry=http://localhost:8081/repository/nbe-group-repo/```
* Cat your global .npmrc file to find out the generated auth token
  ``` cat ~/.npmrc ```
* Copy paste the auth token string to your package .npmrc file
  ```_authToken=NpmToken.xxxxxxxxxx ```
