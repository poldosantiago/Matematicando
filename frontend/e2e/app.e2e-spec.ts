import { Project3Page } from './app.po';

describe('project3 App', () => {
  let page: Project3Page;

  beforeEach(() => {
    page = new Project3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
