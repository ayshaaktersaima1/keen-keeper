import React, { useEffect, useState } from 'react';

const UseFriends = () => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friends.json');
            const datas = await res.json();
            setFriends(datas);
            setLoading(false);

        };
        fetchData();
    },
        []);
    return { friends, setFriends, loading };
};

export default UseFriends;