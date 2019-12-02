if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
} else {
    console.log("Your browser support");
}

var dbPromise = idb.open("timfavorit", 1, function(upgradeDb) {
    if (!upgradeDb.objectStoreNames.contains("tim")) {
        var peopleOS = upgradeDb.createObjectStore("tim", {
            keyPath: "playerid"
        });
        peopleOS.createIndex("playername", "playername", {
            unique: true
        });
        peopleOS.createIndex("playershirtNumber", "playershirtNumber", {
            unique: true
        });
    }
});