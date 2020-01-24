
describe('My Simple test', () => {

  beforeEach(() => {
    //$("~app-root").waitForDisplayed(11000, true); //view principal
    console.log(' >>>>>>>>> before every test in every file <<<<<<<<<<<<<<<<');
    //ejecuta el log antes de cualquier caso de prueba, independientemente del archivo en el que se encuentre
  }); 

  it('super test', async ()  =>  {
     console.log('Hey, I ran!');
  });

  it('scroll', async () => {
    //driver.timeout(2000);
    //driver.setTimeouts(10000);
    let scroll = $('~scroll');
    //scroll.waitForDisplayed(8000);
    await driver.execute('mobile: scrollBackTo', {direction: 'down', element: scroll});
    console.log('se hizo scroll');
    //driver.touchScroll(10, 100, 'scroll');
    //element.scrollIntoView();
    //$('~scroll').scrollIntoView();
  });
  
  it('input text', async () => {
    let mytextinput = await $('~mytextinput');
    await mytextinput.addValue('test123');

    console.log('Se agrego el texto' + mytextinput.getValue()); // outputs: 'test123'
  });

  it('click hello button', async () => {
    let h_btn = await $('~hello_button');
    await h_btn.click();
    console.log('se hizo click');
  });

});