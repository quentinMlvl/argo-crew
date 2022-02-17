# argo-crew : Front-end

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


## Customize configuration
Modify [`app.config.json`](https://github.com/quentinMlvl/argo-crew/blob/master/front-end/app.config.json).
- `maxRecruits` : the max number of members/recruits in the Argo,
- `apiBaseUrl` : the URL of the back-end API

### ⚠️ Problem when the app reloads the data from the database after an request ⚠️
The data doesn't refresh even with new request : you need to manually refresh the page.
It already happens to me on a school project and I haven't found a solution yet ...
