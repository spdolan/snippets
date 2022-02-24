const range = (start, stop, step = 1) => 
  Array.from({
    length: ((stop - start) / (step + 1))
  },
    (_, i) => start + i * step
  );

const slicesGenerator = function* (array, number) {
  for (const i = 0; i < array.length; i += number){
    yield array.slice(i, i+number)
  }
};

const uniqueFromProperties = (array, keyProperties) => {
  const keyValueArray = array.map(value => {
    const key = keyProperties.map(keyProp => value[keyProp].join('|'));
    return [key, value]
  })
  /* 
    JS Map creates unique entries
    based on initial value assigned to a given key.
  */
 const map = new Map(keyValueArray);
 return Array.from(map.values());
}