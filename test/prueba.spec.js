
describe('My Simple test', () => {

  it('super test', () => {
    console.log('Hey, I ran!');
  });

  it('click hello button',  () => {
  
    $('~hello_button').click();

  });

});