type BandType<T, K> = T extends K ? never : T;
function log<T>(x: BandType<T, object>) {}

log('asdfasdf');
log({});
log(1);
