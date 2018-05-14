//## NodeJS Firebase ATTEMPT to FUNCTION.

var admin = require('firebase-admin');
var serviceAccount = require('path/to/serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://commbank-au.firebaseio.com'
});
// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function (snapshot) {
    console.log(snapshot.val());
});


// create a database reference to your user data.Then use set() / setValue() 
//to save a user object to the database with the user's username, full name, and birthday.
var usersRef = ref.child("users");
usersRef.set({
    alanisawesome: {
        date_of_birth: "June 23, 1912",
        full_name: "Alan Turing"
    },
    gracehop: {
        date_of_birth: "December 9, 1906",
        full_name: "Grace Hopper"
    }
});

//  https://docs-examples.firebaseio.com/server/saving-data/fireblog/users/alanisawesome/full_name

// set child info seperately
usersRef.child("alanisawesome").set({
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
});
usersRef.child("gracehop").set({
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
});


// update data
var hopperRef = usersRef.child("gracehop");
hopperRef.update({
    "nickname": "Amazing Grace"
});

// multi-path update
usersRef.update({
    "alanisawesome/nickname": "Alan The Machine",
    "gracehop/nickname": "Amazing Grace"
});

//Adding a Completion Callback
dataRef.set("I'm writing data", function (error) {
    if (error) {
        alert("Data could not be saved." + error);
    } else {
        alert("Data saved successfully.");
    }
});

// transactional
// eg . site visits
var visitsRef = db.ref("server/saving-data/fireblog/posts/-JRHTHaIs-jNPLXOQivY/upvotes");
visitsRef.transaction(function (current_value) {
    return (current_value || 0) + 1;
});

# Check the existing access scopes
gcloud compute instances describe[INSTANCE_NAME]--format json

# The above command returns the service account information.For example:
"serviceAccounts": [
    {
        "email": "your.gserviceaccount.com",
        "scopes": [
            "https://www.googleapis.com/auth/cloud-platform",
            "https://www.googleapis.com/auth/userinfo.email"
        ]
    }
],

    // Stop the VM, then run the following command, using the service account
    // that gcloud returned when you checked the scopes.

gcloud compute instances set - service - account[INSTANCE_NAME]--service - account "your.gserviceaccount.com" --scopes "https://www.googleapis.com/auth/firebase.database,https://www.googleapis.com/auth/userinfo.email"


// Get the Database service for the default app
var defaultDatabase = firebase.database();
// Get a reference to the root of the Database
var rootRef = firebase.database().ref("https://<DATABASE_NAME>.firebaseio.com");