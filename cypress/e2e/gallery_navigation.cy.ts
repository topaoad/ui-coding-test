describe('Page Navigation', () => {
  it('navigates to the gallery page on link click', () => {
    // テストを開始するページにアクセス
    cy.visit('/');

    // リンクをクリック（リンクのテキストが 'Gallery' と想定）
    cy.get('a').contains('絵画一覧ページへ').click();

    // Gallery ページに遷移したことを確認（URLをチェック）
    cy.url().should('include', '/gallery');

    // Gallery ページ上の特定の要素（例えば、ページタイトル）を確認
    cy.get('a').contains('メニュー1');
  });
});
