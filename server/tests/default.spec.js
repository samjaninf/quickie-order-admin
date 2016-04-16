'use strict';

describe('Test tests', function (){
    describe('Pending test', function() {
        xit('should be pending');
    });

    describe('Failing test', function() {
        xit('should fail', function() {
            expect(3*3).to.be.equal(8);
        });
    });

    describe('Passing test', function() {
        xit('should pass', function() {
            expect([4, 5, "Arrrr!!"]).to.deep.equal([4, 5, "Arrrr!!"]);
        });
    });

    describe('Sinon tests', function() {
       var Test = {
           do: function(thing){ return thing + ' and something'}
       };

        describe('Stubby', function() {
           xit('should stub a method', function() {
               expect(Test.do('thing')).to.equal('thing and something');

               sinon.stub(Test, "do", function(thing){ return thing});
               expect(Test.do('thing')).to.equal('thing');

               Test.do.restore();
               expect(Test.do('thing')).to.equal('thing and something');
           });

        });
    });
});