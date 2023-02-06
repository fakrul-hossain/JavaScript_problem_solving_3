// array largest name search

function bestFriend(friends) {
    let bestFriend = friends[0]
    for (let i = 1; i < friends.length; i++) {
        if (friends[i].length > bestFriend.length) {
            bestFriend = friends[i];
        }
    }
    return bestFriend;
}

const friends = ['Joni Dev', 'Sarah', 'Michael', 'Emily', 'Fakrul'];
const longestNameFriend = bestFriend(friends);
console.log('Longest Friend Name :',longestNameFriend);