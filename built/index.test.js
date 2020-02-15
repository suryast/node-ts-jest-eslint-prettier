"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
describe('greeter', () => {
    it('greeter', () => {
        // Given
        const expected = 'Hello World';
        // When
        const result = index_1.default('World');
        // Then
        expect(result).toBe(expected);
    });
});
//# sourceMappingURL=index.test.js.map