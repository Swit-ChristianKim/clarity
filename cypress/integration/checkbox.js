/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const test = 'Checkbox';

export function CheckboxSpec() {
  describe(test, () => {
    it('default', () => {
      cy.visit('/checkboxes');
    });
  });
}
