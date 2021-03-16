import * as types from './action_types';
import * as actions from './cart';

describe('Actions', () => {
    let payload;
    beforeEach(() => {
        payload = {};
    })
    it('should create action for TOGGLE_DRAWER', () => {
        const expected = {type: types.TOGGLE_DRAWER, payload };
        expect(actions.toggleDrawer(payload)).toEqual(expected);
    });
    it('should create action for ADD_ITEM', () => {
        const expected = {type: types.ADD_ITEM, payload };
        expect(actions.addToCart(payload)).toEqual(expected);
    });
    it('should create action for PRODUCT_LIST', () => {
        const expected = {type: types.PRODUCT_LIST, payload };
        expect(actions.productList(payload)).toEqual(expected);
    });
    it('should create action for INCREASE', () => {
        const expected = {type: types.INCREASE, payload };
        expect(actions.increase(payload)).toEqual(expected);
    });
    it('should create action for DECREASE', () => {
        const expected = {type: types.DECREASE, payload };
        expect(actions.decrease(payload)).toEqual(expected);
    });
    it('should create action for GET_TOTAL', () => {
        const expected = {type: types.GET_TOTAL, payload };
        expect(actions.getTotal(payload)).toEqual(expected);
    });
    it('should create action for REMOVE_ITEM', () => {
        const expected = {type: types.REMOVE_ITEM, payload };
        expect(actions.removeItem(payload)).toEqual(expected);
    });
    it('should create action for CHANGE_CURRENCY', () => {
        const expected = {type: types.CHANGE_CURRENCY, payload };
        expect(actions.changeProductCurrency(payload)).toEqual(expected);
    });
})