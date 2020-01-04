
export const handleCache = (data, setCache) => {
    let cache = JSON.parse(localStorage.getItem('cache'));
    const newCache = {};

    newCache.tail = {
        zip: data.zip,
        name: data.name
    };
    newCache.second = cache.tail;
    newCache.third = cache.second;
    newCache.head = cache.third;
    delete newCache.fourth;

    localStorage.setItem('cache', JSON.stringify(newCache));
    setCache(newCache);
};
