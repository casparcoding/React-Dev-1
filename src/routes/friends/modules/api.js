import friends from '../../../data/friends';


const getFriends = (query='') => {

    // filter through the array to find matching friends

    const found = friends.filter(
        friend => friend.name.toLowerCase().includes(query.toLowerCase()) || friend.handle.toLowerCase().includes(query.toLowerCase())
    );


    return new Promise((resolve, reject) => {
        resolve(found);
    })
};

export default getFriends;
