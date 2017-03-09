var socialMediaUser = [{
    name: "Alan Johnson",
    age: 111,
    dailyVisits: 5,
    otherWebsitesUsed: ["lingscars", "farmersonly"],
    vestedInterests: [
        {
            business: "Quality Rakes",
            stakeOfRakes: 33,
            partners: [
                {
                    name: "John Alanson",
                    age: 22,
                    stakeOfRakes: 33,
                },
                {
                    name: "Son Alanjohn",
                    age: 45,
                    stakeOfRakes: 33,
                }]
        },
        {
            business: "Less Reliable Rakes",
            stakeOfLess: 50,
            partner: "James Rickson",
        },
        {
            business: "Rakes n' Friends",
            stakeOfFriends: 50,
            partner: "Rick Jameson",
        }
    ]
},
{
    name: "Candy Rocks",
    age: 58,
    dailyVisits: 11,
    otherWebsitesUsed: ["lingscars", "unicornsrus"],
    vestedInterests: "none",
},
{
    name: "Rock Candies",
    age: 27,
    dailyVisits: 15,
    otherWebsitesUsed: ["whereintheworldiscarmensandiego"],
    vestedInterests: [
        {
            business: "Sweeties",
            stakeOfSweets: 100,
            partners: "none"
        }
    ]
}
]

socialMediaUser[0,1].favoriteFood = "Not Candy";
socialMediaUser[0,0].favoriteFood = "Candy";

socialMediaUser[0].otherWebsitesUsed.push("awebsite", "iheartcandy");
