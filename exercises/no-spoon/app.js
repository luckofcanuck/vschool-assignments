var wall = {
    colors: ["white", "redbrick"],
    hard: true,
    count: 4,
    heightInFeet: 8,
    speakWall: function () {
        return "if these walls could talk...";
    }
};

var waterbottle = {
    color: "green",
    squeezable: true,
    volumeInOz: 32,
    users: 1,
    speakBottle: function () {
        console.log("I am" + this.color);
    }
};

var carpet = {
    colors: ["brown", "red", "blue", "white"],
    shapes: ["squares", "lines"],
    fit: "cover",
    taste: "unknown",
    speakCarpet: function () {
        console.log("If these carpets could talk...");
    }
};

var hat = {
    colors: ["grey", "blue", "red"],
    insignia: "New England Patriots",
    awesome: true,
    fit: true,
    doesItFit: function () {
        console.log("probably");
    }
};

var glasses = {
    count: 6,
    fullRimmed: 5,
    nerdInvasion: function () {
        this.count++;
    }
};

var windows = {
    opacity: 0,
    clean: false,
    soothing: true,
    blinds: "down",
    speak: function () {
        console.log("If these windows could talk...");
    }
};

var doors = {
    count: 2,
    functional: true,
    speak: function () {
        console.log("If these doors could talk...");
    }
};

var pillar = {
    color: "white",
    position: "center-center",
    purpose: "perhaps load bearing, perhaps not",
    speak: function () {
        console.log("If these pillars could talk...");
    }
};

var headphones = {
    color: "white",
    size: "small",
    ear: "bud",
    speak: function () {
        console.log("If these windows could talk...");
    }
};

var guitar = {
    colors: ["tan", "black"],
    strings: 6,
    inTune: true,
    speak: function () {
        console.log("If these windows could talk...");
    }
};

console.log(wall.speakWall());