function sliceCityFromAddress(address) {
    const state = address.indexOf('도');
    const city = address.indexOf('시');

    //도가 없을때 (주소가 시로 시작할때)
    if (state === -1) {
        return address.slice(city + 2, address.length);
        //도가 있을때
    } else {
        return address.replace(address.slice(city - 2, city + 2), '')
    }
}