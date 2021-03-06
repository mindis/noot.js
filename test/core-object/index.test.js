/**
* Dependencies
*/
var NOOT = nootrequire('core-object');

/**
* Person Class
*/
var Person = NOOT.CoreObject.extend({
  firstName: '',
  lastName: '',

  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  },

  sayHello: function() {
    return 'Hello, my name is ' + this.getFullName();
  }

}, {
  doSomeStuff: function() {}
});

/**
* Employee Class
*/
var Employee = Person.extend({
  job: '',

  sayHello: function() {
    return this._super() + ', I work as a ' + this.job;
  }
});



describe('NOOT.CoreObject', function() {
  describe('.extend()', function() {
    it('instanceof should return true (parent class)', function() {
      var person = Person.create();
      (person instanceof Person).should.be.true;
    });
    it('instanceof should return true (child class)', function() {
      var employee = Employee.create();
      (employee instanceof Employee).should.be.true;
      (employee instanceof Person).should.be.true;
    });
    it('child should inherit prototype method from parent', function() {
      Employee.prototype.getFullName.should.be.a.function;
    });
    it('child should inherit static method from parent', function() {
      Employee.doSomeStuff.should.be.a.function;
    });
  });
});