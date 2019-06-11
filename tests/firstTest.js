module.exports = {
    'step one: navigate to ' : function (browser) {
      browser
        .url('http://localhost:8081/concerts')
        .waitForElementVisible('body', 10000)
        .setValue('input[type=text]', 'ewik')
        .waitForElementVisible('body', 1000)
      
    },
    'step two: navigate to ' : function (browser) {
        browser
          .url('http://localhost:8081/addconcert')
          .waitForElementVisible('body', 10000)
          .setValue('input[name="art"]', 'ewik')
          .waitForElementVisible('body', 10000)
          .setValue('input[name="loc"]', 'Karpacz')
          .waitForElementVisible('body', 10000)
          .setValue('input[name="dat"]', '23.06.2019')
          
          .waitForElementVisible('body', 1000)
          .click('button[name=add]')
          .pause(1000)
      },
      'step three: navigate to ' : function (browser) {
        browser
          .url('http://localhost:8081/deleteConcert')
          .waitForElementVisible('body', 10000)
          .setValue('input[type=text]', 'ewik')
          .pause(1000)
          .waitForElementVisible('body', 1000)
          .click('button[name=delete]')
          .pause(1000)
          .click('button[name=yes]')
          .pause(1000)
      },
    'step two: stop test' : function (browser) {
      browser
       
        .pause(1000)
       
        .end();
    }
  };