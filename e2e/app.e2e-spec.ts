import { NgClarityStorePage } from './app.po';

describe('ng-clarity-store App', () => {
  let page: NgClarityStorePage;

  beforeEach(() => {
    page = new NgClarityStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
