var proto = (obj) => {
  obj.listeners = {};
  obj.on = (e, cb) => {
    if (obj.listeners.hasOwnProperty(e)) {
      obj.listeners[e].cb = cb;
    } else {
      obj.listeners[e] = {cb: cb}
    }
  }

  obj.trigger = (e) => {
    if (obj.listeners[e]) {
      obj.listeners[e].cb();
    } else {
      console.log(`No such event found called ${e}`)
    }
  }
  return obj;
};

var obj = proto({ name: 'Alice', age: 30 });
obj.on('ageChange' , () => {
  console.log('Age changed');
  return obj.age;
});