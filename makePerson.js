var Person = function(firstAndLast) {

  var fullName = firstAndLast;
  var arr = fullName.split(' ');

  this.getFirstName = () => {
    return arr[0];
  };

  this.getLastName = () => {
    return arr[1];
  };

  this.getFullName = () => {
    return fullName;
  };

  this.setFirstName = (first) => {
    arr[0] = first;
    fullName = arr.join(' ');
  };

  this.setLastName = (last) => {
    arr[1] = last;
    fullName = arr.join(' ');
  };

  this.setFullName = (firstAndLast) => {
    fullName = firstAndLast;
    arr = fullName.split(' ');
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
