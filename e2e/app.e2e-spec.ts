import { Angular2ExercisePage } from './app.po';

describe('angular2-exercise App', () => {
  let page: Angular2ExercisePage;

  beforeEach(() => {
    page = new Angular2ExercisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
