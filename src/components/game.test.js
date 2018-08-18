import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';
import Header from './header';

describe("Game", () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });
  it('Always renders a div', () => {
    const divs = shallow(<Game />).find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});

describe("the rendered div", () => {
  it("contains everything else that gets rendered", () => {
    const divs = shallow(<Game />).find("div");
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(divs.children());
  });
  it("always renders a `Header`", () => {
    const gameDiv = shallow(<Game />).find('div');
    expect(gameDiv.find('Header').length).toBe(1);
  });
  it("always renders a `Main` element", () => {
    const gameDiv = shallow(<Game />).find('div');
    expect(gameDiv.find('main').length).toBe(1);
  });
});

describe("rendered `Header`", () => {
  it("receives two props", () => {
    const gameDiv = shallow(<Game />).find('div');
    const Header = gameDiv.find('Header');
    expect(Object.keys(Header.props()).length).toBe(2);
  });
});

describe("`Header`", () => {
  const restartCallback = jest.fn();
  const auralCallback = jest.fn();
  const headerWrapper = mount(<Header onRestartGame={restartCallback} onGenerateAuralUpdate={auralCallback} />);

  it("should mount a header", () => {
    expect(headerWrapper).toHaveLength(1);
  });
  it("should call `onRestartGame` callback", () => {
    const buttonWrapper = headerWrapper.find('TopNav a.new');
    expect(buttonWrapper).toHaveLength(1);
    buttonWrapper.simulate('click');
    expect(restartCallback).toHaveBeenCalled();
  });
  it("should call `onGenerateAuralUpdate` callback", () => {
    const buttonWrapper = headerWrapper.find('TopNav a.status-link');
    expect(buttonWrapper).toHaveLength(1);
    buttonWrapper.simulate('click');
    expect(auralCallback).toHaveBeenCalled();
  });
});

describe("rendered `Main` element", () => {
  it("renders a `GuessSection`", () => {
    const gameDiv = shallow(<Game />).find('div');
    expect(gameDiv.find('GuessSection').length).toBe(1);
  });
  it("renders a `StatusSection`", () => {
    const gameDiv = shallow(<Game />).find('div');
    expect(gameDiv.find('StatusSection').length).toBe(1);
  });
  it("renders an `InfoSection`", () => {
    const gameDiv = shallow(<Game />).find('div');
    expect(gameDiv.find('InfoSection').length).toBe(1);
  });
});

describe("rendered `GuessSection`", () => {
  it("receives three props", () => {
    const gameDiv = shallow(<Game />).find('div');
    const GuessSection = gameDiv.find('GuessSection');
    expect(Object.keys(GuessSection.props()).length).toBe(3);
  });
});

describe("GuessSection", () => {
  it("should call `onMakeGuess` callback", () => {
    let input = 'foo';
    const guessCallback = jest.fn();
    const guessWrapper = mount(<GuessSection onMakeGuess={guessCallback} />)
    guessWrapper.instance().setEditing(true);
    guessWrapper.find('GuessForm input[type="text"]').instance().value = input;
    const buttonWrapper = guessWrapper.find('GuessForm button.button');
    buttonWrapper.simulate('submit');
    expect(guessCallback).toHaveBeenCalledWith(input);

    // const makeGuessCallback = jest.fn();
    // const guessSectionWrapper = mount(<GuessSection onMakeGuess={jest.fn()} />);
    // const buttonWrapper = guessSectionWrapper.find('GuessForm input.text');
    // expect(buttonWrapper).toHaveLength(1);
    // buttonWrapper.simulate('submit', { preventDefault: jest.fn() });
    // expect(jest.fn()).toHaveBeenCalled();
  });
});


describe("rendered `StatusSection`", () => {
  it("receives two props", () => {
    const gameDiv = shallow(<Game />).find('div');
    const StatusSection = gameDiv.find('StatusSection');
    expect(Object.keys(StatusSection.props()).length).toBe(2);
  });
});

describe("rendered `InfoSection`", () => {
  it("does not receive any props", () => {
    const gameDiv = shallow(<Game />).find('div');
    const InfoSection = gameDiv.find('InfoSection');
    expect(Object.keys(InfoSection.props()).length).toBe(0);
  });
});
