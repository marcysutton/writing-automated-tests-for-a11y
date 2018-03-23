import React, { Component } from 'react';
import { DequeDeck, TitleSlide, Slide, ChapterSlide } from 'deque-slide-deck';
import Offscreen from 'react-offscreen';
import { Highlight } from 'react-fast-highlight';
// slide images
import marcy from './img/marcy.jpg';
import axeDemi from './img/axe-core.png';
import rainier from './img/rainier-react-rally.jpg';
import rainierOutside from './img/rainier-outside.jpg';
import officeDuo from './img/office-duo.jpg';
import noRagrets from './img/no-ragrets.jpg';
import shiftleft from './img/shiftleft.png';
import wcag21 from './img/wcag21.png';
import axeLogo from './img/axe-logo.png';
import axeNPM from './img/axe-core-npm.png';
import merging from './img/merging.gif';
import dotNorth from './img/dot-north-snow.jpg';
import materialTests from './img/material-tests.png';
import coffeetables from './img/meta-coffeetables.jpg';
import angularStrategies from './img/angular2-test-strategies.png';
import CI from './img/continuous-integration.jpg';
import circle from './img/circleci-logo.svg';
import jenkins from './img/jenkins-logo.png';
import travis from './img/TravisCI-logo.png';
import axeCircle from './img/axe-core-circle.png';
import bandits from './img/ci-bandits.jpg';
import circlePassing from './img/circle-ci-passing.png';
import yesss from './img/tests-passing.gif';
import dancing from './img/dancing.gif';
import designbg from './img/design-bg.png';
import testingbg from './img/testing-bg.png';

// styles
import './App.css';

class App extends Component {
  render() {
    return (
      <DequeDeck animation='fade'>
        <TitleSlide
          profiles={[
            { name: 'Marcy Sutton', image: marcy }
          ]}
        >
          <h1 className='title medium'>Writing Automated Tests <br/>for Accessibility</h1>
        </TitleSlide>

        <Slide>
          <h2 className="title medium">Who am I?</h2>
          <img src={rainier} alt="laptop with Rainier the dog" width="100%" />
        </Slide>

        <Slide>
          <h2 className="title medium">Who am I?</h2>
          <img src={rainierOutside} alt="Rainier the dog outside in the mountains" width="100%" />
        </Slide>

        <Slide>
          <h2 className='text-centered title large'>Let’s talk about testing</h2>
          {/*<img src={axeLogo} width="200px" style={{position:"absolute", top:"100px"}} alt="axe" />*/}
          <ul className='list-center'>
            <li>Why automate for accessibility?</li>
            <li>How to provide value</li>
            <li>Where automation falls short</li>
            <li>Using accessibility test APIs</li>
          </ul>
        </Slide>

        <ChapterSlide>
          <h2 className='title large chapter-heading'>Why automate?</h2>
          <img className='chapter-image' src={designbg} alt=""/>
        </ChapterSlide>

        <Slide>
          <h2 className="title large">Design for good</h2>
          <figure style={{marginTop: '1em'}}>
            <img src={noRagrets} alt="Regrettable 'no ragrets' tattoo" width="100%" />
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">
            Free yourself for more complex tasks
          </h2>
          <figure style={{marginTop:'1em'}}>
            <img src={officeDuo} alt="Two people working in an office" width="100%" />
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">
            Prevent regressions from deploying
          </h2>
          <h3 className="title small">A.K.A. working with teams</h3>
          <figure style={{marginTop:'1em'}}>
            <img src={merging} alt="How not to merge" width="100%" />
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">Document functionality</h2>
          <h3 className="title small">Really helpful to learn your way around a project</h3>
          <figure style={{marginTop:'1em'}}>
            <img src={materialTests} alt="Material Components test folder on Github" width="100%" />
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">Make bugs easier to find and fix</h2>
          <figure style={{marginTop:'1em'}}>
            <img src={dotNorth} alt="A street sign buried in snow" width="100%" />
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">Shift Left</h2>
          <figure>
            <figcaption><a href="https://www.deque.com/shift-left/">https://www.deque.com/shift-left</a></figcaption>
            <img className="chapter-image" style={{top: 'auto', bottom:'30px'}} src={shiftleft} alt="Investment costs in various processes from backlog to release" width="100%" />
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium chapter-heading">Software Testing<br />
            <span className="subhead">a winning strategy for web a11y</span>
          </h2>
          <figure>
            <img src={coffeetables} width="70%" style={{display:'block', margin: '1em auto 0'}} alt="Kramer's coffee table book on coffee tables" />
            <figcaption><em>It's meta!</em></figcaption>
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">Why geek out over this?</h2>
          <figure>
            <img src={dancing} alt="Dancing in an elevator" width="100%" style={{marginTop: '1em'}} />
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">Validating Code &amp; Covering Your Six</h2>
          <div className="hr inset"><hr/></div>
          <div className="list-rows">
            <h3 style={{marginTop: '1em'}}>Functional Testing</h3>
            <ul>
              <li>Unit Testing</li>
              <li>Integration Testing</li>
              <li>System testing</li>
              <li>Acceptance Testing</li>
            </ul>
            <div className="fragment">
              <h3>Non-Functional Testing</h3>
              <ul>
                <li>Performance Testing</li>
                <li>Security Testing</li>
                <li>Usability Testing</li>
                <li>Compatibility Testing</li>
              </ul>
            </div>
          </div>
        </Slide>

        <Slide>
          <h2 className="title large">Accessibility Testing</h2>
          <h3 className="title medium">a.k.a. the cool stuff <span aria-hidden="true">🆒😎</span></h3>
          <div className="list-siblings colorBlock">
            <div className="fragment">
              <h3>Automated</h3>
              <ul>
                <li>HTML/ARIA validation</li>
                <li>Form labels</li>
                <li>Color contrast</li>
                <li>Accessible names</li>
                <li>Landmarks, Structure</li>
                <li>Focus management</li>
                <li>Specifying a language</li>
              </ul>
              <p><a href="https://github.com/dequelabs/axe-core">And more...</a></p>
            </div>
            <div className="fragment">
              <h3>Manual</h3>
              <ul>
                <li>Focus order</li>
                <li>Text alternative quality*</li>
                <li>Screen reader testing</li>
                <li>Keyboard support</li>
                <li>Contrast over images/gradients</li>
                <li>Error identification</li>
              </ul>
              {/*<p><a href="https://www.deque.com/blog/manual-accessibility-testing-approach/">Source</a></p>*/}
            </div>
          </div>
        </Slide>

        <Slide>
          <h2 className="title large">Checking Your Work</h2>
          <p><a href="https://www.w3.org/TR/WCAG21/">https://www.w3.org/TR/WCAG21/</a></p>
          <figure>
            <img src={wcag21} className="chapter-image" style={{top: '125px'}} alt="WCAG 2.1 landing page" />
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium" style={{marginTop:'1em'}}><em>What can we automate?</em></h2>
          {/*find a more compelling way to talk about what we can automate */}
          <h3 className="title xlarge">Tests can catch up to 50% of accessibility issues by volume.</h3>
          <p className="fragment">Related: <a href="https://auto-wcag.github.io/auto-wcag/">Auto-WCAG Community Group</a> &amp; <a href="https://www.w3.org/WAI/GL/task-forces/conformance-testing/work-statement">Accessibility Conformance Testing (ACT) Task Force</a> at W3C</p>
        </Slide>

        <Slide>
          <h2 className="title xlarge" style={{marginTop: '2em'}}>
              <span aria-hidden="true">🚨</span>
              Automated testing is no substitute for manual tests &amp; real user feedback.
              <span aria-hidden="true">🚨</span>
              </h2>
{/*          <aside className="notes">
          Because of the differences in screen readers vs. browser tools / best practices
          </aside>*/}
        </Slide>

        <Slide>
          <h2 className="title large">Accessibility Unit Tests</h2>
          <h3 className="title medium muted">What are they good for?</h3>
          <ul className="list-center">
            <li className="fragment">Component-specific behavior</li>
            <li className="fragment">Interaction/focus APIs</li>
            <li className="fragment">Text alternatives</li>
            <li className="fragment">ARIA states</li>
          </ul>
          {/*<aside className="notes">
          Escape key, tabbing, hitting Enter/Space, Arrow keys
          offscreen/attribute text computation (stuff you don't see)
          ARIA default values for custom elements

          PhantomJS vs. Karma, etc.
          </aside>*/}
        </Slide>

        <Slide>
          <h2 className="title large">Unit test qualities</h2>
          <ul className="list-center">
            <li>Test in isolation <span aria-hidden="true">👍</span></li>
            <li>Inputs: stubs/fixture data <span aria-hidden="true">👍</span></li>
            <li>Often headless <span aria-hidden="true">👍</span></li>
            <li>Fast changing of state <span aria-hidden="true">👍</span></li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="title medium">Unit Test Example</h2>
          <figure className="code">
            <figcaption>
              <h3 className="title small">Testing in isolation</h3>
            </figcaption>
            <Highlight languages={['js']}>{`
it('should pass aria-label to the inner button', inject(function() {
  var template = '<custom-button label="Squishy Face"></custom-button>';
  var compiledElement = make(template);

  var result = compiledElement.find('button').attr('aria-label');
  expect(result).toEqual('Squishy Face');
}));`}
            </Highlight>
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">Unit Test Example (2)</h2>
          <figure className="code">
            <figcaption>
              <a href="https://github.com/davidtheclark/react-aria-menubutton">https://github.com/davidtheclark/react-aria-menubutton</a>
            </figcaption>
            <Highlight languages={['js']}>{`
  it('Manager#openMenu focusing in menu', function() {
    var manager = createManagerWithMockedElements();
    manager.openMenu({ focusMenu: true });
    expect(manager.isOpen).toBe(true);
    expect(manager.menu.setState).toHaveBeenCalledTimes(1);
    expect(manager.menu.setState.mock.calls[0]).toEqual([{ isOpen: true }]);
    expect(manager.button.setState).toHaveBeenCalledTimes(1);
    expect(manager.button.setState.mock.calls[0]).toEqual([{ menuOpen: true }]);

    return new Promise(function(resolve) {
      setTimeout(function() {
        expect(manager.focusItem).toHaveBeenCalledTimes(1);
        expect(manager.focusItem.mock.calls[0]).toEqual([0]);
        resolve();
      }, 0);
    });
  });`}
            </Highlight>
          </figure>
        </Slide>

        <Slide>
          <h2 className="title large">Integration/E2E Tests</h2>
          <h3 className="title medium muted">Good for:</h3>
          <ul className="list-center">
            <li>Real-world browser testing</li>
            <li>Document/page-level rules</li>
            <li>Widget interrop</li>
            <li>Color contrast</li>
            <li>Framework testing flexibility</li>
          </ul>
          {/*<aside className="notes">
          Escape key, tabbing, hitting Enter/Space, Arrow keys
          offscreen/attribute text computation (stuff you don't see)
          ARIA default values for custom elements

          Selenium Webdriver!
          </aside>*/}
        </Slide>

        <Slide>
          <h2 className="title large">Integration test qualities</h2>
          <ul className="list-center">
            <li>In real browsers <span aria-hidden="true">👍</span></li>
            <li>Selenium Webdriver <span aria-hidden="true">👍</span></li>
            <li>Test common user flows <span aria-hidden="true">👍</span></li>
            <li>A little slower <span aria-hidden="true">✌️</span></li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="title medium">Integration test example</h2>
          <figure className="code">
            <figcaption><a href="https://github.com/GoogleChromeLabs/howto-components/">
              https://github.com/GoogleChromeLabs/howto-components
            </a></figcaption>
            <Highlight languages={['js']}>{`const helper = require('../../tools/selenium-helper.js');
const expect = require('chai').expect;
const {Key, By} = require('selenium-webdriver');

describe('howto-tabs', function() {
  beforeEach(function() {
    return this.driver.get('+this.address+'/howto-tabs/demo.html')
      .then(_ => helper.waitForElement(this.driver, 'howto-tabs'));
  });
  it('should focus the next tab on [arrow right]', async function() {
    const found = await helper.pressKeyUntil(this.driver, Key.TAB, 
    _ => document.activeElement.getAttribute('role') === 'tab'
  );
  expect(found).to.be.true;

  await this.driver.executeScript(_ => {
    window.firstTab = document.querySelector('[role="tablist"] > [role="tab"]:nth-of-type(1)');
    window.secondTab = document.querySelector('[role="tablist"] > [role="tab"]:nth-of-type(2)');
  });
  await this.driver.actions().sendKeys(Key.ARROW_RIGHT).perform();
    const focusedSecondTab = await this.driver.executeScript(_ => 
    window.secondTab === document.activeElement
  );
  expect(focusedSecondTab).to.be.true;
});
`}
            </Highlight>
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">Integration test example (2)</h2>
          <figure className="code">
            <figcaption><a href="https://github.com/angular/material2/blob/master/e2e/components/dialog-e2e.spec.ts" target="_blank" title="Link opens in a new window">Angular Material 2 Dialog</a></figcaption>
            <Highlight languages={['js']}>{`
import {browser, by, element, Key} from 'protractor';
import {
  expectToExist,
  expectFocusOn,
  pressKeys,
  clickElementAtPoint,
  waitForElement,
} from '../util/index';

describe('dialog', () => {
  beforeEach(() => browser.get('/dialog'));

  it('should open a dialog', () => {
    element(by.id('default')).click();
    expectToExist('md-dialog-container');
  });

  it('should close by clicking on the backdrop', async() => {
    element(by.id('default')).click();

    await waitForDialog();
    clickOnBackrop();
    expectToExist('mat-dialog-container', false);
  });

  it('should close by pressing escape', async () => {
    element(by.id('default')).click();

    await waitForDialog();
    pressKeys(Key.ESCAPE);
    expectToExist('mat-dialog-container', false);
  });

  it('should close by pressing escape when the first tabbable element has lost focus',
    async () => {
    element(by.id('default')).click();

    await waitForDialog();
    clickElementAtPoint('mat-dialog-container', { x: 0, y: 0 });
    pressKeys(Key.ESCAPE);
    expectToExist('mat-dialog-container', false);
  });

  it('should close by clicking on the "close" button', async () => {
    element(by.id('default')).click();

    await waitForDialog();
    element(by.id('close')).click();
    expectToExist('mat-dialog-container', false);
  });

  it('should focus the first focusable element', async () => {
    element(by.id('default')).click();

    await waitForDialog();
    expectFocusOn('mat-dialog-container input');
  });

  it('should restore focus to the element that opened the dialog', async () => {
    let openButton = element(by.id('default'));

    openButton.click();

    await waitForDialog();
    clickOnBackrop();
    expectFocusOn(openButton);
  });

  it('should prevent tabbing out of the dialog', async () => {
    element(by.id('default')).click();

    await waitForDialog();
    pressKeys(Key.TAB, Key.TAB, Key.TAB);
    expectFocusOn('#close');
  });

  it('should be able to prevent closing by clicking on the backdrop', async () => {
    element(by.id('disabled')).click();

    await waitForDialog();
    clickOnBackrop();
    expectToExist('mat-dialog-container');
  });

  it('should be able to prevent closing by pressing escape', async () => {
    element(by.id('disabled')).click();

    await waitForDialog();
    pressKeys(Key.ESCAPE);
    expectToExist('mat-dialog-container');
  });

  function waitForDialog() {
    return waitForElement('mat-dialog-container');
  }

  function clickOnBackrop() {
    clickElementAtPoint('.cdk-overlay-backdrop', { x: 0, y: 0 });
  }
});`}
            </Highlight>
          </figure>
        </Slide>

        {/*<Slide>
          <iframe src="testing-tweet1.html" title="Testing tweet from Sarah Drasner" style={{minWidth: '510px', minHeight: '670px'}}></iframe>
        </Slide>

        <Slide>
          <iframe src="testing-tweet2.html" title="Testing tweet from Nick Vasilyev" style={{minWidth: '510px', minHeight: '670px'}}></iframe>
        </Slide>*/}

        <Slide>
          <h2 className="title large" style={{marginTop: '2em'}}>Write a combination <br/>
            of tests to catch a variety<br/> of bugs <span aria-hidden="true">💻🔎🐛</span></h2>
          <p>Focus on the outcome, not the implementation</p>
        </Slide>

        <Slide>
          <Offscreen tag="h2">Medium article by Victor Savkin: Three Ways to Test Angular 2 Components</Offscreen>
          <img src={angularStrategies} className="chapter-image" alt="" />
        </Slide>

        <Slide>
          <figure className="support-table">
          <table>
            <caption>
              <h2 className="title large" style={{marginBottom: '0.5em'}}>Test requirements for a11y</h2>
            </caption>
            <thead>
              <tr>
                <th scope="row">Test type</th>
                <th scope="col">Rendered DOM</th>
                <th scope="col">Attached DOM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="3">Unit</th>
              </tr>
              <tr className="group-lead">
                <td>Keyboard focus</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>Labeling</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="group-end">
                <td>ARIA attributes</td>
                <td>~</td>
                <td>~</td>
              </tr>
              <tr>
                <th colspan="3">End-to-end</th>
              </tr>
              <tr className="group-lead">
                <td>Color contrast</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>Event handlers</td>
                <td>~</td>
                <td>~</td>
              </tr>
              <tr className="group-end">
                <td>Accessibility Test APIs</td>
                <td>X</td>
                <td>X</td>
              </tr>
            </tbody>
          </table>
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">Accessibility Testing APIs</h2>
          <div>
            <h3 className="title small">Save yourself from:</h3>
            <ul className="list-center">
              <li>Label/name computation</li>
              <li>Incorrect ARIA usage</li>
              <li>Color contrast</li>
              <li>Data table markup</li>
              <li>Viewport/zooming probz</li>
            </ul>
          </div>
          {/*<aside className="notes">
          Escape key, tabbing, hitting Enter/Space, Arrow keys
          offscreen/attribute text computation (stuff you don't see)
          ARIA default values for custom elements
          </aside>*/}
        </Slide>

        <Slide>
          <h2 className="title medium">aXe-core Accessibility Testing Engine</h2>
          <p><a href="https://www.npmjs.com/package/axe-core">https://www.npmjs.com/package/axe-core</a></p>
          <figure>
            <a href="https://www.npmjs.com/package/axe-core">
              <img src={axeNPM} alt="axe-core on npm" width="100%" />
            </a>
          </figure>
          {/*<aside className="notes">
          There's also a brand-new Chrome extension!
          </aside>*/}
        </Slide>

        <Slide>
          <h2 className="title large">What is <img src={axeDemi} alt="axe-core" width="40%" style={{verticalAlign: 'middle'}} />?</h2>
          <p style={{marginBottom: 0}}><a href="https://github.com/dequelabs/axe-core">https://github.com/dequelabs/axe-core</a></p>
          <ul className="list-center">
            <li>Open-source JS library</li>
            <li>No network or API key required</li>
            <li>Configurable rules &amp; checks</li>
            <li>No false positives</li>
            <li>Based on standards</li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="title medium">Unit test with axe-core</h2>
          <h3 className="title small">Expect no violations in the aXe results object</h3>
          <figure className="code">
            <figcaption><a href="https://axe-core.org/docs/">https://axe-core.org/docs/</a></figcaption>
            <Highlight languages={['js']}>{`
  var axe = require('axe-core');

  describe('Custom component', function() {
    it('should have no a11y violations', function(done) {
      let options = {};

      axe.run('.some-element-selector', options, (error, results) => {
        expect(results.violations.length).toBe(0);
        done();
      });
    });
  });`}
            </Highlight>
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">Integration test with aXe-WebdriverJS</h2>
          <figure className="code">
            <figcaption><a href="https://github.com/dequelabs/axe-webdriverjs">https://github.com/dequelabs/axe-webdriverjs</a></figcaption>
            <Highlight languages={['js']}>{`
  var AxeBuilder = require('axe-webdriverjs'),
      WebDriver = require('selenium-webdriver');
 
  var driver = new WebDriver.Builder()
    .forBrowser('chrome').build();
 
  driver
    .get('https://localhost:4000')
    .then(function (done) {
      AxeBuilder(driver)
        .analyze(function (results) {
          expect(results.violations.length).toBe(0);
          done();
        });
    });
`}
            </Highlight>
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">Closer to the metal with aXe-CLI</h2>
          <figure className="code">
            <figcaption><a href="https://github.com/dequelabs/axe-cli">https://github.com/dequelabs/axe-cli</a></figcaption>
            <Highlight languages={['shell']}>{`
  $ npm install axe-cli -g

  $ axe www.deque.com

  $ axe www.deque.com --include #main --exclude #aside

  $ axe www.deque.com --browser chrome

  $ axe www.deque.com --rules color-contrast,html-has-lang

  $ axe www.deque.com --save deque-site.json`}
            </Highlight>
          </figure>
        </Slide>

        {/*<Slide>
          <h2 className="title large">axe-cli demo</h2>
        </Slide>*/}

        <Slide>
          <h2 className="title large chapter-heading">Continuous Integration</h2>
          <figure><img src={CI} alt="Continuous integration diagram" width="80%" style={{display: 'block', margin:'0.5em auto 0'}} />
          <figcaption style={{textAlign: 'center'}}><small><a href="https://insights.sei.cmu.edu/devops/2015/01/continuous-integration-in-devops-1.html">Source: Carnegie Mellon</a></small></figcaption>
          </figure>
        </Slide>

        <Slide>
          <h2 className="title large chapter-heading">Common CI Solutions</h2>
          <div className="hr inset"><hr/></div>
          <ul className="logos">
            <li><img src={circle} alt="Circle CI" width="200px"/></li>
            <li><img src={travis} alt="Travis CI" width="200px"/></li>
            <li><img src={jenkins} alt="Jenkins" width="240px"/></li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="title medium">Hosted CI in a Nutshell 🌰</h2>
          <ul className="list-center">
            <li>Write code &amp; tests</li>
            <li>Add integration to Git repo</li>
            <li>Enable CI builds for the project</li>
            <li>Push code</li>
          </ul>
        </Slide>

        <Slide>
          <Offscreen tag="h2">axe-core on Github: Circle CI checks along with license/CLA and security/snyk</Offscreen>
          <img src={axeCircle} alt="axe-core repository with CircleCI check" className="chapter-image" />
        </Slide>

        <Slide>
          <h2 className="title medium">Circle CI Configuration File</h2>
          <p><a href="https://circleci.com/docs/2.0/configuration-reference/">
            https://circleci.com/docs/2.0/configuration-reference
          </a></p>
          <figure className="code">
            <figcaption>circle.yml <em>(overrides defaults)</em></figcaption>
            <Highlight languages={['yaml']}>{`version: 2
jobs:
  build:
    docker:
      - image: circleci/node:6.12.3-browsers
    steps:
      - checkout
      - run:
          name: install-npm
          command: npm install
      - run:
          name: test
          command: npm test
`}
            </Highlight>
          </figure>
        </Slide>

        <Slide>
          <h2 className="title large">How does CI help for a11y?</h2>
          <ul className="list-center">
            <li>Test more platforms</li>
            <li>Prevent regressions</li>
            <li>Encourage test coverage <span aria-hidden="true">👍</span></li>
          </ul>
         {/* <aside className="notes">
          Testing the UI ensures you don't break an a11y feature without realizing it. Catch bugs before they go to production.
          </aside>*/}
        </Slide>

        <Slide>
          <h2 className="title large">Tracking who broke the build</h2>
          <figure>
            <figcaption><a href="https://twitter.com/zqxwzq/status/868039653697482753">
              https://twitter.com/zqxwzq/status/868039653697482753
            </a></figcaption>
            <img src={bandits} width="100%" alt="A TV monitor with broken build bandits wanted for bounty"/>
          </figure>
        </Slide>

        <Slide>
          <h2 className="title medium">Get tests passing</h2>
          <img className="chapter-image" style={{top: '70px'}} src={circlePassing} alt="axe-core tests passing on CircleCI" width="100%" />
        </Slide>

        <Slide>
          <h2 className="title medium chapter-heading" style={{marginBottom: '1em'}}>Yesss</h2>
          <figure className="center">
            <img src={yesss} alt="Kip from Napoleon Dynamite saying YES" />
          </figure>
        </Slide>

        <Slide>
          <h2 className="title large">To recap:</h2>
          <ul className="list-center">
            <li>We can automate up to 50% of a11y issues</li>
            <li>Write a mix of unit &amp; integration tests</li>
            <li>Add coverage for keyboard support, interactions</li>
            <li>Use an a11y API to import expertise</li>
            <li>Expand platform coverage with CI</li>
            <li>Don’t forget usability &amp; manual a11y testing!</li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="title large">Resources</h2>
          <ul className="list-center smaller">
            <li><a href="https://github.com/dequelabs/axe-core">https://github.com/dequelabs/axe-core</a></li>
            <li><a href="https://github.com/dequelabs/axe-webdriverjs">https://github.com/dequelabs/axe-webdriverjs</a></li>
            <li><a href="https://github.com/dequelabs/axe-cli">https://github.com/dequelabs/axe-cli</a></li>
            <li><a href="http://bit.ly/stop-hating-your-tests">http://bit.ly/stop-hating-your-tests</a></li>
            <li><a href="https://www.24a11y.com/2017/writing-automated-tests-accessibility/">
              https://www.24a11y.com/2017/writing-automated-tests-accessibility
            </a></li>
          </ul>
        </Slide>

        <Slide className="central">
          <h2 className="title large">3<sup>rd</sup> Annual aXe Hackathon!</h2>
          <h3 className="title medium">Saturday, March 24 - 10am-3pm</h3>
          <p>Downtown Works<br />
            550 West B Street, 4th Floor<br />
            San Diego, CA</p>
          <img src={axeLogo} alt="axe" width="120px" />
        </Slide>
        
        <Slide>
          <div className='text-centered'>
            <h2 className='title large'>Questions?</h2>
            <div className='row space-evenly'>
              <div>
                <img className='large-profile' src={marcy} width="150px" alt="Marcy Sutton" />
                <h3 className='profile-text text-centered'>Marcy Sutton</h3>
                <p className='profile-text text-centered'>marcy.sutton@deque.com</p>
                <p className='profile-text text-centered'><a href="https://twitter.com/marcysutton">@marcysutton</a></p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className='rest-centered'>
            <h2 className='rest-centered medium'>Sign up to receive presentation slides:</h2>
            <p className='title medium'><a href="http://www.deque.com/csun18">{'http://www.deque.com/csun18'}</a></p>
          </div>
        </Slide>
      </DequeDeck>
    );
  }
}

export default App;
