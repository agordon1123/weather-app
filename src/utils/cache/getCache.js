
export const getCache = () => {
    if (localStorage.getItem('cache')) {
        const cache = JSON.parse(localStorage.getItem('cache'));
        // insert into tail
        // remove from head
        return cache;
    } else {
        // first visit
        const cache = {
            tail: {
                zip: '90001',
                name: 'Los Angelos'
            },
            second: {
                zip: '80260',
                name: 'Denver'
            },
            third: {
                zip: '60601',
                name: 'Chicago'
            },
            head: {
                zip: '75201',
                name: 'Dallas'
            }
        }

        localStorage.setItem('cache', JSON.stringify(cache));
        return cache;
    }
};
